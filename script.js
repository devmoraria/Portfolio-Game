// =============================================
// CONTEÚDO DOS CAPÍTULOS — edite os textos aqui
// =============================================
const CHAPTERS = {
  1: {
    title: "CAP. I — A ORIGEM",
    text: "Antes do código, veio ao palco uma outra natureza: uma comunidade com mais de\n30 mil seguidores, editando e construindo videos do zero.\n\nHoje curso ADS na Anhanguera (formatura em 2027) e recentemente me formei no\nInstituto PROA. A curiosidade que antes virava vídeo agora vira\nproduto e código, o mesmo olhar para o que prende a atenção de alguém guia\ncada decisão que tomo.",
    portrait: "assets/character-origem.png"
  },
  2: {
    title: "CAP. II — O CÓDIGO",
    text: "Kotlin, Python, Node.js, MongoDB, Jetpack Compose.\n\nCada stack aqui nasceu de um projeto real, não de tutorial: apps\nAndroid com MVVM e Hilt, APIs em Node.js, pipelines de dados em\nMongoDB com agregações complexas. Escrever código é a parte do\ntrabalho que eu nunca larguei, mesmo virando P.O em projetos.",
    portrait: "assets/character-codigo.png"
  },
  3: {
    title: "CAP. III — PRODUTO & LIDERANÇA",
    text: "Atuei como Product Owner em projetos, como Virtual Dream e uma automação de compras, aplicando\nScrum no dia a dia.\n\nUma das lições mais importantes que levo veio de feedback direto de\nprofessores: separar a ideia da própria identidade quando ela é\nquestionada em público. Aprender a ouvir antes de defender é, pra\nmim, uma competência tão técnica quanto qualquer linha de código.",
    portrait: "assets/character-lideranca.png",
    side: "right"
  },
  4: {
    title: "CAP. IV — PROJETOS",
    text: "<a href=\"https://github.com/devmoraria/Livrerso\" target=\"_blank\" rel=\"noopener\">Livrerso</a>, <a href=\"https://github.com/devmoraria/Hotel-Abacaxi\" target=\"_blank\" rel=\"noopener\">Hotel Abacaxi</a>, Pixel Hero, <a href=\"https://github.com/devmoraria/IT-Purchasing-Automation\" target=\"_blank\" rel=\"noopener\">Automação de Compras de TI</a>,\n<a href=\"https://github.com/VirtualDream-Demo-Day\" target=\"_blank\" rel=\"noopener\">Virtual Dream</a> e <a href=\"https://github.com/devmoraria/Love-Bombing\" target=\"_blank\" rel=\"noopener\">Love Bombing</a>.\n\n<strong>Livrerso</strong> — assistente de leitura em Kotlin (Android nativo). Uma\n\"roleta\" sorteia livros sem repetir, buscando capa, título e autor na API\ndo Open Library, com uma melodia de acerto sintetizada em tempo real via\nAudioTrack, sem nenhum arquivo de áudio embutido.\n\n<strong>Hotel Abacaxi</strong> — sistema de gestão hoteleira em Kotlin, 100% em\nterminal: reservas com mapa de ocupação, cadastro de hóspedes, checkout\ncom cálculo automático, dashboard com gráficos em ANSI e um assistente\nvirtual que interpreta comandos em linguagem natural pra navegar entre\nos módulos.\n\n<strong>Automação de Compras de TI</strong> — dashboard web (Python/Flask +\nMongoDB) que orquestra um robô UiPath: o time cadastra os equipamentos\ndesejados, o robô pesquisa preços em fornecedores e devolve os\nresultados ao vivo, com relatório de ROI exportável em PDF. Resultado:\n~32h/mês de pesquisa manual viraram ~2,5h. Fui P.O. e capitão do time\nnesse projeto.\n\n<strong>Virtual Dream</strong> — app Android (Kotlin + Jetpack Compose) que usa IA\npara interpretar sonhos: o usuário descreve o que sonhou e recebe uma\nleitura simbólica, com diário de sonhos e histórico salvo na nuvem. Fui\nP.O. de um time de 8 pessoas nesse projeto.\n\n<strong>Love Bombing</strong> — feito só com HTML/CSS/JS puro (Canvas API, scroll\nreveals), é um template de página de comemoração que outras pessoas\npodem reaproveitar pra próprias datas especiais.\n\nEm construção agora: o <strong>Echo Iris</strong>, um player que traduz som em\nvisual 3D com IA em tempo real — meu challenge do programa ONE Tech AI\nBuilder (Alura).",
    portrait: "assets/character-projetos.png",
    shots: [
      { src: "assets/project-livrerso.png", alt: "Livrerso — tela da roleta de recomendação de livros", link: "https://github.com/devmoraria/Livrerso", vertical: true },
      { src: "assets/project-hotel-abacaxi.png", alt: "Hotel Abacaxi — dashboard de ocupação e receita no terminal", link: "https://github.com/devmoraria/Hotel-Abacaxi" },
      { src: "assets/project-automacao-compras.png", alt: "Automação de Compras de TI — painel com KPIs de ROI do robô UiPath", link: "https://github.com/devmoraria/IT-Purchasing-Automation" },
      { src: "assets/project-virtual-dream.jpg", alt: "Virtual Dream — tela de interpretação de sonhos com IA", link: "https://github.com/VirtualDream-Demo-Day", vertical: true },
      { src: "assets/project-celebration-page.png", alt: "Love Bombing — tela de entrada do template de comemoração", link: "https://github.com/devmoraria/Love-Bombing" }
    ]
  },
  5: {
    title: "CAP. V — REDE & COMUNIDADE",
    text: "LinkedIn, eventos de tecnologia, comunidade PROA.\n\nConstruir em público faz parte do processo: compartilhar decisões,\n aprendizados e conquistas, não só o resultado final. Rede\nnão é só networking, é encontrar gente que constrói junto.",
    portrait: "assets/character-comunidade.png",
    side: "right",
  
    scale: 1.25
  },
  6: {
    title: "CAP. VI — A VISÃO",
    text: "PO/Dev → Tech Lead → PM/GPM → Diretor de Produto → CPO.\n\nNão escolho entre construir e liderar, meu foco é fazer as duas coisas ao mesmo\ntempo, de PROPÓSITO. Cada sprint, cada decisão de produto, cada linha\nde código é um passo dessa trajetória.\n Este castelo NUNCA será o fim.\n É onde a próxima fase começa.\n\nAcompanhe cada fase dessa trilha no meu <a href=\"https://devmoraria.github.io/Career-map/\" target=\"_blank\" rel=\"noopener\">Mapa de Carreira</a>.",
    portrait: "assets/character-visao.png"
  }
};

