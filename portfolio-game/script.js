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

// Pose exibida no retrato durante a cutscene de transição — troca conforme
// pra onde o jogador está indo, só pra dar variedade (sem isso a mesma
// imagem apareceria toda vez, ficando EXTREMAMENTE repetitivo).
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
const VIEWPORT_H = ZONE_H; // altura "visível" da câmera, em unidades do mundo — IGUAL à altura de uma zona.
// Antes VIEWPORT_H (500) era maior que ZONE_H (447): como o mundo inteiro
// é só as 2 zonas empilhadas sem nenhum espaço "de sobra" entre elas, uma
// câmera mais alta que uma zona sozinha SEMPRE mostra uma fatia da zona
// vizinha ao lado — daí a "borda preta" (a máscara sólida escondendo essa
// fatia) aparecendo ao andar perto da fronteira. Igualando as duas alturas,
// a câmera (ver updateCamera/getTargetCamY abaixo, que agora trava a
// câmera numa posição FIXA por zona, em vez de seguir o Y do jogador)
// sempre mostra exatamente uma zona inteira, nunca um pedaço da outra.
const PLAYER_RADIUS = 14;
const STATION_RANGE = 55;

// Física tipo "carrinho" (inspirado no portfólio do Bruno Simon):
// inércia ao acelerar, atrito ao soltar. As colisões sólidas TRAVAM o
// movimento (zeram a velocidade na direção da parede) em vez de fazer
// quicar, uma borda deve impedir passar, não empurrar de volta.
//
// A 1ª tentativa de deixar o andar mais rápido (MAX_SPEED 4.6 / ACCEL 0.68)
// passou do ponto: ficou rápido demais e, pior, o giro pros lados ficava
// feio, porque o personagem trocava de direção rápido demais pro sprite
// acompanhar. Os valores abaixo são um meio-termo: mais ágil que o
// original, mas sem sair correndo feito um foguete nem virar de qualquer
// jeito.
const MAX_SPEED = 4.0;
const ACCEL = 0.55;
const FRICTION = 0.88;
const STATION_SOLID_RADIUS = 40; // menor que STATION_RANGE: o balão aparece antes de colidir
const FLIP_THRESHOLD = 0.35; // faixa morta pro flip horizontal (--flip) isso evita virar de lado a qualquer tremor de velocidade

// A borda invisível das árvores usava a mesma margem do corpo inteiro do
// personagem (PLAYER_RADIUS = 14), o que fazia ela "travar" o passo bem
// antes de chegar perto da árvore de verdade uma borda grossa demais.
// WALL_MARGIN é só pra esse limite específico (encontro com as árvores /
// moldura do mapa) e é menor, deixando o jogador chegar mais perto da
// borda visual antes de ser barrado. Antes o jogador era jogado para o meio do mapa.
const WALL_MARGIN = 6;

// Limites de "onde dá pra pisar" — aproximação das árvores/moldura de cada
// zona (o fundo é uma ilustração única, sem tilemap de colisão real, então
// isso é uma margem/retângulo que segue visualmente o que tá desenhado).
const MIN_PLAYABLE_Y = 60;    // fachada do castelo, no topo do mundo — não dá pra "entrar" no prédio

// Borda esquerda/direita ÚNICA e RETA pro mapa inteiro (em vez da largura
// variável por Y de antes). Como o limite nunca muda de valor conforme o Y
// muda, o "clamp" abaixo nunca precisa saltar pra um alvo diferente ele
// só trava o X exatamente onde o jogador esbarrou, parando o excesso de
// caminhada sem deslocar o personagem pra lugar nenhum. É essa mudança de
// alvo (borda estreitando de repente) que causava o "jogar pro centro".
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

// Pré-carrega todos os frames pra troca de "src" ser instantânea (sem flash
// de imagem em branco enquanto o navegador baixa/decodifica pela 1ª vez
// essa é a principal causa do "piscar" entre frames).
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

// Relógio ÚNICO de passada (em ms), continua correndo por trás mesmo quando
// o personagem troca de direção (frente/lado/costas). Antes cada direção
// tinha seu próprio timer (lastDownFrameTime, lastSideFrameTime...), e cada
// vez que o modo trocava no meio do andar o timer da nova direção estava
// "frio" — o sprite ficava até 150ms sem atualizar bem na hora do giro,
// dando a sensação de travada. Com um relógio só, o giro troca a IMAGEM
// (frente/lado/costas) instantaneamente mas a passada nunca para de fluir.
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

