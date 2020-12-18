const app = new Vue({
    el: '#assignment',
    data:{
        tasksListVisibility: true,
        taskName: '',
        tasks: []
    },
    computed:{
        toggleTasksButtonName(){
            if (this.tasksListVisibility){
                return 'Hide list';
            }else{
                return 'Show list';
            }
        }
    },

    methods:{
        addTask(){
            if (this.taskName.length > 0){
                this.tasks.push(this.taskName);
                this.taskName = '';
            }
        },
        removeTask(index){
            this.tasks.splice(index, 1);
        },
        toggleTasks(){
            this.tasksListVisibility = !this.tasksListVisibility;
        }
    }

});