// ELEMENTOS CONSTANTES
const bootScreen = document.getElementById('boot-screen');
const gameWorld = document.getElementById('game-world');
const gameViewport = document.getElementById('game-viewport');
const player = document.getElementById('player');
const playerSvg = document.getElementById('player-svg');
const playerDown = document.getElementById('player-down');
const playerSide = document.getElementById('player-side');
const playerBack = document.getElementById('player-back');
const playerJump = document.getElementById('player-jump');
const stations = Array.from(document.querySelectorAll('.station'));
const questDots = Array.from(document.querySelectorAll('.quest-dot'));
const questLabel = document.getElementById('hud-quests-label');
const muteBtn = document.getElementById('mute-btn');
const sfxMuteBtn = document.getElementById('sfx-mute-btn');
const modal = document.getElementById('chapter-modal');
const dialogWrap = document.getElementById('dialog-wrap');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalShots = document.getElementById('modal-shots');
const modalCharacterImg = document.getElementById('modal-character-img');
const modalClose = document.getElementById('modal-close');
const toast = document.getElementById('achievement-toast');
const contactFooter = document.getElementById('contact-footer');
const interactBtn = document.getElementById('interact-btn');
const skipLinkBoot = document.getElementById('skip-link-boot');
const skipLinkHud = document.getElementById('skip-link-hud');
const dpadUp = document.getElementById('dpad-up');
const dpadDown = document.getElementById('dpad-down');
const dpadLeft = document.getElementById('dpad-left');
const dpadRight = document.getElementById('dpad-right');
const zoneGate = document.getElementById('zone-gate');
const zoneTransition = document.getElementById('zone-transition');
const zoneTransitionPortrait = document.getElementById('zone-transition-portrait');
const maskZone1 = document.getElementById('mask-zone1');
const maskZone2 = document.getElementById('mask-zone2');

// Pose do retrato na cutscene de transição, varia conforme o destino pra
// não repetir sempre a mesma imagem.
const TRANSITION_PORTRAIT = {
  1: 'assets/player-side-3.png', // indo pra floresta (zona 1)
  2: 'assets/player-jump-2.png'  // indo pro castelo (zona 2)
};

// ESTADO DO JOGO
const WORLD_W = 800;
// O mundo tem 2 zonas empilhadas: castelo (y: 0–447) em cima,
// floresta (y: 447–894) embaixo, onde o jogador começa.
const ZONE_H = 447;
const WORLD_H = ZONE_H * 2;
const ZONE_BOUNDARY_Y = ZONE_H; // linha do portão entre floresta e castelo
const VIEWPORT_H = ZONE_H; // altura da câmera igual à de uma zona — assim ela nunca mostra um pedaço da zona vizinha (era isso que causava a borda preta perto da fronteira)
const PLAYER_RADIUS = 14;
const STATION_RANGE = 55;

// Física tipo "carrinho" (inspirado no portfólio do Bruno Simon): inércia
// ao acelerar, atrito ao soltar. Colisão trava o movimento na parede em
// vez de fazer quicar. Valores ajustados no olho até achar um ritmo ágil
// sem ficar rápido/feio demais no giro.
const MAX_SPEED = 4.0;
const ACCEL = 0.55;
const FRICTION = 0.88;
const STATION_SOLID_RADIUS = 40; // menor que STATION_RANGE: o balão aparece antes de colidir
const FLIP_THRESHOLD = 0.35; // faixa morta pro flip horizontal (--flip) isso evita virar de lado a qualquer tremor de velocidade

// Margem menor que PLAYER_RADIUS só pra essa borda (árvores/moldura do
// mapa) — com PLAYER_RADIUS o personagem parava longe demais da árvore.
const WALL_MARGIN = 6;

// Limites de onde dá pra pisar — aproximação das árvores/moldura de cada
// zona, já que o fundo é uma ilustração única sem tilemap de colisão real.
const MIN_PLAYABLE_Y = 60; // fachada do castelo, não dá pra "entrar" no prédio

// Borda esquerda/direita reta pro mapa inteiro, mesmo valor em qualquer Y
// — evita aquele "salto pro centro" que rolava quando o limite mudava
// conforme a altura.
const LEFT_BOUND = 170;
const RIGHT_BOUND = 630;

function getBoundsAtY() {
  return { left: LEFT_BOUND, right: RIGHT_BOUND };
}

// Muros de pedra que flanqueiam o caminho na zona do castelo (ver
// bg-zone2-castelo.jpg), com um vão central por onde o caminho passa.
const SOLID_RECTS = [
  { x1: 40,  y1: 175, x2: 195, y2: 205 }, // muro esquerdo
  { x1: 605, y1: 175, x2: 760, y2: 205 }  // muro direito
];

