const btnHideSection=document.getElementsByClassName('btn');
btnHideSection.onclick = () => {
  const mySection=document.getElementsByTagName('section');
  mySection.style.display=mySection.style.display==='none'?'block' :'none';
}