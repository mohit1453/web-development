function creatgreeting(greeting)
{
    function greet(name)
    {
        console.log(greeting ,name)
    }
    return greet
}
function getname()
{
  return  document.getElementById('namebox').value
}
let g1=creatgreeting('Good Afternoon')
let g2=creatgreeting("Good Evening")
console.log(g1())
console.log(g2())