let gameStarted = false;
let musicMuted = false;
let sfxMuted = false;
let modalOpen = false;
let zoneTransitionLock = false; // trava o movimento durante a cutscene de troca de zona
let visitedCount = 0;

// SPRITES/FRAMES DE CORPO INTEIRO — frente / lateral / costas / pulo
const DOWN_FRAMES = [
  'assets/player-down-1.png', // parado
  'assets/player-down-2.png',
  'assets/player-down-3.png'
];
const SIDE_FRAMES = [
  'assets/player-side-1.png',
  'assets/player-side-2.png',
  'assets/player-side-3.png',
  'assets/player-side-4.png',
  'assets/player-side-5.png'
];
const BACK_FRAMES = [
  'assets/player-back-1.png',
  'assets/player-back-2.png',
  'assets/player-back-3.png'
];
const JUMP_FRAMES = [
  { src: 'assets/player-jump-1.png', dur: 105 }, // agachar
  { src: 'assets/player-jump-2.png', dur: 320 }, // no ar (pulo mais alto = mais tempo no ar)
  { src: 'assets/player-jump-3.png', dur: 105 }  // aterrissar
];
const FRAME_INTERVAL = 130; // ms entre frames ao andar (frente/lado/costas)

// Pré-carrega todos os frames pra troca de "src" ser instantânea, sem o
// flash de imagem em branco na primeira vez que cada um aparece.
[...DOWN_FRAMES, ...SIDE_FRAMES, ...BACK_FRAMES, ...JUMP_FRAMES.map(f => f.src)].forEach((src) => {
  const img = new Image();
  img.src = src;
});

let isJumping = false;
// Direção que o personagem está encarando no momento, só muda quando ele
// de fato anda numa direção dominante nova; parar de andar NÃO reseta isso,
// só virar pra baixo (ou pra cima/lado) é que troca a pose.
let facingMode = 'down'; // 'down' | 'side' | 'back'
let lastPoseSwitchTs = 0; // timestamp (ts do gameLoop) da última troca de pose
const POSE_HOLD_MS = 220; // tempo mínimo entre trocas de pose, evita "gaguejar" perto da diagonal
const POSE_SWITCH_RATIO = 1.5; // a nova direção precisa superar a atual por essa margem (não só empatar) pra vencer

// Relógio único de passada, continua correndo mesmo quando o personagem
// troca de direção — evita a travadinha que rolava quando cada direção
// tinha seu próprio timer e o novo começava "frio".
let walkClock = 0;
let walkBob = 0; // deslocamento vertical atual do "bob" de caminhada, em px (ver gameLoop)
let lastTs = 0;
let lastFootstepIndex = -1; // controla o "compasso" dos passos, ver footstep() no gameLoop

function triggerJump() {
  if (isJumping) return;
  isJumping = true;
  playerSvg.classList.remove('jumping');
  void playerSvg.offsetWidth; // reflow, pra poder reiniciar a animação
  playerSvg.classList.add('jumping');
  jumpSound();

  let t = 0;
  JUMP_FRAMES.forEach((frame) => {
    setTimeout(() => { playerJump.src = frame.src; }, t);
    t += frame.dur;
  });
  setTimeout(() => {
    playerSvg.classList.remove('jumping');
    isJumping = false;
  }, t);
}

// Ponto de início do caminho de cada zona, centralizado na trilha. Usado
// no boot e sempre que o jogador cruza a fronteira floresta/castelo.
const ZONE_SPAWN = {
  1: { x: 400, y: 850 }, // início da floresta (clareira do fundo do mapa)
  2: { x: 400, y: 430 }  // início do caminho do castelo, logo após o portão
};

const player_pos = { x: ZONE_SPAWN[1].x, y: ZONE_SPAWN[1].y }; // início: base da floresta (zona 1)
const velocity = { x: 0, y: 0 };
let camY = 0; // topo (em unidades do mundo) do que a câmera mostra
let zone1Complete = false; // libera o portão pra zona do castelo
let currentZone = 1; // 1 = floresta, 2 = castelo — usado só pra disparar a cutscene

const keys = { up: false, down: false, left: false, right: false };

const stationConfigs = stations.map((el) => {
  const left = parseFloat(el.style.left) || getComputedLeft(el);
  const top = parseFloat(el.style.top) || getComputedTop(el);
  return {
    el,
    chapter: parseInt(el.dataset.chapter, 10),
    x: left,
    y: top,
    visited: false
  };
});

// Como as posições das stations vêm do CSS (left/top), lemos via getBoundingClientRect
// relativo ao game-world para pegar as coordenadas lógicas corretas.
function getComputedLeft(el) {
  const worldRect = gameWorld.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  const scale = worldRect.width / WORLD_W || 1;
  return (elRect.left + elRect.width / 2 - worldRect.left) / scale;
}
function getComputedTop(el) {
  const worldRect = gameWorld.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  const scale = worldRect.height / WORLD_H || 1;
  return (elRect.top + elRect.height / 2 - worldRect.top) / scale;
}

// ESCALA RESPONSIVA DO MUNDO + CÂMERA VERTICAL
// A câmera fica fixa em cada zona (não persegue o Y do jogador) — como
// VIEWPORT_H é igual a ZONE_H, ela já mostra a zona inteira sem precisar
// se mexer. Eixo X não tem câmera, já que a largura do mundo é igual à do
// viewport. O transform translada primeiro (em unidades do mundo) e só
// depois escala.
let worldScale = 1;
function fitWorldToViewport() {
  const viewportWidth = gameViewport.clientWidth;
  worldScale = viewportWidth / WORLD_W;
  applyCameraTransform();
}
window.addEventListener('resize', fitWorldToViewport);

