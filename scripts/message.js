// 留言板功能
!function() {
  const view = document.querySelector('#message');
  const model = {
    init: function() {
      const APP_ID = 'pwnVQWLqEpj745QMvmDhlNk0-gzGzoHsz';
      const APP_KEY = 'W8aMTPddDF7RYogyiADVaM7X';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function() {
      const query = new AV.Query('Message');
      return query.find();
    },
    save: function(data) {
      const Message = AV.Object.extend('Message');
      const message = new Message();
      return message.save(data)
    },
  };
  const controller = {
    view: null,
    model: null,
    init: function(view, model) {
      this.view = view;
      this.model = model;
      this.model.init();
      this.messageList = view.querySelector('#messageList');
      this.form = view.querySelector('#postMessageForm');
      this.loadMessages();
      this.bindEvents();
    },
    loadMessages: function() {
      this.model.fetch().then(messages => {
        const messageArray = messages.map(item=> item.attributes)
        messageArray.forEach(item => {
          this.appendMessage(item)
        })
      })
    },
    appendMessage: function({name, content}) {
      const li = document.createElement('li');
      const nameDiv = document.createElement('div');
      const contentDiv = document.createElement('div');
      
      nameDiv.classList.add('name')
      contentDiv.classList.add('content')
      nameDiv.innerText = name;
      contentDiv.innerText = content;
      li.append(nameDiv)
      li.append(contentDiv)
      this.messageList.append(li)
    },
    bindEvents: function() {
      this.form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const name = this.form.querySelector('input[name=name]');
        const content = this.form.querySelector('input[name=content]');
        this.model.save({name: name.value, content: content.value}).then(object => {
          console.log('发布成功！')
          this.appendMessage(object.attributes)
          name.value = '';
          content.value = '';
        })
      })
    },
  } 
  controller.init(view, model)
}.call();