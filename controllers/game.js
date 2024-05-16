// 引用用户模版数据
const Game = require('../models/game.js');

const gameController = {
  showGames: async function (req,res,next){
    try{
      let gameData = await Game.all()
      res.json({
        code: 200,
        message: "操作成功",
        data: gameData
      })
    }catch(e){
      res.json({ code: 0, message: "操作失败", data: e })
    }
  },

  addGame: async function (req, res, next) {
    try {
        let gameData = req.body;
        let result = await Game.insert(gameData);
        debugger
        res.json(result);
    } catch (e) {
        res.json({ code: 0, message: "操作失败", data: e })
    }
  }
}

module.exports = gameController;