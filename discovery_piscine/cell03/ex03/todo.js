function new_todo()
{
    let n_todo = window.prompt("Nouveau TODO");
    let list = document.getElementById("ft_list");
    const node = document.createElement("li");
    
    if (n_todo)
    {
        const text_node = document.createTextNode(n_todo);
        node.setAttribute("onclick", "remove(this)");
        node.prepend(text_node);
        list.prepend(node);
    }
    return (list);
}

var cookie = new_todo();

document.Cookie = cookie;
console.log(cookie);
// console.log(document);

function remove(element)
{
    var parent_node = element.parentNode;
	if (confirm("Souhaitez-vous vraiment supprimer ce todo ??"))
	{
			parent_node.removeChild(element);
	}
}



