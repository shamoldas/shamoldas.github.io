<script>
const printSentence = (id, sentence, speed = 50) => {
  let index = 0;
  let element = document.getElementById(id);
  
  let timer = setInterval(function() {
    const char = sentence[index];
    
    if (char === '<') {
      index = sentence.indexOf('>', index);  // skip to greater-than
    }
    
    element.innerHTML = sentence.slice(0, index);
    
    if (++index === sentence.length) {
      clearInterval(timer);
    }
  }, speed);
} // printSentence

printSentence(
  'contentDiv',
  'ভরসা রাখুন আপনার আপনার বিশ্বস্ত সহযোগী হিসেবে। <span style="color:gold;">Developer:</span><strong>Shamol Das</strong>.<ul><li>computer science & engineering graduate from HSTU.<li>I am Full Stack Web Developer<li> Working PHP Laravel Framework & PHP Developer<li>আস্থা রাখুন নির্ভয়ে<li></ul>',
  50
);
</script>