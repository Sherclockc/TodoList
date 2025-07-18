Page({
  data: {
    newTask: '',
    tasks: [],
    filter: 'All',
    filters: ['All', 'Active', 'Completed'],
    theme: 'light',
    displayTasks: []
  },

  onLoad() {
    const saved = wx.getStorageSync('tasks') || []
    const theme = wx.getStorageSync('theme') || 'light'
    this.setData({ tasks: saved, theme }, this.updateDisplay)
  },

  onInput(e) {
    this.setData({ newTask: e.detail.value })
  },

  addTask() {
    const text = this.data.newTask.trim()
    if (!text) return

    const task = {
      id: Date.now(),
      text,
      completed: false
    }

    const tasks = [task, ...this.data.tasks]
    this.setData({ tasks, newTask: '' }, () => {
      this.updateDisplay()
      wx.setStorageSync('tasks', tasks)
    })
  },

  toggleTask(e) {
    const id = e.currentTarget.dataset.id
    const tasks = this.data.tasks.map(t =>
      t.id == id ? { ...t, completed: !t.completed } : t
    )
    this.setData({ tasks }, () => {
      this.updateDisplay()
      wx.setStorageSync('tasks', tasks)
    })
  },
  

  deleteTask(e) {
    const id = e.currentTarget.dataset.id
    const tasks = this.data.tasks.map(t =>
      t.id == id ? { ...t, deleting: true } : t
    )
    this.setData({ tasks }, () => {
      setTimeout(() => {
        const newTasks = this.data.tasks.filter(t => t.id != id)
        this.setData({ tasks: newTasks }, () => {
          this.updateDisplay()
          wx.setStorageSync('tasks', newTasks)
        })
      }, 300)
    })
  },

  setFilter(e) {
    this.setData({ filter: e.currentTarget.dataset.filter }, this.updateDisplay)
  },

  updateDisplay() {
    const { filter, tasks } = this.data
    let displayTasks = []
    if (filter === 'All') displayTasks = tasks
    else if (filter === 'Active') displayTasks = tasks.filter(t => !t.completed)
    else if (filter === 'Completed') displayTasks = tasks.filter(t => t.completed)
    this.setData({ displayTasks })
  },

  toggleTheme() {
    const newTheme = this.data.theme === 'light' ? 'dark' : 'light'
    this.setData({ theme: newTheme })
    wx.setStorageSync('theme', newTheme)
  }
})
