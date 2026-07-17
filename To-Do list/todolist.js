const Todolist = [];

function addtask() {
    const Inputelement = document.querySelector('.Task');
    const Task = Inputelement.value;
    Todolist.push(Task);
    console.log(Todolist);

    Inputelement.value = ' ';
}

const nums = [1,2,3,4,5];
let total = 0;

for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total = total + num;
}
console.log(total);