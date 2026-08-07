let b=document.body
let t1=document.createElement('table')
b.append(t1)

let tr1=document.createElement('tr')
let tr2=document.createElement('tr')
let tr3=document.createElement('tr')
let tr4=document.createElement('tr')
t1.append(tr1,tr2,tr3,tr4)

let td1=document.createElement('td')
let td2=document.createElement('td')
tr1.append(td1,td2)

let td3=document.createElement('td')
let td4=document.createElement('td')
tr2.append(td3,td4)

let td5=document.createElement('td')
let td6=document.createElement('td')
tr3.append(td5,td6)

let td7=document.createElement('td')
let td8=document.createElement('td')
tr4.append(td7,td8)

t1.setAttribute('border','2px solid')
t1.setAttribute('cellpadding','0px')
t1.setAttribute('cellspacing','0px')
t1.style.height='100px'
t1.style.width='100px'

let t2=document.createElement('table')
td1.append(t2)

let tr11=document.createElement('tr')
let tr12=document.createElement('tr')
let tr13=document.createElement('tr')
let tr14=document.createElement('tr')
t2.append(tr11,tr12,tr13,tr14)

t2.setAttribute('border','2px solid')
t2.style.height='140px'
t2.style.width='140px'

let td111=document.createElement('td')
let td112=document.createElement('td')
let td113=document.createElement('td')
let td114=document.createElement('td')
tr11.append(td111,td112,td113,td114)
td111.setAttribute('colspan','4')
td112.remove()
td113.remove()
td114.remove()

let td121=document.createElement('td')
let td122=document.createElement('td')
let td123=document.createElement('td')
let td124=document.createElement('td')
tr12.append(td121,td122,td123,td124)
td121.setAttribute('rowspan','2')
td123.setAttribute('rowspan','2')

let td131=document.createElement('td')
let td132=document.createElement('td')
let td133=document.createElement('td')
let td134=document.createElement('td')
tr13.append(td131,td132,td133,td134)
td131.remove()
td133.remove()

let td141=document.createElement('td')
let td142=document.createElement('td')
let td143=document.createElement('td')
let td144=document.createElement('td')
tr14.append(td141,td142,td143,td144)
td141.setAttribute('colspan','2')
td142.remove()

t2.style.backgroundColor='orange'
t2.style.borderColor='black'

let t3=document.createElement('table')
td2.append(t3)

let tr21=document.createElement('tr')
let tr22=document.createElement('tr')
let tr23=document.createElement('tr')
let tr24=document.createElement('tr')
let tr25=document.createElement('tr')
t3.append(tr21,tr22,tr23,tr24,tr25)
t3.setAttribute('border','2px solid')
t3.style.height='140px'
t3.style.width='140px'

let td211=document.createElement('td')
let td212=document.createElement('td')
let td213=document.createElement('td')
let td214=document.createElement('td')
tr21.append(td211,td212,td213,td214)
td211.setAttribute('rowspan','2')
td213.setAttribute('rowspan','2')

let td221=document.createElement('td')
let td222=document.createElement('td')
let td223=document.createElement('td')
let td224=document.createElement('td')
tr22.append(td221,td222,td223,td224)
td221.remove()
td223.remove()

let td231=document.createElement('td')
let td232=document.createElement('td')
let td233=document.createElement('td')
let td234=document.createElement('td')
tr23.append(td231,td232,td233,td234)
td231.setAttribute('colspan','4')
td232.remove()
td233.remove()
td234.remove()

let td241=document.createElement('td')
let td242=document.createElement('td')
let td243=document.createElement('td')
let td244=document.createElement('td')
tr24.append(td241,td242,td243,td244)
td242.setAttribute('rowspan','2')
td244.setAttribute('rowspan','2')

let td251=document.createElement('td')
let td252=document.createElement('td')
let td253=document.createElement('td')
let td254=document.createElement('td')
tr25.append(td251,td252,td253,td254)
td252.remove()
td254.remove()

t3.style.backgroundColor='pink'
t3.style.borderColor='black'

let t4=document.createElement('table')
td3.append(t4)

let tr31=document.createElement('tr')
let tr32=document.createElement('tr')
let tr33=document.createElement('tr')
let tr34=document.createElement('tr')
t4.append(tr31,tr32,tr33,tr34)
t4.setAttribute('border','2px solid')
t4.style.height='140px'
t4.style.width='140px'

let td311=document.createElement('td')
let td312=document.createElement('td')
let td313=document.createElement('td')
let td314=document.createElement('td')
tr31.append(td311,td312,td313,td314)

let td321=document.createElement('td')
let td322=document.createElement('td')
let td323=document.createElement('td')
let td324=document.createElement('td')
tr32.append(td321,td322,td323,td324)
td322.setAttribute('rowspan','2')
td322.setAttribute('colspan','2')
td323.remove()

let td331=document.createElement('td')
let td332=document.createElement('td')
let td333=document.createElement('td')
let td334=document.createElement('td')
tr33.append(td331,td332,td333,td334)
td332.setAttribute('colspan','2')
td332.remove()
td333.remove()

let td341=document.createElement('td')
let td342=document.createElement('td')
let td343=document.createElement('td')
let td344=document.createElement('td')
tr34.append(td341,td342,td343,td344)

