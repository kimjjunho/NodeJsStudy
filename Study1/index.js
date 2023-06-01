const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', (req, res) => {
  res.send('<h1>강아지<h1>')
})

app.get('/cat', function (req, res) {
  res.send("<a href='https://www.youtube.com/watch?v=onh9Pw4Zsec'>고양이</a>")
})

app.get('/cow', (req, res) =>{
  res.send({'name' : '소'})
  // res.json({'name' : '소'})
})

//파라미터
app.get('/user/:id', (req, res) =>{
  const p = req.params
  console.log(p)

  res.json({'id' : p.id})
})

app.get('/sound/:cat', (req, res) => {
  const { cat } = req.params
  console.log(cat)

  res.json({'고양이' : cat})
})

//쿼리 - http://localhost:3000/user/?name=%EA%B9%80%EC%A4%80%ED%98%B8&age=19
app.get('/user', (req, res) =>{
  const q = req.query
  console.log(q)
  res.json(
    {
      'name' : q.name,
      'age' : q.age,
    }
  )
})



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// 맥북에서 문자열에 변수값을 넣을 수 있도록 하려면 ''이 아닌 `` option + ~ 버튼을 클릭해주어야 한다.
// npm init을 터미널에 입력하면 라이브러리를 자세하게 확인할 수 있다.
// npm은 Node Package Manager의 약자이다.
// npm install ~를 사용하여 라이브러리를 추가할 수 있다.
// npm uninstall ~를 사용하여 라이브러리를 제거할 수 있다.
// control + c 를 클릭하여 express를 종룔할 수 있다.
/*
  app.get('/', ()=>{}) 에서
  get은 Http 메소드 - @GET
  '/'은 라우팅 - ex) user/signin/
  ()=>{}은 콜백함수 - 함수 (끝나고 실행할 함수)
  req - request
  res - response
 */
// app.listen(port, ()=>{}) 해당 포트로 들어오면 콜백 함수를 실행 시키겠다. 항상 대기.
// port - 논리적인 접속장소