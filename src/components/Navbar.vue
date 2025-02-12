<template>
    <nav class="navbar">
      <div class="container">
        <h1 class="logo">DoramaHub</h1>
        <input type="text" placeholder="Pesquisar doramas..." class="search-bar" />
        <button class="btn">Cadastrar Dorama</button>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    background: #2c3e50;
    padding: 5px 20px; 
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .search-bar {
  padding: 6px;
  width: 600px; 
  max-width: 2500%; 
  border-radius: 5px; 
  border: 1px solid #ccc; 
}
  
  .btn {
    padding: 6px 10px;
  }
  </style>