let Show = document.getElementById('Show');
let List = document.getElementById('List');
let Hide = document.getElementById('Hide');

function showorhide()
{
    if (List.classList == 'Mobile-off')
    {
        List.classList.remove('Mobile-off')
        List.classList.add('Mobile-on')
    }
    else
    {
        List.classList.remove('Mobile-on')
        List.classList.add('Mobile-off')
    }
}