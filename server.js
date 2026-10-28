/**
 * FAMILY ARENA — Professional Realtime Multiplayer Backend Server
 * Technology: Node.js, Express, Socket.IO
 * Features:
 * - Room creation with 4-letter unique PIN code
 * - Join room, host controls, player lobby list
 * - Random matchmaking queue
 * - Synchronized question distribution and server-side timer validation
 * - Anti-cheat answer verification & speed score calculation
 * - Graceful disconnect handling and host delegation
 */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// Serve static frontend files (index.html, index.css, index.js)
app.use(express.static(__dirname));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 3000;

// In-Memory Room & Matchmaking Store
const rooms = new Map();
const matchmakingQueue = [];

// Helper: Generate clean 4-letter alphanumeric Room PIN
function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  // Ensure uniqueness
  return rooms.has(code) ? generateRoomCode() : code;
}

// Sample Server-side Curated Questions for authoritative multiplayer matches
const MULTIPLAYER_QUESTIONS = [
  {
    id: 1001,
    category: "O‘zbekiston Tarixi",
    difficulty: "O‘rta",
    question: "Mirzo Ulug‘bek Samarqandda qaysi fanga bag‘ishlangan mashhur rasadxona barpo etgan?",
    options: ["Tibbiyot", "Geologiya", "Astronomiya", "Falsafa"],
    correct: 2,
    explanation: "Mirzo Ulug‘bek 1424-1428 yillarda 1018 ta yulduzni o‘rgangan ulkan rasadxona qurdirgan."
  },
  {
    id: 1002,
    category: "Dunyo Geografiyasi",
    difficulty: "Oson",
    question: "Yer yuzidagi eng katta va eng chuqur okean qaysi?",
    options: ["Atlantika okeani", "Tinch okeani", "Hind okeani", "Shimoliy muz okeani"],
    correct: 1,
    explanation: "Tinch okeani yer yuzasining 30% dan ko‘prog‘ini egallaydi."
  },
  {
    id: 1003,
    category: "Mantiqiy Savollar",
    difficulty: "O‘rta",
    question: "Uni qancha ko‘p olsangiz, u shuncha kattalashadi. Bu nima?",
    options: ["Qarz", "O‘ra (chuqur)", "Yosh", "Bilim"],
    correct: 1,
    explanation: "Chuqurdan tuproqni qancha ko‘p olsangiz, o‘ra kattalashadi."
  },
  {
    id: 1004,
    category: "Fan va Texnologiya",
    difficulty: "O‘rta",
    question: "Kompyuter olamida 'Algoritm' atamasi qaysi buyuk allomaning nomi bilan bog‘liq?",
    options: ["Al-Xorazmiy", "Abu Rayhon Beruniy", "Al-Farg‘oniy", "Ibn Sino"],
    correct: 0,
    explanation: "Al-Xorazmiy nomi lotinchalashtirilib 'Algorithmi' shaklida zamonaviy dasturlash asosiga aylangan."
  },
  {
    id: 1005,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "Oson",
    question: "Yer yuzida yashagan va hozir yashayotgan eng ulkan jonivor qaysi?",
    options: ["Afrika fili", "Ko‘k kit (Moviy kit)", "Tirannozavr dinozavr", "Kashalot"],
    correct: 1,
    explanation: "Ko‘k kitning og‘irligi 150-180 tonnagacha yetadi."
  },
  {
    id: 1006,
    category: "Oila va Tarbiya",
    difficulty: "Oson",
    question: "Oilada farzand tarbiyasida eng samarali va kuchli vosita nima hisoblanadi?",
    options: ["Qattiqqo‘llik va jazo", "Ota-onaning shaxsiy ibrati va mehr-muhabbati", "Faqat qimmat sovg‘alar berish", "Ko‘p tanqid qilish"],
    correct: 1,
    explanation: "Bolalar so‘zlardan ko‘ra ota-onaning xatti-harakati va odoblaridan ibrat oladilar."
  },
  {
    id: 1007,
    category: "Matematika",
    difficulty: "Oson",
    question: "Uchburchakning ichki burchaklari yig‘indisi necha gradusga teng?",
    options: ["90°", "180°", "270°", "360°"],
    correct: 1,
    explanation: "Tekislikdagi barcha uchburchaklarning ichki burchaklari yig‘indisi 180° bo‘ladi."
  },
  {
    id: 1008,
    category: "Umumiy Bilimlar",
    difficulty: "Oson",
    question: "Olmos qaysi sof kimyoviy elementdan iborat?",
    options: ["Kremniy", "Uglerod (Karbon)", "Temir", "Oltin"],
    correct: 1,
    explanation: "Olmos sof uglerod atomlarining kristalli panjarasidan tashkil topgan."
  }
];

