import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: false,
    work: [
      { name: 'TodoList', desc: 'Ваш личный помощник в организации времени и достижении целей. Создавайте, отслеживайте и завершайте задачи с легкостью благодаря простому и удобному todo list.', stack: 'Tech stack : HTML , JavaScript, SASS, Vue', urlLine: 'todolist/', urlGit: 'todolist', img: 'work' },
      { name: 'The-News-Web', desc: 'Ваш источник актуальных новостей из мира веба. Оставайтесь в курсе последних трендов, технологических новинок и захватывающих событий в онлайн мире с нашим информационным порталом.', stack: 'Tech stack : HTML , CSS', urlLine: 'The-News-Web/', urlGit: 'The-News-Web', img: 'work1' },
      { name: 'Nike', desc: 'Вдохновляй. Двигайся. Преодолевай. Открой новые горизонты своего стиля и спортивных достижений с культовым брендом, где инновации встречаются с страстью к победе.', stack: 'Tech stack : HTML ,CSS', urlLine: 'Nike/', urlGit: 'Nike', img: 'work2' },
      { name: 'Richard', desc: 'Воплощение стиля и утонченности. Откройте для себя мир элегантности и неповторимого вкуса с брендом Richard. Где каждая деталь выражает вашу индивидуальность с изысканным шармом.', stack: 'Tech stack : HTML ,CSS', urlLine: 'Richard/', urlGit: 'Richard', img: 'work3' },
      { name: 'Cloud-Budget', desc: ' Ваш личный финансовый навигатор в облаке. Управляйте своим бюджетом легко и эффективно, внося расходы и отслеживая доходы в удобном облачном сервисе. Прозрачность финансов в каждом облаке', stack: 'Tech stack : HTML ,CSS', urlLine: 'Cloud-Budget/', urlGit: 'Cloud-Budget', img: 'work4' },
      { name: 'Boulevard-Market', desc: 'Ваш путь к стилю и удовольствию шопинга. Погрузитесь в мир трендов и качественных товаров на Boulevard-Market, где каждая покупка становится стилизованным приключением.', stack: 'Tech stack : HTML ,CSS', urlLine: 'Boulevard-Market/', urlGit: 'Boulevard-Market', img: 'work5' }
    ]
  },
  getters: {
  },
  mutations: {
    toggleModeMutation(state) {
      state.mode = !state.mode;
      console.log(state.mode);
    },
  },
  actions: {
  },
  modules: {
  }
})
