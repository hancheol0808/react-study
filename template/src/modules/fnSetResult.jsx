export const fnSetResult = (e) =>{
  let fn = e.currentTarget.getAttribute("data-fn")
  let str = document.querySelector(".output").innerText
  switch(fn){
    case "change":
      let char = e.currentTarget.getAttribute("data-char")
      str = str + char
      return str 
    case "delete":
      str = str.slice(0,-1)
      return str
    case "clear":
      str = ""
      return str
    case "calc":
      //제어흐름 예외처리
      try{//에러가 없을때 실행
        //new Function("return" + str) -> 2
        let fnCalc = new Function('return ' + str)
        str = fnCalc()//2
        return str
      }
      catch{//에러가 발생하면 실행
        alert("계산식이 잘못되었습니다.")
        return str
      }
      
  }
}