// Ponto de início do caminho de cada zona — centralizado na trilha, logo
// depois da transição. Usado tanto no boot do jogo quanto sempre que o
// jogador cruza a fronteira floresta/castelo, pra ele SEMPRE reaparecer no
// início do caminho da zona nova (nunca torto, nunca fora do centro).
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
// A câmera agora fica FIXA em cada zona (não persegue mais o Y do jogador
// dentro da zona). Como VIEWPORT_H === ZONE_H, uma câmera fixa no topo da
// zona atual já mostra a zona INTEIRA, sem sobra, não tem mais por que
// mexer nela enquanto o jogador anda dentro da mesma zona. O eixo X
// continua sem câmera porque a largura do mundo é igual à largura do
// viewport (800). O transform combina escala responsiva + translação
// vertical: primeiro translada em unidades do mundo (-camY), depois
// escala — assim o deslocamento na tela já sai correto
// (screen = scale * (world - camY)).
let worldScale = 1;
function fitWorldToViewport() {
  const viewportWidth = gameViewport.clientWidth;
  worldScale = viewportWidth / WORLD_W;
  applyCameraTransform();
}
window.addEventListener('resize', fitWorldToViewport);

// Suaviza só a TROCA de zona (o salto entre as duas posições fixas de
// câmera), não o andar dentro da zona, dentro da zona o alvo nem muda,
// então o "ease" abaixo não tem efeito nenhum no dia a dia, só entra em
// ação no instante da transição (e mesmo assim é sobrescrito por um snap
// instantâneo em checkZoneTransition, pra não "correr atrás" durante o
// corte de cena).
const CAMERA_EASE = 0.16;

// Cada zona tem UMA posição de câmera fixa (o próprio topo dela no mundo).
// Não depende mais de player_pos.y é isso que faz a câmera "ficar fixa
// em um só lugar" dentro da zona, em vez de ficar reajustando a cada
// passo, e é isso que garante que ela NUNCA mostra um pedaço da zona
// vizinha (eliminando a necessidade da máscara/"borda preta").
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

// Usado no início do jogo e ao cruzar de zona (teleporte de spawn): nesses
// casos a câmera deve ir DIRETO pro destino, sem o suavizado acima, senão
// ela ficaria "correndo atrás" do personagem por um instante logo após o
// corte de cena, o que pareceria um bug em vez de um efeito.
function snapCameraToPlayer() {
  camY = getTargetCamY();
  applyCameraTransform();
}

function applyCameraTransform() {
  gameWorld.style.transform = `scale(${worldScale}) translate(0px, ${-camY}px)`;
}

// Dispara uma cutscene/transição inspirado em edições e jogos, ela é curta (fade) sempre que o jogador cruza a fronteira
// floresta/castelo, como as duas artes de fundo não foram desenhadas pra
// emendar sem costura, um corte rápido "esconde" a troca de cenário em vez
// de deixar a câmera simplesmente rolar de uma arte pra outra.
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

    // Reaparece sempre no início do caminho da zona nova, centralizado na
    // trilha em vez de continuar de onde cruzou a fronteira (o que podia
    // deixar o jogador torto ou fora do centro ao entrar na zona seguinte).
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

// Som de pulo: glide senoidal subindo de tom (tipo "boing" suave), em vez
// do bipe quadrado seco de antes — a onda quadrada soa mais "alarme de
// robô" do que impulso; a senoidal com rampa de frequência lembra mais o
// clássico "salto" de jogo de plataforma sem ficar áspera no ouvido.
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

// Passo de caminhada: duas camadas por passo — ruído filtrado (textura de
// "toque no chão") + um "thump" grave senoidal por baixo (dá peso/corpo).
// Antes era só o ruído com filtro mais aberto (Q maior, corte mais alto),
// que soava mais seco/tipo estalo; agora o corte é mais fechado e mais
// grave, e o ataque tem uma leve subida em vez de começar no pico — o
// resultado é um som mais macio, menos "clique de teclado".
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

    // Camada 1: textura de ruído, filtrada bem mais grave e fechada do
    // que antes — alterna sutilmente entre "pé esquerdo/direito".
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

// MÚSICA DE FUNDO (WebAudio, loop gerado por código — sem arquivo de
// áudio externo, na mesma vibe dos efeitos sonoros acima).
// Escala pentatônica maior em C (C D E G A) — soa "aventura"/amigável e
// nunca dá nota "errada" mesmo variando a ordem, por isso é a escolha
// clássica de trilhas 8-bit curtas em loop.
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
  // Mesmo com o som mudo, o passo continua avançando — assim, ao
  // desmutar, a melodia retoma na posição "certa" do loop em vez de
  // recomeçar do zero toda vez.
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

