const app = new Vue({
    el: "#app",
    data: {
        todos: [
            {
                text: 'Stendere',
                completed: true,
            },
            {
                text: 'Andare in palestra',
                completed: true,
            },
            {
                text: 'Andare in farmacia',
                completed: false,
            },
        ],
        newTodo: '',
        filterActive: false,
    },
    computed: {
        completedTodos() {
            const completed = this.todos.filter(todo => todo.completed === true)
            return completed.length;
        }
    },
    methods: {
        addTodo() {
            if(this.newTodo !== ''){
                console.log(this.newTodo);

                // Aggiunta todo
                this.todos.unshift ({
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo = '';
                console.log(this.$refs.todoInput);
                this.$refs.todoInput.focus();
            }
        },

        removeTodo(indexTodo) {
            console.log(indexTodo);
            const deleted = this.todos.splice(indexTodo, 1);
            console.log(deleted);
        },

        updateStatus(indexTodo) {
            console.log(indexTodo);

            if(this.todos[indexTodo].completed){
                this.todos[indexTodo].completed = false;
            }else{
                this.todos[indexTodo].completed = true
            }
            
        },

        toggleFilter(){
            console.log('toggle todo');
            this.filterActive = !this.filterActive;
        }
    }
})