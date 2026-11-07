# Algumas palavras que eu precisava dizer

Site estático responsivo para desktop, tablet e celular.

## Conteúdo
- `index.html`: página e mensagem.
- `style.css`: identidade visual e ajustes responsivos.
- `script.js`: entrada pelo nome, partículas e controle da música.
- `assets/musica.mp3`: trilha de fundo fornecida.

A música começa depois que a pessoa confirma o nome, respeitando as restrições de reprodução automática dos navegadores. O botão em formato de coração pausa e retoma a faixa.

## Publicar no GitHub e Render

1. Extraia esta pasta e crie um repositório no GitHub.
2. Envie os arquivos da pasta `mensagem_para_leticia` para a raiz do repositório.
3. No Render, selecione **New → Static Site** e conecte o repositório.
4. Configure:
   - **Build Command:** deixe vazio.
   - **Publish Directory:** `.`
5. Clique em **Create Static Site**. O Render fornecerá o endereço público HTTPS.
6. Para atualizar no futuro, faça commit e push no GitHub; o Render publica a nova versão automaticamente.

### Envio pelo Git (terminal)
```bash
git init
git add .
git commit -m "Publica página da mensagem"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

## Precisa de UptimeRobot?
Não. Para um **Static Site** do Render, não é necessário configurar UptimeRobot para impedir suspensão. O UptimeRobot serve apenas para monitorar disponibilidade e avisar se o endereço ficar fora do ar; ele não hospeda o site nem mantém o serviço ativo.

## Observação sobre o acesso
A validação do nome acontece no navegador e é apenas uma barreira visual, não uma autenticação segura. Para uma mensagem privada de verdade, seria necessário implementar autenticação no servidor.