// Só arranca no primeiro gesto do usuário (clique/Enter pra começar o jogo,
// ou pular pro contato) — navegadores bloqueiam áudio automático sem
// interação, então tentar iniciar antes disso simplesmente falharia calado.
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

// Usado quando o jogo termina (todos os 6 capítulos vistos) — encerra o
// loop da trilha em vez de deixar ela tocando pra sempre no fundo depois
// que não há mais nada pra explorar.
function stopMusic() {
  if (musicIntervalId) {
    clearInterval(musicIntervalId);
    musicIntervalId = null;
  }
  musicStarted = false;
}

// BOOT
// Trava o scroll da página assim que o jogo carrega — só destrava quando o
// rodapé de contato é liberado (fim de jogo ou "pular pra contato"). Até
// lá, o único "movimento de tela" que deve existir é a câmera interna do
// jogo (o transform em #game-world), nunca o scroll do navegador.
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
    // preventDefault aqui é o que impede o navegador de rolar a página
    // (as setas por padrão fazem scroll do site inteiro) — sem isso, andar
    // pra cima/baixo no mapa rola a página junto, uma experiência ruim.
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

// Sem isso, se o usuário trocar de aba/janela (ou minimizar) enquanto
// segura uma tecla de movimento, o navegador não dispara o "keyup" a
// tecla fica "presa" pra sempre em true, o personagem continua acelerando
// sozinho por trás e, quando o foco volta, ele já pode ter atravessado
// bordas/colisões (uma das causas do "jogado pra longe da tela").
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

// Rede de segurança: se o dedo escorregar do botão do d-pad em vez de
// soltar nele (comum em telas pequenas), "touchend"/"mouseup" não disparam
// no botão de origem e a direção fica "presa" em true. Quando o navegador
// avisa que não há mais nenhum dedo tocando a tela, zera tudo por garantia.
document.addEventListener('touchend', (e) => {
  if (e.touches.length === 0) resetAllKeys();
});
document.addEventListener('touchcancel', resetAllKeys);

interactBtn.addEventListener('click', () => {
  if (modalOpen) closeModal(); else tryInteract();
});