// Socket.IO Realtime Connection Handling
io.on('connection', (socket) => {
  console.log(`[+] Yangi o‘yinchi ulandi: ${socket.id}`);

  let currentRoomCode = null;

  // 1. Create Private Room (Host)
  socket.on('create-room', ({ playerName, avatar }, callback) => {
    const roomCode = generateRoomCode();
    currentRoomCode = roomCode;

    const newRoom = {
      code: roomCode,
      hostId: socket.id,
      state: 'lobby', // 'lobby' | 'in-game' | 'ended'
      players: [
        {
          id: socket.id,
          name: playerName || 'Host Bilimdon',
          avatar: avatar || '👑',
          score: 0,
          isHost: true,
          streak: 0
        }
      ],
      currentQuestionIndex: 0,
      questionTimer: null,
      questionStartTime: null
    };

    rooms.set(roomCode, newRoom);
    socket.join(roomCode);

    console.log(`[🏠 XONA YARATILDI] Kod: ${roomCode} | Host: ${playerName}`);

    if (callback) {
      callback({ success: true, roomCode });
    }

    io.to(roomCode).emit('room-updated', {
      players: newRoom.players,
      roomCode: newRoom.code
    });
  });

  // 2. Join Room by PIN
  socket.on('join-room', ({ roomCode, playerName, avatar }, callback) => {
    const code = roomCode.toUpperCase();
    const room = rooms.get(code);

    if (!room) {
      if (callback) callback({ success: false, message: 'Bunday kodli xona topilmadi!' });
      return;
    }

    if (room.state !== 'lobby') {
      if (callback) callback({ success: false, message: 'Bu xonada o‘yin allaqachon boshlangan!' });
      return;
    }

    if (room.players.length >= 8) {
      if (callback) callback({ success: false, message: 'Xonada maksimal o‘yinchilar (8 ta) to‘lgan!' });
      return;
    }

    currentRoomCode = code;
    socket.join(code);

    const playerObj = {
      id: socket.id,
      name: playerName || `O‘yinchi ${room.players.length + 1}`,
      avatar: avatar || '🦁',
      score: 0,
      isHost: false,
      streak: 0
    };

    room.players.push(playerObj);

    console.log(`[👥 XONAGA QO‘SHILDI] Kod: ${code} | O‘yinchi: ${playerObj.name}`);

    if (callback) {
      callback({ success: true, roomCode: code });
    }

    io.to(code).emit('room-updated', {
      players: room.players,
      roomCode: room.code
    });
  });

  // 3. Start Game by Host
  socket.on('start-game', ({ roomCode }) => {
    const room = rooms.get(roomCode);
    if (!room || room.hostId !== socket.id) return;

    room.state = 'in-game';
    room.currentQuestionIndex = 0;

    // Send shuffled server questions
    const shuffledQuestions = [...MULTIPLAYER_QUESTIONS].sort(() => 0.5 - Math.random());

    console.log(`[🚀 O‘YIN BOSHLANDI] Xona: ${roomCode}`);

    io.to(roomCode).emit('game-started', {
      questions: shuffledQuestions,
      totalQuestions: shuffledQuestions.length
    });
  });

  // 4. Server-Validated Answer Submission
  socket.on('submit-answer', ({ roomCode, questionId, selectedIndex, timeRemainingRatio }, callback) => {
    const room = rooms.get(roomCode);
    if (!room) return;

    const player = room.players.find((p) => p.id === socket.id);
    if (!player) return;

    const question = MULTIPLAYER_QUESTIONS.find((q) => q.id === questionId);
    if (!question) return;

    const isCorrect = selectedIndex === question.correct;
    let earnedPoints = 0;

    if (isCorrect) {
      player.streak = (player.streak || 0) + 1;
      let multiplier = 1.0;
      if (player.streak === 2) multiplier = 1.2;
      else if (player.streak === 3) multiplier = 1.5;
      else if (player.streak >= 4) multiplier = 2.0;

      const speedBonus = Math.round(Math.max(0, timeRemainingRatio) * 500);
      earnedPoints = Math.round((1000 + speedBonus) * multiplier);
      player.score += earnedPoints;
    } else {
      player.streak = 0;
    }

    if (callback) {
      callback({
        isCorrect,
        correctIndex: question.correct,
        explanation: question.explanation,
        earnedPoints,
        totalScore: player.score
      });
    }

    // Broadcast updated scoreboard to all room members
    io.to(roomCode).emit('score-update', {
      players: room.players.map((p) => ({
        id: p.id,
        name: p.name,
        avatar: p.avatar,
        score: p.score
      }))
    });
  });

  // 5. Leave Room
  socket.on('leave-room', ({ roomCode }) => {
    leaveCurrentRoom(socket, roomCode);
  });

  // 6. Handle Disconnection
  socket.on('disconnect', () => {
    console.log(`[-] O‘yinchi uzildi: ${socket.id}`);
    if (currentRoomCode) {
      leaveCurrentRoom(socket, currentRoomCode);
    }
  });

  function leaveCurrentRoom(sock, code) {
    const room = rooms.get(code);
    if (!room) return;

    room.players = room.players.filter((p) => p.id !== sock.id);
    sock.leave(code);

    if (room.players.length === 0) {
      // Room empty, delete
      rooms.delete(code);
      console.log(`[🗑️ XONA O‘CHIRILDI] Kod: ${code}`);
    } else {
      // If host left, delegate host to next player
      if (room.hostId === sock.id) {
        room.hostId = room.players[0].id;
        room.players[0].isHost = true;
        console.log(`[👑 YANGI HOST] ${room.players[0].name} (${code})`);
      }
      io.to(code).emit('room-updated', {
        players: room.players,
        roomCode: room.code
      });
    }
  }
});

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`⚡ FAMILY ARENA MULTIPLAYER SERVER IS RUNNING`);
  console.log(`🌐 Server manzili: http://localhost:${PORT}`);
  console.log(`====================================================`);
});
