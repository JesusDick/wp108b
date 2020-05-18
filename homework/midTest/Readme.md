
# 期中作業
<link rel="stylesheet" href="topsidenav.css">
此段引用資料夾內的topsidenav.css
---
            <button href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</button>
            <button type="button" onclick="Test1()">創始理念</button>
            <button type="button" onclick="Test2()">餐廳設計</button>
            <button type="button" onclick="Test3()">旗下餐廳</button>
            <button type="button" onclick="Test4()">回饋與建議</button>

                <script>
        function Test1() {
            document.getElementById("Test").innerHTML = "<h1>創始於2020年</h1><p>本店宗旨為了讓更多人品嚐到各國美食，<br>但又深怕覺得太貴而退而遠之所以才創立此店</p>"
            document.getElementById("Test").style.fontSize = "160%"
            document.getElementById("Test").style.fontFamily = "Microsoft JhengHei";
        }
        function Test2() {
            document.getElementById("Test").innerHTML = "<p>本餐廳採用的設計為開放式廚房設計，<br>既看得到廚師們的高超廚藝也聞得到飄香而來的香味<br>可以說是視覺與味覺上的雙重享受</p>"
            document.getElementById("Test").style.fontSize = "160%"
            document.getElementById("Test").style.fontFamily = "Microsoft JhengHei";

        }
        function Test3() {
            document.getElementById("Test").innerHTML = "<p>此店為目前全台唯一旗艦店<br>加盟電話:0901234567<br><br><br><br><br><br><br>本店在台灣沒有其他店面了QQ</p>"
            document.getElementById("Test").style.fontSize = "160%"
            document.getElementById("Test").style.fontFamily = "Microsoft JhengHei";
        }
---        
        function Test4() {
            document.getElementById("Test").innerHTML = "<h2>如果對本店有任何需待改善的地方可以打在這</h2><textarea rows='10' cols='50'>Enter text here...</textarea><br><input type='submit'>"
            document.getElementById("Test").inputMode = "type=submit"
            document.getElementById("Test").style.fontFamily = "Microsoft JhengHei";

        }
    </script>
上兩段程式碼是互相配合著使用。
---
        <div class="topnav" id="myTopnav">
            <a href="#home" class="active" onclick="openNav()">&#9776; 介紹</button>
            <a href="midTest3.html">開胃菜</a>
            <a href="midTest4.html">主餐</a>
            <a href="midTest5.html">甜點</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            </a>
        </div>

        此段程式碼是以連結的方式去開啟，原本打算以button+js的方式不換頁只換內容的方式去寫。
---
            <table>
                <tr>
                  <th colspan="2">開胃菜</th>
                </tr>
                <tr>
                  <td>一口培根</td>
                  <td>黑布丁</td>
                </tr>
                <tr>
                  <td><img src="Bacon.jpg" alt="一口培根顯示錯誤" width="95%">($15)</td>
                  <td><img src="blackpudding.jpg" alt="黑布丁顯示錯誤" width="95%">($30)</td>
                </tr>
                <tr>
                    <td>淡菜</td>
                    <td>惡魔蛋</td>
                  </tr>
                  <tr>
                    <td><img src="Mussels.jpg" alt="淡菜顯示錯誤" width="95%">($60)</td>
                    <td><img src="devilegg.jpeg" alt="惡魔蛋顯示錯誤" width="95%">($50)</td>
                  </tr>
                  <tr>
                    <td>炸魚排</td>
                    <td>生菜沙拉</td>
                  </tr>
                  <tr>
                    <td><img src="fryfish.jpg" alt="炸魚排顯示錯誤" width="95%" >($50)</td>
                    <td><img src="Salad.jpg" alt="生菜沙拉顯示錯誤" width="95%">($65)</td>
                  </tr>
              </table>
              
              此段程式碼是以表格內放入圖片去模擬，一般實體菜單的模樣。
---
互聯連結：

  * [連結1](https://github.com/JesusDick/wp108b/blob/master/homework/midTest/midTest2.html)
  * [連結2](https://github.com/JesusDick/wp108b/blob/master/homework/midTest/midTest3.html)
  * [連結3](https://github.com/JesusDick/wp108b/blob/master/homework/midTest/midTest4.html)
  *[連結4](https://github.com/JesusDick/wp108b/blob/master/homework/midTest/midTest5.html)
  *[此連結沒有用到](https://github.com/JesusDick/wp108b/blob/master/homework/midTest/mid-Test.html)

[我的期中網站](https://jesusdick.github.io/wp108b/homework/midTest/midTest2.html)
