# vue.js
My vue.js learning

```js
new Vue({
  // ID элемента, который будет родителем для всех объектов vue
  el: "#<id of parent vue element>",
  /* Аналог полей класса. Доступ к ним из HTML напрямую по имени свойства: {{field_name}}.
     Доступ из js кода внутри объекта vue через this.field_name.
     Доступ из внешнего js кода через сохранённую ссылку на объект Vue: vue.field_name или vue.data.field_name
  */
  data: {
     field_name : "value"
  },
  /* Методы. 
     !ВАЖНО: при любом изменении ЛЮБОГО поля или свойства объекта vue, метод будет вызываться повторно. 
  */
  methods: {
    function_name: function(<args>){
      return "value"
    },
    // Методы могут использоваться в качестве обработчика события.
    // Поумолчанию объект event пробрасывается автоматически.
    my_button_click: function(){
      alert(event.target.value)
    },
    // Если нужно объявить параметризованный метод, то параметр event указывается явно через $
    my_button_keypressed(argumetn, $event){
      console.log(argument + event.target.value)
    }
  },
  /* Вычисляемые свойства. Представляет собой функцию, которая вычисляется ТОЛЬКО при изменении полей, от которых она зависит.
     Не может содержать асинхронный код. Должна выполняться сразу, без таймаутов и т.п.
     Чаще всего нужно использовать именно вычисляемые свойства.
     В HTML используется без (): {{my_property}}
  */
  computed: {
    my_property: function() {
      return "something"
    }
  },
  /* Слежение за полями. Когда нужно реагировать на изменение других полей.
     Представляетс собой функцию с таким же названием как у поля.
     Используется в основном для "дорогих" и асинхронных вычислений. 
     Не стоит ими злоупотреблять, т.к. чаще можно обойтись вычисляемыми свойствами.
  */
  watch: {
    // эта функция запускается при любом изменении вопроса
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Ожидаю, когда вы закончите печатать...'
      this.debouncedGetAnswer()
  },
  
})

```