t4.style.backgroundColor='skyblue'
t4.style.borderColor='black'

let t5=document.createElement('table')
td4.append(t5)

let tr41=document.createElement('tr')
let tr42=document.createElement('tr')
let tr43=document.createElement('tr')
let tr44=document.createElement('tr')
t5.append(tr41,tr42,tr43,tr44)
t5.setAttribute('border','2px solid')
t5.style.height='140px'
t5.style.width='140px'

let td411=document.createElement('td')
let td412=document.createElement('td')
let td413=document.createElement('td')
let td414=document.createElement('td')
tr41.append(td411,td412,td413,td414)
td411.setAttribute('rowspan','4')
td414.setAttribute('rowspan','4')

let td421=document.createElement('td')
let td422=document.createElement('td')
let td423=document.createElement('td')
let td424=document.createElement('td')
tr42.append(td421,td422,td423,td424)
td421.remove()
td424.remove()

let td431=document.createElement('td')
let td432=document.createElement('td')
let td433=document.createElement('td')
let td434=document.createElement('td')
tr43.append(td431,td432,td433,td434)
td431.remove()
td434.remove()

let td441=document.createElement('td')
let td442=document.createElement('td')
let td443=document.createElement('td')
let td444=document.createElement('td')
tr44.append(td441,td442,td443,td444)
td441.remove()
td444.remove()

t5.style.backgroundColor='lightgreen'
t5.style.borderColor='black'

let t6=document.createElement('table')
td5.append(t6)

let tr51=document.createElement('tr')
let tr52=document.createElement('tr')
let tr53=document.createElement('tr')
t6.append(tr51,tr52,tr53)
t6.setAttribute('border','2px solid')
t6.style.height='140px'
t6.style.width='140px'

let td511=document.createElement('td')
let td512=document.createElement('td')
let td513=document.createElement('td')
tr51.append(td511,td512,td513)

let td521=document.createElement('td')
let td522=document.createElement('td')
let td523=document.createElement('td')
tr52.append(td521,td522,td523)

let td531=document.createElement('td')
let td532=document.createElement('td')
let td533=document.createElement('td')
tr53.append(td531,td532,td533)

t6.style.backgroundColor='yellow'
t6.style.borderColor='black'

let t7=document.createElement('table')
td6.append(t7)

let tr61=document.createElement('tr')
let tr62=document.createElement('tr')
let tr63=document.createElement('tr')
t7.append(tr61,tr62,tr63)
t7.setAttribute('border','2px solid')
t7.style.height='140px'
t7.style.width='140px'

let td611=document.createElement('td')
let td612=document.createElement('td')
let td613=document.createElement('td')
tr61.append(td611,td612,td613)
td611.setAttribute('rowspan','3')
td612.setAttribute('colspan','2')
td613.remove()

let td621=document.createElement('td')
let td622=document.createElement('td')
let td623=document.createElement('td')
tr62.append(td621,td622,td623)
td621.remove()
td623.setAttribute('rowspan','2')

let td631=document.createElement('td')
let td632=document.createElement('td')
let td633=document.createElement('td')
tr63.append(td631,td632,td633)
td631.remove()
td633.remove()


t7.style.backgroundColor='wheat'
t7.style.borderColor='black'

let t8=document.createElement('table')
td7.append(t8)

let tr71=document.createElement('tr')
let tr72=document.createElement('tr')
let tr73=document.createElement('tr')
let tr74=document.createElement('tr')
t8.append(tr71,tr72,tr73,tr74)
t8.setAttribute('border','2px solid')
t8.style.height='140px'
t8.style.width='140px'

let td711=document.createElement('td')
let td712=document.createElement('td')
let td713=document.createElement('td')
tr71.append(td711,td712,td713)
td712.setAttribute('colspan','2')
td713.remove()
td712.setAttribute('rowspan','2')

let td721=document.createElement('td')
let td722=document.createElement('td')
let td723=document.createElement('td')
tr72.append(td721,td722,td723)
td722.remove()
td723.remove()

let td731=document.createElement('td')
let td732=document.createElement('td')
let td733=document.createElement('td')
tr73.append(td731,td732,td733)

t8.style.backgroundColor='aqua'
t8.style.borderColor='black'

let t9=document.createElement('table')
td8.append(t9)

let tr81=document.createElement('tr')
let tr82=document.createElement('tr')
let tr83=document.createElement('tr')
t9.append(tr81,tr82,tr83)
t9.setAttribute('border','2px solid')
t9.style.height='140px'
t9.style.width='140px'

let td811=document.createElement('td')
let td812=document.createElement('td')
let td813=document.createElement('td')
tr81.append(td811,td812,td813)
td812.setAttribute('rowspan','2')

let td821=document.createElement('td')
let td822=document.createElement('td')
let td823=document.createElement('td')
tr82.append(td821,td822,td823)
td822.remove()

let td831=document.createElement('td')
let td832=document.createElement('td')
let td833=document.createElement('td')
tr83.append(td831,td832,td833)
td831.setAttribute('colspan','3')
td832.remove()
td833.remove()

t9.style.backgroundColor='hotpink'
t9.style.borderColor='black'