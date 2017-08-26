<template>
  <div id="app">
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html{ font-size:12px; width:100%; height:100%;}
  *{margin: 0; padding: 0; outline: none;}
  *:not(input,textarea){-webkit-touch-callout: inherit; -webkit-user-select: auto;}
  body{width: 100%;height:100%;font-family:'Microsoft YaHei';color:#666; -webkit-touch-callout: inherit ;  -webkit-user-select: auto ; background-color: #fff;}
  a{text-decoration: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
  a:hover{text-decoration: none;}
  button,input,select,textarea{font-size: 100%; margin: 0; padding: 0; outline: none;}
  dt,dd{display: inline-block;}
  textarea,input{resize: none; outline: none;}
  textarea{resize: none; -webkit-appearance: none;}
  ul,ol,li{list-style: none;}
  em{font-style: normal;}
  .clear{ clear:both;}
  #app{ width:100%;height:100%; }
</style>
