const Shop = {
  name: 'LZJ餐廳',
  address: '無極縣有夠鄉沒有村好吃 33 號',
  tel: '082-333333',
  items: {'一口培根': 15, '黑布丁': 30, '淡菜': 60,'惡魔蛋':50,'炸魚排':50,'生菜沙拉':65,'羊排':200,'西班牙燉飯':130,'牛排':240
          ,'烤雞':320,'肉丸義大利麵':160,'馬卡龍':360,'布朗尼':160,'蘋果派':100,'草莓奶昔':60,'水果拼盤':120,'草莓蛋糕':60 },

  orderCount: 0,
}

Shop.html = `
<div>
  <button class="big" onclick="Pos.start()">新增訂單</button><br/><br/>
  <button class="big" onclick="Report.start()">本日報表</button><br/><br/>
  <button class="big" onclick="Setting.start()">商店設定</button><br/><br/>
</div>
`

Shop.start = function () {
  Shop.init()
  Shop.name = localStorage.getItem('Shop.name') || Shop.name
  Shop.address = localStorage.getItem('Shop.address') || Shop.address
  Shop.tel = localStorage.getItem('Shop.tel') || Shop.tel
  Ui.id('menuShopName').innerHTML = Shop.name
  const itemsJson = localStorage.getItem('Shop.items')
  const addonsJson = localStorage.getItem('Shop.addons')
  if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
  if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
  Ui.show(Shop.html)
}

Shop.init = function () {
  Shop.orderCount = localStorage.getItem('Pos.Order.count')
  if (Shop.orderCount == null) {
    Shop.orderCount = 0
    localStorage.setItem('Pos.Order.count', Shop.orderCount)
  }
}

Shop.incCount = function () {
  // let orderCount = parseInt(localStorage.getItem('Pos.Order.count')) + 1
  localStorage.setItem('Pos.Order.count', ++ Shop.orderCount)
}

Shop.saveOrder = function (Order) {
  localStorage.setItem('Pos.Order.' + Shop.orderCount, JSON.stringify(Order))
}

Shop.getOrder = function (i) {
  let orderJson = localStorage.getItem('Pos.Order.'+i)
  if (orderJson == null) return null
  return JSON.parse(orderJson)
}