// Suaviza só a troca entre zonas — dentro da mesma zona o alvo nem muda,
// então isso não tem efeito nenhum no dia a dia.
const CAMERA_EASE = 0.16;

// Cada zona tem uma posição de câmera fixa (o topo dela no mundo), sem
// depender de player_pos.y — é isso que garante que ela nunca mostra um
// pedaço da zona vizinha.
const ZONE_CAMERA_Y = {
  1: ZONE_H, // floresta: metade de baixo do mundo
  2: 0       // castelo: metade de cima do mundo
};

function getTargetCamY() {
  return ZONE_CAMERA_Y[currentZone] ?? 0;
}

function updateCamera() {
  const targetCamY = getTargetCamY();
  camY += (targetCamY - camY) * CAMERA_EASE;
  if (Math.abs(targetCamY - camY) < 0.05) camY = targetCamY;
  applyCameraTransform();
}

// Usado no boot e ao cruzar de zona: a câmera vai direto pro destino, sem
// suavização, senão fica "correndo atrás" do personagem depois do corte.
function snapCameraToPlayer() {
  camY = getTargetCamY();
  applyCameraTransform();
}

function applyCameraTransform() {
  gameWorld.style.transform = `scale(${worldScale}) translate(0px, ${-camY}px)`;
}

// Dispara uma transição curta (fade) sempre que o jogador cruza a
// fronteira floresta/castelo — as duas artes de fundo não foram feitas
// pra emendar sem costura, então o corte esconde a troca.
function checkZoneTransition() {
  const zone = player_pos.y < ZONE_BOUNDARY_Y ? 2 : 1;
  if (zone !== currentZone) {
    // Avanço floresta → castelo (zona 1 pra 2) ganha a arte especial do
    // personagem no penhasco olhando o castelo; o caminho de volta usa
    // só o corte simples, já que essa direção não tem o mesmo peso narrativo.
    const isForwardToCastle = currentZone === 1 && zone === 2;
    currentZone = zone;
    maskZone1.classList.toggle('hidden-zone', zone === 1);
    maskZone2.classList.toggle('hidden-zone', zone === 2);
    zoneTransition.classList.remove('flash', 'flash-portrait');
    void zoneTransition.offsetWidth; // reflow, pra poder reiniciar a animação
    zoneTransitionLock = true;
    if (isForwardToCastle) {
      zoneTransition.classList.add('flash-portrait');
      beep(440, 0.1);
      setTimeout(() => beep(660, 0.15), 900);
      setTimeout(() => { zoneTransitionLock = false; }, 1900);
    } else {
      zoneTransition.classList.add('flash');
      beep(440, 0.1);
      setTimeout(() => { zoneTransitionLock = false; }, 700);
    }

    // Reaparece no início do caminho da zona nova, centralizado, em vez de
    // continuar de onde cruzou a fronteira.
    const spawn = ZONE_SPAWN[zone];
    if (spawn) {
      player_pos.x = spawn.x;
      player_pos.y = spawn.y;
      velocity.x = 0;
      velocity.y = 0;
      snapCameraToPlayer();
    }
  }
}

// SOM (WebAudio, sem arquivos externos)

let audioCtx = null;
function beep(freq = 440, duration = 0.08) {
  if (sfxMuted) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.value = freq;
    gain.gain.value = 0.05;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) { /* WebAudio indisponível, ignora */ }
}

// Som de pulo: glide senoidal subindo de tom, tipo "boing" suave — lembra
// mais o clássico salto de plataforma do que um bipe quadrado seco.
function jumpSound() {
  if (sfxMuted) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;

    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(720, now + 0.16);

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.02); // ataque rápido
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22); // decaimento suave

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.24);
  } catch (e) { /* WebAudio indisponível, ignora */ }
}

// Passo de caminhada: duas camadas — ruído filtrado (textura de "toque no
// chão") + um thump grave senoidal por baixo, pra dar peso ao som.
let noiseBuffer = null;
function getNoiseBuffer() {
  const bufferSize = Math.floor(audioCtx.sampleRate * 0.12);
  if (noiseBuffer && noiseBuffer.length === bufferSize) return noiseBuffer;
  noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }
  return noiseBuffer;
}

let footstepToggle = false;
function footstep() {
  if (sfxMuted) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;

    // Camada 1: textura de ruído, alterna sutilmente entre pé esquerdo/direito.
    const buffer = getNoiseBuffer();
    const src = audioCtx.createBufferSource();
    src.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = footstepToggle ? 260 : 200;
    filter.Q.value = 0.4;

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.05, now + 0.008);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

    src.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    // Camada 2: "thump" grave senoidal — dá peso ao passo sem ficar
    // metálico; é essa camada que faz o som parecer pisada e não clique.
    const thump = audioCtx.createOscillator();
    thump.type = 'sine';
    thump.frequency.value = footstepToggle ? 108 : 92;

    const thumpGain = audioCtx.createGain();
    thumpGain.gain.setValueAtTime(0.0001, now);
    thumpGain.gain.exponentialRampToValueAtTime(0.055, now + 0.006);
    thumpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

    thump.connect(thumpGain);
    thumpGain.connect(audioCtx.destination);

    src.start(now);
    src.stop(now + 0.11);
    thump.start(now);
    thump.stop(now + 0.1);

    footstepToggle = !footstepToggle;
  } catch (e) { /* WebAudio indisponível, ignora */ }
}

muteBtn.addEventListener('click', () => {
  musicMuted = !musicMuted;
  muteBtn.classList.toggle('muted', musicMuted);
  muteBtn.textContent = musicMuted ? '✕' : '♪';
});

sfxMuteBtn.addEventListener('click', () => {
  sfxMuted = !sfxMuted;
  sfxMuteBtn.classList.toggle('muted', sfxMuted);
});

