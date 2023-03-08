const rootnode=document.getElementsByClassName("list-container")[0];
function createAndAdd(value){
    if(value=="") return;

    const newnode=document.createElement("div");
    const checkbox=document.createElement("input");
    const button=document.createElement("button");

    button.addEventListener("click", function(){
        addMsg("Task Removed...", false);
        this.parentNode.parentNode.removeChild(this.parentNode);
    })
    checkbox.addEventListener("change", function() {
        let node=this.parentNode.firstChild;
        if(this.checked){
            node.style.backgroundColor="rgba(0, 255, 0, 0.1)";
            node.style.borderColor="rgb(0, 251, 0)";
        }else{
            node.style.backgroundColor="rgba(255, 0, 0, .1)";
            node.style.borderColor="red";
        }
    })

    newnode.innerHTML=`<span>${value}</span>`;
    newnode.setAttribute("class", "list-item");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class","form-check-input box")
    button.innerText="Remove";


    newnode.appendChild(checkbox);
    newnode.appendChild(button);
    rootnode.appendChild(newnode);
}

function addMsg(text, isTask){
    const msg=document.getElementById("message");
    msg.innerHTML=`<span>${text}</span>`
    msg.style.opacity=1;
    msg.style.right="30px";
    if(!isTask){
        msg.style.backgroundColor="rgba(255, 0, 0, .2)";
        msg.style.borderColor="red";
    }
    setTimeout(()=>{
        msg.style.opacity=0;
        msg.style.right="0";
        msg.style.backgroundColor="rgba(2, 255, 2, .2)";
        msg.style.borderColor="green";

}, 1000);
}

function add(){
    const input=document.getElementById("input");
    createAndAdd(input.value);
    addMsg("Task added...", true);
    input.value="";
    input.focus();
    
}