// =============================================
// EVITA QUE O MAPA "PUXE" A PÁGINA JUNTO (MOBILE)
// =============================================
// "touch-action: none" no CSS já pede pro navegador não usar o gesto de
// arrastar no viewport/d-pad pra rolar a página, mas alguns navegadores
// (principalmente Safari/iOS com rubber-band scroll) ainda deixam passar
// um pouco de scroll/zoom se o preventDefault não acontecer também via JS.
// Isso bloqueia explicitamente qualquer arrasto que comece dentro do mapa
// ou dos controles, sem impedir o scroll normal do resto da página (pra
// ainda dar pra rolar até o rodapé de contato).
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

    // Resolvemos o eixo Y (topo/baixo do mundo e portão) antes do X. A
    // borda esquerda/direita agora é reta e fixa (LEFT_BOUND/RIGHT_BOUND),
    // então essa ordem não afeta mais o resultado — mas mantemos a mesma
    // sequência de antes por clareza.
    //
    // Toda colisão abaixo agora só TRAVA o movimento na direção da parede
    // (zera a velocidade que apontava pra dentro dela) — nunca inverte a
    // velocidade pro lado oposto. Uma borda deve impedir passar, não
    // "chutar" o personagem de volta; era esse chute (mesmo pequeno) que,
    // segurando a tecla contra a parede por muito tempo, ia se somando e
    // eventualmente jogava o personagem pra longe.
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

    // Rede de segurança de velocidade: roda em TODO frame. Como agora as
    // colisões só removem energia (nunca adicionam), isso na prática nunca
    // deveria disparar — é só uma garantia extra de que a velocidade nunca
    // ultrapassa a velocidade máxima normal do personagem.
    {
      const finalSpeed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
      if (finalSpeed > MAX_SPEED) {
        velocity.x = (velocity.x / finalSpeed) * MAX_SPEED;
        velocity.y = (velocity.y / finalSpeed) * MAX_SPEED;
      }
    }

    // Rede de segurança final: nenhuma combinação de colisões pode colocar
    // o personagem fisicamente fora do mundo. Isso não deveria disparar em
    // uso normal — é só uma garantia de que "atravessar borda" (tunneling)
    // nunca joga o personagem pra fora da tela de vez.
    nextX = Math.max(WALL_MARGIN, Math.min(WORLD_W - WALL_MARGIN, nextX));
    nextY = Math.max(0, Math.min(WORLD_H - WALL_MARGIN, nextY));

    // A borda (árvore, muro, chão/teto do mapa) agora só trava o
    // movimento — sem som e sem nenhum efeito visual de "impacto". O
    // jogador simplesmente não consegue mais avançar naquela direção.
    player_pos.x = nextX;
    player_pos.y = nextY;

    // Limiar com folga (não 0.05) pra decidir o flip horizontal: um valor
    // baixo demais fazia o sprite virar de lado a qualquer oscilação mínima
    // de velocidade (principalmente numa diagonal, ou freando), dando a
    // sensação de "giro feio"/nervoso. Com uma faixa morta maior, só vira
    // quando o personagem está de fato indo pra aquele lado com convicção.
    if (velocity.x < -FLIP_THRESHOLD) player.classList.add('facing-left');
    else if (velocity.x > FLIP_THRESHOLD) player.classList.remove('facing-left');

    if (speed > 0.15) {
      player.classList.add('walking');
    } else {
      player.classList.remove('walking');
    }

    // Avança o relógio único de passada. Ele só anda enquanto o personagem
    // está de fato se movendo — parado, o relógio congela e o sprite fica
    // parado no frame em que estava (comportamento antigo preservado).
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

    // Movimento predominantemente horizontal usa o sprite lateral; movimento
    // predominantemente pra cima usa o sprite de costas; pra baixo usa o
    // sprite de frente. Isso só é RECALCULADO enquanto o personagem está de
    // fato se movendo (speed > 0.15); ao parar, o "facingMode" é mantido —
    // ou seja, se ele parou andando de lado, continua de lado, e só volta a
    // encarar a câmera se o próximo movimento for de fato pra baixo.
    // A versão antiga desligava completamente a pose "side" sempre que havia
    // QUALQUER componente pra cima (mesmo mínima), forçando "back" mesmo numa
    // diagonal claramente mais horizontal do que vertical — por isso o
    // personagem virava de costas ao andar na diagonal pra cima sem
    // necessidade. Agora comparamos sempre a magnitude horizontal x vertical
    // (nunca "desligando" um dos dois de saída), e back/down só decide o sinal
    // do eixo vertical quando o vertical de fato vence.
    //
    // HISTERESE EM DUAS CAMADAS pra parar de parecer artificial/nervoso:
    // 1) a nova direção só vence se superar a atual com folga (RATIO), não só
    //    empatar por 1 pixel de diferença;
    // 2) mesmo vencendo, só troca de fato se já passou um tempo mínimo desde
    //    a última troca (POSE_HOLD_MS) — sem isso, perto da diagonal exata a
    //    pose podia alternar várias vezes por segundo.
    //
    // O sprite lateral (perfil) é fisicamente mais estreito que o de
    // frente/costas — é a espessura do corpo, não a largura dos ombros —,
    // então ele fica maior (--side-scale no CSS, ver style.css) pra
    // compensar, sem esticar o desenho, em vez de ser substituído pelo
    // sprite de frente espelhado (que tirava a sensação real de "virar de
    // lado" e deixava o andar sideways parecendo deslizar/travado).
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

    // Os índices de frame vêm todos do MESMO walkClock — não de timers
    // separados por direção. Assim, ao trocar de pose no meio do andar, a
    // nova imagem já entra na fase certa da passada, sem esperar um
    // intervalo "frio" pra começar a atualizar (era isso que travava).
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
      // parado encarando a câmera: volta pra pose de descanso (frame 0).
      // Se ele parou andando de lado/costas, isso aqui nem entra em ação —
      // o sprite de frente fica escondido (side-mode/back-mode) e a pose
      // de lado/costas continua congelada no último frame.
      playerDown.src = DOWN_FRAMES[0];
    }

    // Pequeno "bob" vertical sincronizado com o passo — sutil demais pra
    // parecer um pulo, só o suficiente pra dar peso/vida ao andar em vez de
    // o sprite deslizar de forma robótica pelo mapa. Some suavemente ao
    // parar (interpolando de volta pra 0) em vez de cortar seco.
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
// Monta a faixa de miniaturas dos projetos dentro da caixa de diálogo.
// Prints de dashboard/web (paisagem) e mockups de app (retrato) convivem
// na mesma faixa: a miniatura usa "object-fit: contain" com altura fixa,
// então cada print aparece inteiro, sem cortar a tela do celular nem
// esticar o dashboard — só a largura da miniatura varia com a proporção
// original da imagem.
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