// MÚSICA DE FUNDO (WebAudio, loop gerado por código, sem arquivo externo)
// Escala pentatônica maior em C — soa "aventura" e nunca dá nota errada,
// clássica em trilhas 8-bit curtas em loop.
const MUSIC_SCALE = [261.63, 293.66, 329.63, 392.00, 440.00];
// Melodia principal: 16 passos, índices na escala acima (null = silêncio).
const MUSIC_MELODY = [
  0, null, 2, null, 3, null, 2, null,
  4, null, 3, null, 2, 1, 0, null
];
// Linha de baixo (uma oitava abaixo), só marca os tempos fortes.
const MUSIC_BASS = [
  0, null, null, null, null, null, null, null,
  3, null, null, null, null, null, null, null
];
const MUSIC_TEMPO = 260; // ms por passo — andamento calmo, tipo "explorando o mapa"

let musicStarted = false;
let musicStep = 0;
let musicIntervalId = null;

function playMusicNote(freq, time, duration, type, peakGain) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(peakGain, time + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(time);
  osc.stop(time + duration + 0.02);
}

function scheduleMusicStep() {
  const stepDur = MUSIC_TEMPO / 1000;
  // O passo continua avançando mesmo mudo — assim, ao desmutar, a melodia
  // retoma no lugar certo do loop em vez de recomeçar do zero.
  if (!musicMuted) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;
      const leadIdx = MUSIC_MELODY[musicStep];
      if (leadIdx !== null) {
        playMusicNote(MUSIC_SCALE[leadIdx], now, stepDur * 0.85, 'square', 0.03);
      }
      const bassIdx = MUSIC_BASS[musicStep];
      if (bassIdx !== null) {
        playMusicNote(MUSIC_SCALE[bassIdx] / 2, now, stepDur * 3.2, 'triangle', 0.045);
      }
    } catch (e) { /* WebAudio indisponível, ignora */ }
  }
  musicStep = (musicStep + 1) % MUSIC_MELODY.length;
}

// Só arranca no primeiro gesto do usuário — navegadores bloqueiam áudio
// automático sem interação.
function startMusic() {
  if (musicStarted) return;
  musicStarted = true;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
  } catch (e) { return; }
  scheduleMusicStep();
  musicIntervalId = setInterval(scheduleMusicStep, MUSIC_TEMPO);
}

// Usado quando o jogo termina — encerra o loop da trilha em vez de deixar
// tocando pra sempre.
function stopMusic() {
  if (musicIntervalId) {
    clearInterval(musicIntervalId);
    musicIntervalId = null;
  }
  musicStarted = false;
}

// BOOT
// Trava o scroll da página assim que o jogo carrega, só destrava quando o
// rodapé de contato libera (fim de jogo ou "pular"). Até lá quem move a
// tela é a câmera interna do jogo, não o scroll do navegador.
document.documentElement.classList.add('scroll-locked');
function unlockPageScroll() {
  document.documentElement.classList.remove('scroll-locked');
}

function startGame() {
  if (gameStarted) return;
  gameStarted = true;
  bootScreen.classList.add('hidden');
  startMusic();

  // Sempre começa no início do caminho da floresta (zona 1), nunca de onde
  // o jogador ficou numa sessão anterior.
  player_pos.x = ZONE_SPAWN[1].x;
  player_pos.y = ZONE_SPAWN[1].y;
  velocity.x = 0;
  velocity.y = 0;
  currentZone = 1;

  fitWorldToViewport();
  updatePlayerPosition();
  snapCameraToPlayer();
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
  if (!gameStarted) {
    if (e.key === 'Enter' || e.key === ' ') startGame();
    return;
  }
  handleKeyDown(e);
});
document.addEventListener('keyup', (e) => handleKeyUp(e));
bootScreen.addEventListener('click', startGame);

// PULAR PARA CONTATO (atalho de UX)
function skipToContact() {
  bootScreen.classList.add('hidden');
  stopMusic();
  contactFooter.classList.remove('locked');
  unlockPageScroll();
  contactFooter.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

skipLinkBoot.addEventListener('click', (e) => {
  e.preventDefault();
  skipToContact();
});

skipLinkHud.addEventListener('click', (e) => {
  e.preventDefault();
  skipToContact();
});

// MOVIMENTO — TECLADO
function handleKeyDown(e) {
  switch (e.key) {
    // preventDefault evita que as setas rolem a página inteira junto com o
    // personagem.
    case 'ArrowUp': case 'w': case 'W': e.preventDefault(); keys.up = true; break;
    case 'ArrowDown': case 's': case 'S': e.preventDefault(); keys.down = true; break;
    case 'ArrowLeft': case 'a': case 'A': e.preventDefault(); keys.left = true; break;
    case 'ArrowRight': case 'd': case 'D': e.preventDefault(); keys.right = true; break;
    case 'Enter':
      e.preventDefault();
      if (modalOpen) closeModal(); else tryInteract();
      break;
    case ' ':
      e.preventDefault();
      if (modalOpen) closeModal();
      else if (nearestStation) tryInteract();
      else triggerJump();
      break;
    case 'Escape':
      if (modalOpen) closeModal();
      break;
  }
}
function handleKeyUp(e) {
  switch (e.key) {
    case 'ArrowUp': case 'w': case 'W': keys.up = false; break;
    case 'ArrowDown': case 's': case 'S': keys.down = false; break;
    case 'ArrowLeft': case 'a': case 'A': keys.left = false; break;
    case 'ArrowRight': case 'd': case 'D': keys.right = false; break;
  }
}

// Se o usuário trocar de aba enquanto segura uma tecla, o "keyup" nunca
// dispara e a tecla fica presa em true — isso zera tudo por garantia.
function resetAllKeys() {
  keys.up = false;
  keys.down = false;
  keys.left = false;
  keys.right = false;
}
window.addEventListener('blur', resetAllKeys);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) resetAllKeys();
});

