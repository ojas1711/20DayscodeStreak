@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #2b88f0;
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

h3 {
  color: #fff;
  margin: 10px 0 20px;
  text-align: center;
}

.container {
  width: 500px;
}

textarea {
  border: none;
  display: block;
  width: 100%;
  height: 100px;
  font-family: inherit;
  padding: 10px;
  margin: 0 0 20px;
  font-size: 16px;
}

textarea:focus {
  outline: none;
}

.tag {
  background-color: #f0932b;
  color: #fff;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 0 5px 10px 0;
  font-size: 14px;
  display: inline-block;
}

.tag.highlight {
  background-color: #273c75;
}