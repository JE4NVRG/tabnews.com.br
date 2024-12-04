function status(request, response) {
  response.status(200).json({ chave: "Teste api deu certo ou não" });
}

export default status;