// MOVIMENTO — D-PAD MOBILE
function bindHold(btn, onDown, onUp) {
  const start = (ev) => { ev.preventDefault(); onDown(); };
  const end = (ev) => { ev.preventDefault(); onUp(); };
  btn.addEventListener('touchstart', start, { passive: false });
  btn.addEventListener('touchend', end);
  btn.addEventListener('touchcancel', end);
  btn.addEventListener('mousedown', start);
  btn.addEventListener('mouseup', end);
  btn.addEventListener('mouseleave', end);
}
bindHold(dpadUp, () => keys.up = true, () => keys.up = false);
bindHold(dpadDown, () => keys.down = true, () => keys.down = false);
bindHold(dpadLeft, () => keys.left = true, () => keys.left = false);
bindHold(dpadRight, () => keys.right = true, () => keys.right = false);

// Se o dedo escorregar do botão do d-pad em vez de soltar nele, o touchend
// nunca dispara e a direção fica presa. Isso zera tudo assim que não sobra
// nenhum dedo tocando a tela.
document.addEventListener('touchend', (e) => {
  if (e.touches.length === 0) resetAllKeys();
});
document.addEventListener('touchcancel', resetAllKeys);

// Mesma lógica da barra de espaço no teclado: modal aberto fecha, perto de
// estação interage, senão pula.
interactBtn.addEventListener('click', () => {
  if (modalOpen) closeModal();
  else if (nearestStation) tryInteract();
  else triggerJump();
});

// =============================================
// EVITA QUE O MAPA "PUXE" A PÁGINA JUNTO (MOBILE)
// =============================================
// touch-action:none no CSS já ajuda, mas alguns navegadores (Safari/iOS)
// ainda deixam passar scroll/zoom sem esse preventDefault via JS também.
function blockTouchScroll(e) { e.preventDefault(); }
gameViewport.addEventListener('touchmove', blockTouchScroll, { passive: false });
dpadUp.parentElement.addEventListener('touchmove', blockTouchScroll, { passive: false });
interactBtn.addEventListener('touchmove', blockTouchScroll, { passive: false });

// =============================================
// LOOP PRINCIPAL
// =============================================
function gameLoop(ts) {
  if (!modalOpen && !zoneTransitionLock && !endingUnlocked) {
    let dx = 0, dy = 0;
    if (keys.up) dy -= 1;
    if (keys.down) dy += 1;
    if (keys.left) dx -= 1;
    if (keys.right) dx += 1;

    const moving = dx !== 0 || dy !== 0;

    // Aceleração/atrito: dá a sensação de inércia (tipo um carrinho), em vez
    // de andar em velocidade fixa e parar instantaneamente.
    if (moving) {
      const len = Math.sqrt(dx * dx + dy * dy);
      velocity.x += (dx / len) * ACCEL;
      velocity.y += (dy / len) * ACCEL;
    } else {
      velocity.x *= FRICTION;
      velocity.y *= FRICTION;
    }

    let speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
    if (speed > MAX_SPEED) {
      velocity.x = (velocity.x / speed) * MAX_SPEED;
      velocity.y = (velocity.y / speed) * MAX_SPEED;
      speed = MAX_SPEED;
    }
    if (speed < 0.02) {
      velocity.x = 0;
      velocity.y = 0;
      speed = 0;
    }

    let nextX = player_pos.x + velocity.x;
    let nextY = player_pos.y + velocity.y;
    let bounced = false;

    // Resolve o eixo Y (topo/baixo do mundo e portão) antes do X.
    //
    // Toda colisão abaixo só trava o movimento na direção da parede (zera a
    // velocidade que aponta pra dentro dela), nunca empurra de volta —
    // segurar a tecla contra a parede não pode "acumular" chute nenhum.
    if (nextY < MIN_PLAYABLE_Y) {
      nextY = MIN_PLAYABLE_Y;
      if (velocity.y < 0) velocity.y = 0;
      bounced = true;
    } else if (nextY > WORLD_H - WALL_MARGIN) {
      nextY = WORLD_H - WALL_MARGIN;
      if (velocity.y > 0) velocity.y = 0;
      bounced = true;
    }

    // Portão entre floresta (zona 1) e castelo (zona 2): só se abre depois
    // que os 3 primeiros capítulos forem visitados. A zona 1 em si nunca
    // tem essa restrição — é onde o jogo sempre começa.
    if (!zone1Complete && nextY < ZONE_BOUNDARY_Y + PLAYER_RADIUS) {
      nextY = ZONE_BOUNDARY_Y + PLAYER_RADIUS;
      if (velocity.y < 0) velocity.y = 0;
      bounced = true;
    }

    // Colisão sólida com a borda esquerda/direita do mapa (reta, mesmo
    // valor em qualquer Y) — trava em vez de empurrar de volta. Só impede
    // andar além da borda; nunca desloca o personagem pra outro lugar.
    const bounds = getBoundsAtY();
    if (nextX < bounds.left + WALL_MARGIN) {
      nextX = bounds.left + WALL_MARGIN;
      if (velocity.x < 0) velocity.x = 0;
      bounced = true;
    } else if (nextX > bounds.right - WALL_MARGIN) {
      nextX = bounds.right - WALL_MARGIN;
      if (velocity.x > 0) velocity.x = 0;
      bounced = true;
    }

    // Colisão sólida com as estações: só bloqueia o avanço na direção da
    // estação (remove a componente da velocidade que aponta pra dentro
    // dela), sem empurrar o personagem de volta com força — ele encosta e
    // para, pode inclusive deslizar pela lateral, mas nunca é "chutado".
    stationConfigs.forEach((cfg) => {
      const sdx = nextX - cfg.x;
      const sdy = nextY - cfg.y;
      const dist = Math.sqrt(sdx * sdx + sdy * sdy) || 0.001;
      if (dist < STATION_SOLID_RADIUS) {
        const nx = sdx / dist;
        const ny = sdy / dist;
        nextX = cfg.x + nx * STATION_SOLID_RADIUS;
        nextY = cfg.y + ny * STATION_SOLID_RADIUS;
        const dot = velocity.x * nx + velocity.y * ny;
        if (dot < 0) {
          velocity.x -= dot * nx;
          velocity.y -= dot * ny;
        }
        bounced = true;
      }
    });

    // Colisão sólida com os muros de pedra (retângulos) — mesmo princípio:
    // só remove a velocidade que aponta pra dentro do muro, sem lançar o
    // personagem de volta.
    SOLID_RECTS.forEach((rect) => {
      const closestX = Math.max(rect.x1, Math.min(nextX, rect.x2));
      const closestY = Math.max(rect.y1, Math.min(nextY, rect.y2));
      const rdx = nextX - closestX;
      const rdy = nextY - closestY;
      const rdist = Math.sqrt(rdx * rdx + rdy * rdy) || 0.001;
      if (rdist < PLAYER_RADIUS) {
        const nx = rdx / rdist;
        const ny = rdy / rdist;
        nextX = closestX + nx * PLAYER_RADIUS;
        nextY = closestY + ny * PLAYER_RADIUS;
        const dot = velocity.x * nx + velocity.y * ny;
        if (dot < 0) {
          velocity.x -= dot * nx;
          velocity.y -= dot * ny;
        }
        bounced = true;
      }
    });

    // Garantia extra: como as colisões só removem energia, isso na prática
    // nunca deveria disparar, mas evita qualquer excesso de velocidade.
    {
      const finalSpeed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
      if (finalSpeed > MAX_SPEED) {
        velocity.x = (velocity.x / finalSpeed) * MAX_SPEED;
        velocity.y = (velocity.y / finalSpeed) * MAX_SPEED;
      }
    }

    // Última garantia: nenhuma combinação de colisões pode colocar o
    // personagem fisicamente fora do mundo.
    nextX = Math.max(WALL_MARGIN, Math.min(WORLD_W - WALL_MARGIN, nextX));
    nextY = Math.max(0, Math.min(WORLD_H - WALL_MARGIN, nextY));

    // A borda (árvore, muro, chão/teto do mapa) agora só trava o
    // movimento — sem som e sem nenhum efeito visual de "impacto". O
    // jogador simplesmente não consegue mais avançar naquela direção.
    player_pos.x = nextX;
    player_pos.y = nextY;

    // Faixa morta maior pro flip horizontal — um valor baixo fazia o sprite
    // virar de lado a qualquer oscilação mínima de velocidade.
    if (velocity.x < -FLIP_THRESHOLD) player.classList.add('facing-left');
    else if (velocity.x > FLIP_THRESHOLD) player.classList.remove('facing-left');

    if (speed > 0.15) {
      player.classList.add('walking');
    } else {
      player.classList.remove('walking');
    }

    // Avança o relógio de passada só enquanto o personagem está se movendo;
    // parado, o relógio congela e o sprite fica no frame em que estava.
    const dt = lastTs ? ts - lastTs : 16;
    lastTs = ts;
    if (speed > 0.15) walkClock += dt;
    else lastFootstepIndex = -1; // parado: próxima passada começa "zerada"

    // Um passo a cada 2 frames do ciclo de andar (frente/lado/costas
    // compartilham o mesmo walkClock), então o som acompanha o pé tocando
    // o chão em vez de disparar a cada frame de animação.
    if (speed > 0.15) {
      const stepIndex = Math.floor(walkClock / (FRAME_INTERVAL * 2));
      if (stepIndex !== lastFootstepIndex) {
        lastFootstepIndex = stepIndex;
        footstep();
      }
    }

    // Movimento horizontal usa sprite lateral, pra cima usa costas, pra baixo
    // usa frente. Só recalcula enquanto o personagem se move — parado,
    // mantém a última pose (se parou de lado, continua de lado).
    //
    // Histerese em duas camadas pra não ficar nervoso perto da diagonal:
    // 1) a nova direção só vence com folga (POSE_SWITCH_RATIO), não só
    //    empatando por 1px;
    // 2) só troca de fato depois de um tempo mínimo da última troca
    //    (POSE_HOLD_MS).
    //
    // O sprite lateral é mais estreito que o de frente/costas (é a
    // espessura do corpo, não a largura dos ombros), por isso fica maior
    // no CSS (--side-scale) pra compensar.
    if (speed > 0.15) {
      const absX = Math.abs(velocity.x);
      const absY = Math.abs(velocity.y);
      const movingUp = velocity.y < 0;

      const rawMode = absX > absY ? 'side' : (movingUp ? 'back' : 'down');
      const dwellOk = (ts - lastPoseSwitchTs) > POSE_HOLD_MS;

      if (rawMode !== facingMode && dwellOk) {
        const dominant = rawMode === 'side' ? absX : absY;
        const other = rawMode === 'side' ? absY : absX;
        if (dominant > other * POSE_SWITCH_RATIO) {
          facingMode = rawMode;
          lastPoseSwitchTs = ts;
        }
      }
    }
    playerSvg.classList.toggle('side-mode', facingMode === 'side');
    playerSvg.classList.toggle('back-mode', facingMode === 'back');

    // Frames vêm todos do mesmo walkClock, não de timers separados por
    // direção — ao trocar de pose no meio do andar, a imagem já entra na
    // fase certa da passada.
    if (speed > 0.15) {
      if (facingMode === 'side') {
        const sideFrameIndex = Math.floor(walkClock / FRAME_INTERVAL) % SIDE_FRAMES.length;
        playerSide.src = SIDE_FRAMES[sideFrameIndex];
      } else if (facingMode === 'back') {
        const backFrameIndex = Math.floor(walkClock / FRAME_INTERVAL) % BACK_FRAMES.length;
        playerBack.src = BACK_FRAMES[backFrameIndex];
      } else {
        // índice 0 é a pose parada — o ciclo de caminhada usa só os frames 1+
        const cycleLen = DOWN_FRAMES.length - 1;
        const downFrameIndex = 1 + (Math.floor(walkClock / FRAME_INTERVAL) % cycleLen);
        playerDown.src = DOWN_FRAMES[downFrameIndex];
      }
    } else if (facingMode === 'down' && speed < 0.05) {
      // parado encarando a câmera: volta pra pose de descanso.
      playerDown.src = DOWN_FRAMES[0];
    }

    // Bob vertical sutil sincronizado com o passo, só pra dar peso ao andar em
    // vez do sprite deslizar de forma robótica. Some suave ao parar.
    const targetBob = speed > 0.15 ? Math.abs(Math.sin(walkClock / (FRAME_INTERVAL * 1.15))) * -2.4 : 0;
    walkBob += (targetBob - walkBob) * 0.35;
    playerSvg.style.setProperty('--bob', walkBob.toFixed(2) + 'px');

    checkZoneTransition();
    updatePlayerPosition();
    updateCamera();
    updateStationProximity();
  }
  requestAnimationFrame(gameLoop);
}

function updatePlayerPosition() {
  player.style.left = player_pos.x + 'px';
  player.style.top = player_pos.y + 'px';
}

// =============================================
// PROXIMIDADE DAS STATIONS
// =============================================
let nearestStation = null;

function updateStationProximity() {
  nearestStation = null;
  let bestDist = Infinity;

  stationConfigs.forEach((cfg) => {
    const dx = cfg.x - player_pos.x;
    const dy = cfg.y - player_pos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const inRange = dist <= STATION_RANGE;
    cfg.el.classList.toggle('in-range', inRange);
    if (inRange && dist < bestDist) {
      bestDist = dist;
      nearestStation = cfg;
    }
  });
}

function tryInteract() {
  if (!nearestStation) return;
  openChapterModal(nearestStation);
}

// =============================================
// MODAL DE CAPÍTULO
// =============================================
// Monta a faixa de miniaturas dos projetos no modal. object-fit:contain
// com altura fixa deixa print de dashboard (paisagem) e mockup de app
// (retrato) conviverem sem cortar nem esticar nenhum dos dois.
function renderModalShots(shots) {
  if (!shots || !shots.length) {
    modalShots.innerHTML = '';
    modalShots.classList.remove('has-shots');
    return;
  }
  modalShots.innerHTML = shots.map((s) => `
    <a href="${s.link}" target="_blank" rel="noopener" class="shot-thumb${s.vertical ? ' vertical' : ''}" title="${s.alt}">
      <img src="${s.src}" alt="${s.alt}" loading="lazy">
    </a>
  `).join('');
  modalShots.classList.add('has-shots');
}

function openChapterModal(cfg) {
  const chapter = CHAPTERS[cfg.chapter];
  if (!chapter) return;

  modalTitle.textContent = chapter.title;
  modalText.innerHTML = chapter.text;
  renderModalShots(chapter.shots);
  if (chapter.portrait) modalCharacterImg.src = chapter.portrait;
  modalCharacterImg.parentElement.style.setProperty('--char-scale', chapter.scale || 1);
  dialogWrap.classList.toggle('side-right', chapter.side === 'right');
  modal.classList.add('open');
  modalOpen = true;
  beep(660, 0.08);

  if (!cfg.visited) {
    cfg.visited = true;
    cfg.el.classList.add('visited');
    visitedCount++;
    markQuestDone(cfg.chapter);
    beep(880, 0.1);
  }
}

function closeModal() {
  modal.classList.remove('open');
  modalOpen = false;
  beep(330, 0.06);

  if (visitedCount === 3) {
    unlockGate();
  }
  if (visitedCount === 6) {
    unlockEnding();
  }
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// =============================================
// QUESTS / HUD
// =============================================
function markQuestDone(chapterNum) {
  const dot = questDots.find((d) => parseInt(d.dataset.quest, 10) === chapterNum);
  if (dot) dot.classList.add('filled');
  questLabel.textContent = `${visitedCount}/6`;
}

// =============================================
// PORTÃO DA ZONA 2 — libera a passagem pro castelo
// =============================================
function unlockGate() {
  zone1Complete = true;
  zoneGate.classList.add('unlocked');
  beep(740, 0.1);
  setTimeout(() => beep(990, 0.14), 130);
}

// =============================================
// FINAL — DESBLOQUEIO DO FOOTER + CONQUISTA
// =============================================
let endingUnlocked = false;
function unlockEnding() {
  if (endingUnlocked) return;
  endingUnlocked = true;

  stopMusic();
  resetAllKeys();
  showAchievement();

  contactFooter.classList.remove('locked');
  unlockPageScroll();

  if (window.gsap) {
    gsap.fromTo(contactFooter,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  }

  contactFooter.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showAchievement() {
  toast.classList.add('show');
  beep(990, 0.12);
  setTimeout(() => beep(1320, 0.14), 120);
  setTimeout(() => toast.classList.remove('show'), 4000);
}