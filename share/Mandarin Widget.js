const words = [
    {"term":"斟酌","romanization":"zhēnzhuó","translation":"to weigh carefully","example":"他斟酌了很久才回复。"},
    {"term":"敷衍","romanization":"fūyǎn","translation":"to do half-heartedly","example":"别再敷衍我了。"},
    {"term":"固执","romanization":"gùzhí","translation":"stubborn","example":"我爸爸非常固执。"},
    {"term":"画蛇添足","romanization":"huà shé tiān zú","translation":"to ruin it by overdoing it","example":"这句话已经很好了，别画蛇添足。"},
    {"term":"尴尬","romanization":"gāngà","translation":"awkward","example":"气氛突然变得很尴尬。"},
    {"term":"犹豫","romanization":"yóuyù","translation":"to hesitate","example":"她犹豫了一下才开口。"},
    {"term":"半途而废","romanization":"bàn tú ér fèi","translation":"to give up halfway","example":"做事不能半途而废。"},
    {"term":"珍惜","romanization":"zhēnxī","translation":"to treasure","example":"要珍惜身边的人。"},
    {"term":"抱怨","romanization":"bàoyuàn","translation":"to complain","example":"他总是抱怨工作太累。"},
    {"term":"一举两得","romanization":"yī jǔ liǎng dé","translation":"two gains in one move","example":"学中文又交朋友，一举两得。"},
    {"term":"依赖","romanization":"yīlài","translation":"to depend on","example":"孩子太依赖手机了。"},
    {"term":"诱惑","romanization":"yòuhuò","translation":"temptation","example":"甜点的诱惑太大了。"},
    {"term":"马马虎虎","romanization":"mǎ mǎ hū hū","translation":"so-so","example":"我的中文马马虎虎。"},
    {"term":"熬夜","romanization":"áoyè","translation":"to stay up late","example":"别熬夜，对身体不好。"},
    {"term":"拖延","romanization":"tuōyán","translation":"to procrastinate","example":"我又在拖延作业了。"},
    {"term":"自言自语","romanization":"zì yán zì yǔ","translation":"to talk to oneself","example":"他常常自言自语。"},
    {"term":"挑剔","romanization":"tiāotì","translation":"picky","example":"她吃东西很挑剔。"},
    {"term":"啰嗦","romanization":"luōsuo","translation":"long-winded","example":"我妈有时候很啰嗦。"},
    {"term":"津津有味","romanization":"jīn jīn yǒu wèi","translation":"with great relish","example":"他吃得津津有味。"},
    {"term":"委屈","romanization":"wěiqu","translation":"to feel wronged","example":"她受了委屈也不说。"},
    {"term":"心疼","romanization":"xīnténg","translation":"to ache for someone","example":"看你这么累，我很心疼。"},
    {"term":"莫名其妙","romanization":"mò míng qí miào","translation":"baffling","example":"他突然莫名其妙地生气了。"},
    {"term":"讲究","romanization":"jiǎngjiu","translation":"particular about","example":"他穿衣服很讲究。"},
    {"term":"凑合","romanization":"còuhe","translation":"to make do","example":"这个房间凑合住吧。"},
    {"term":"乱七八糟","romanization":"luàn qī bā zāo","translation":"a total mess","example":"房间乱七八糟的。"},
    {"term":"折腾","romanization":"zhēteng","translation":"to fuss around","example":"别折腾了，早点睡吧。"},
    {"term":"唠叨","romanization":"láodao","translation":"to nag","example":"奶奶每天都唠叨我。"},
    {"term":"一模一样","romanization":"yī mú yī yàng","translation":"exactly alike","example":"他们俩长得一模一样。"},
    {"term":"靠谱","romanization":"kàopǔ","translation":"reliable","example":"这个人做事很靠谱。"},
    {"term":"吐槽","romanization":"tǔcáo","translation":"to vent, to roast","example":"我们一起吐槽老板。"},
    {"term":"小心翼翼","romanization":"xiǎo xīn yì yì","translation":"very carefully","example":"她小心翼翼地打开盒子。"},
    {"term":"纠结","romanization":"jiūjié","translation":"torn, conflicted","example":"我很纠结要不要去。"},
    {"term":"佩服","romanization":"pèifú","translation":"to admire","example":"我真佩服你的勇气。"},
    {"term":"不知不觉","romanization":"bù zhī bù jué","translation":"without realizing","example":"不知不觉天黑了。"},
    {"term":"羡慕","romanization":"xiànmù","translation":"to envy","example":"我很羡慕你的生活。"},
    {"term":"嫉妒","romanization":"jídù","translation":"jealous","example":"他嫉妒朋友的成功。"},
    {"term":"恍然大悟","romanization":"huǎng rán dà wù","translation":"to suddenly see it","example":"听完解释，我恍然大悟。"},
    {"term":"惭愧","romanization":"cánkuì","translation":"ashamed","example":"我对此感到很惭愧。"},
    {"term":"欣慰","romanization":"xīnwèi","translation":"gratified","example":"看到你长大，我很欣慰。"},
    {"term":"胡思乱想","romanization":"hú sī luàn xiǎng","translation":"to overthink","example":"别胡思乱想了，快睡吧。"},
    {"term":"沮丧","romanization":"jǔsàng","translation":"dejected","example":"考试失败让他很沮丧。"},
    {"term":"焦虑","romanization":"jiāolǜ","translation":"anxious","example":"面试前我总是很焦虑。"},
    {"term":"无精打采","romanization":"wú jīng dǎ cǎi","translation":"listless","example":"他今天无精打采的。"},
    {"term":"憧憬","romanization":"chōngjǐng","translation":"to long for","example":"她憧憬着未来的生活。"},
    {"term":"感慨","romanization":"gǎnkǎi","translation":"to be moved, to reflect","example":"回到老家，他很感慨。"},
    {"term":"心不在焉","romanization":"xīn bù zài yān","translation":"absent-minded","example":"上课时他心不在焉。"},
    {"term":"怀念","romanization":"huáiniàn","translation":"to miss, to cherish","example":"我很怀念大学时光。"},
    {"term":"留恋","romanization":"liúliàn","translation":"reluctant to leave","example":"他很留恋这座城市。"},
    {"term":"一心一意","romanization":"yī xīn yī yì","translation":"wholeheartedly","example":"她一心一意地工作。"},
    {"term":"腼腆","romanization":"miǎntiǎn","translation":"shy","example":"这个男孩有点腼腆。"},
    {"term":"爽快","romanization":"shuǎngkuai","translation":"straightforward","example":"她很爽快地答应了。"},
    {"term":"三心二意","romanization":"sān xīn èr yì","translation":"half-hearted","example":"做事不要三心二意。"},
    {"term":"大方","romanization":"dàfang","translation":"generous","example":"他请客一向很大方。"},
    {"term":"小气","romanization":"xiǎoqi","translation":"stingy","example":"别这么小气嘛。"},
    {"term":"半信半疑","romanization":"bàn xìn bàn yí","translation":"half-believing","example":"大家对他的话半信半疑。"},
    {"term":"谦虚","romanization":"qiānxū","translation":"modest","example":"他虽然厉害但很谦虚。"},
    {"term":"傲慢","romanization":"àomàn","translation":"arrogant","example":"他的态度很傲慢。"},
    {"term":"犹豫不决","romanization":"yóu yù bù jué","translation":"unable to decide","example":"他还在犹豫不决。"},
    {"term":"粗心","romanization":"cūxīn","translation":"careless","example":"我太粗心，写错了名字。"},
    {"term":"细腻","romanization":"xìnì","translation":"delicate, subtle","example":"她的文字很细腻。"},
    {"term":"迫不及待","romanization":"pò bù jí dài","translation":"can't wait","example":"孩子迫不及待地打开礼物。"},
    {"term":"含蓄","romanization":"hánxù","translation":"reserved, understated","example":"中国人表达感情很含蓄。"},
    {"term":"直率","romanization":"zhíshuài","translation":"frank","example":"她说话很直率。"},
    {"term":"手忙脚乱","romanization":"shǒu máng jiǎo luàn","translation":"in a frantic rush","example":"早上大家手忙脚乱的。"},
    {"term":"圆滑","romanization":"yuánhuá","translation":"smooth, slick","example":"他处事太圆滑了。"},
    {"term":"体贴","romanization":"tǐtiē","translation":"considerate","example":"他对女朋友很体贴。"},
    {"term":"七上八下","romanization":"qī shàng bā xià","translation":"on edge","example":"我心里七上八下的。"},
    {"term":"任性","romanization":"rènxìng","translation":"willful","example":"别这么任性好不好？"},
    {"term":"懒散","romanization":"lǎnsǎn","translation":"sluggish","example":"放假后我变得很懒散。"},
    {"term":"一言为定","romanization":"yī yán wéi dìng","translation":"it's a deal","example":"好，一言为定！"},
    {"term":"勤快","romanization":"qínkuai","translation":"hardworking","example":"她是个勤快的人。"},
    {"term":"稳重","romanization":"wěnzhòng","translation":"steady, mature","example":"他做事很稳重。"},
    {"term":"一路平安","romanization":"yī lù píng ān","translation":"have a safe trip","example":"祝你一路平安！"},
    {"term":"冷淡","romanization":"lěngdàn","translation":"cold, indifferent","example":"她对我突然很冷淡。"},
    {"term":"敏感","romanization":"mǐngǎn","translation":"sensitive","example":"他对批评很敏感。"},
    {"term":"迟钝","romanization":"chídùn","translation":"slow to react","example":"我早上反应很迟钝。"},
    {"term":"入乡随俗","romanization":"rù xiāng suí sú","translation":"to follow local customs","example":"我们要入乡随俗。"},
    {"term":"果断","romanization":"guǒduàn","translation":"decisive","example":"她做决定很果断。"},
    {"term":"顽皮","romanization":"wánpí","translation":"naughty","example":"这只小猫很顽皮。"},
    {"term":"塞翁失马","romanization":"sài wēng shī mǎ","translation":"a blessing in disguise","example":"塞翁失马，焉知非福。"},
    {"term":"乐观","romanization":"lèguān","translation":"optimistic","example":"他一直很乐观。"},
    {"term":"悲观","romanization":"bēiguān","translation":"pessimistic","example":"别这么悲观嘛。"},
    {"term":"对牛弹琴","romanization":"duì niú tán qín","translation":"to talk to a wall","example":"跟他讲道理就是对牛弹琴。"},
    {"term":"天真","romanization":"tiānzhēn","translation":"naive","example":"你想得太天真了。"},
    {"term":"成熟","romanization":"chéngshú","translation":"mature","example":"他比同龄人成熟。"},
    {"term":"守株待兔","romanization":"shǒu zhū dài tù","translation":"to wait for luck","example":"找工作不能守株待兔。"},
    {"term":"难免","romanization":"nánmiǎn","translation":"hard to avoid","example":"新手难免会犯错。"},
    {"term":"果然","romanization":"guǒrán","translation":"as expected","example":"他果然又迟到了。"},
    {"term":"亡羊补牢","romanization":"wáng yáng bǔ láo","translation":"better late than never","example":"亡羊补牢，为时不晚。"},
    {"term":"居然","romanization":"jūrán","translation":"unexpectedly","example":"他居然忘了我的生日。"},
    {"term":"竟然","romanization":"jìngrán","translation":"to one's surprise","example":"这道题竟然这么简单。"},
    {"term":"井底之蛙","romanization":"jǐng dǐ zhī wā","translation":"a frog in a well","example":"别做井底之蛙。"},
    {"term":"简直","romanization":"jiǎnzhí","translation":"simply, utterly","example":"这简直太棒了！"},
    {"term":"干脆","romanization":"gāncuì","translation":"might as well","example":"干脆我们打车去吧。"},
    {"term":"掩耳盗铃","romanization":"yǎn ěr dào líng","translation":"to fool oneself","example":"这样做是掩耳盗铃。"},
    {"term":"索性","romanization":"suǒxìng","translation":"just go ahead and","example":"下雨了，索性不出门。"},
    {"term":"未必","romanization":"wèibì","translation":"not necessarily","example":"贵的东西未必好。"},
    {"term":"狐假虎威","romanization":"hú jiǎ hǔ wēi","translation":"to borrow someone's power","example":"他只是狐假虎威罢了。"},
    {"term":"何必","romanization":"hébì","translation":"why bother","example":"何必为这种事生气？"},
    {"term":"难怪","romanization":"nánguài","translation":"no wonder","example":"难怪他今天这么开心。"},
    {"term":"杞人忧天","romanization":"qǐ rén yōu tiān","translation":"to worry needlessly","example":"你这是杞人忧天。"},
    {"term":"毕竟","romanization":"bìjìng","translation":"after all","example":"毕竟他还是个孩子。"},
    {"term":"反正","romanization":"fǎnzhèng","translation":"anyway","example":"反正我不想去。"},
    {"term":"拔苗助长","romanization":"bá miáo zhù zhǎng","translation":"to rush and ruin it","example":"教育孩子不能拔苗助长。"},
    {"term":"偏偏","romanization":"piānpiān","translation":"of all things","example":"偏偏今天下雨了。"},
    {"term":"总算","romanization":"zǒngsuàn","translation":"at long last","example":"我总算找到工作了。"},
    {"term":"自相矛盾","romanization":"zì xiāng máo dùn","translation":"self-contradictory","example":"他说的话自相矛盾。"},
    {"term":"依然","romanization":"yīrán","translation":"still","example":"他依然爱着她。"},
    {"term":"渐渐","romanization":"jiànjiàn","translation":"gradually","example":"天渐渐黑了。"},
    {"term":"熟能生巧","romanization":"shú néng shēng qiǎo","translation":"practice makes perfect","example":"多练习，熟能生巧。"},
    {"term":"随手","romanization":"suíshǒu","translation":"on the way out","example":"请随手关门。"},
    {"term":"顺便","romanization":"shùnbiàn","translation":"while you're at it","example":"顺便帮我买瓶水。"},
    {"term":"滥竽充数","romanization":"làn yú chōng shù","translation":"to fake one's way in","example":"我在合唱团里滥竽充数。"},
    {"term":"尽量","romanization":"jǐnliàng","translation":"as much as possible","example":"我会尽量早点到。"},
    {"term":"宁可","romanization":"nìngkě","translation":"would rather","example":"我宁可走路也不坐车。"},
    {"term":"画龙点睛","romanization":"huà lóng diǎn jīng","translation":"the finishing touch","example":"这一笔真是画龙点睛。"},
    {"term":"不禁","romanization":"bùjīn","translation":"can't help but","example":"她不禁笑了起来。"},
    {"term":"不免","romanization":"bùmiǎn","translation":"inevitably","example":"第一次见面不免紧张。"},
    {"term":"一针见血","romanization":"yī zhēn jiàn xiě","translation":"right to the point","example":"他的评论一针见血。"},
    {"term":"万一","romanization":"wànyī","translation":"what if, just in case","example":"万一下雨怎么办？"},
    {"term":"恰好","romanization":"qiàhǎo","translation":"as it happens","example":"我恰好也在那里。"},
    {"term":"一见钟情","romanization":"yī jiàn zhōng qíng","translation":"love at first sight","example":"他们是一见钟情。"},
    {"term":"一旦","romanization":"yīdàn","translation":"once","example":"一旦决定就别后悔。"},
    {"term":"时而","romanization":"shí'ér","translation":"at times","example":"天气时而晴时而雨。"},
    {"term":"情不自禁","romanization":"qíng bù zì jīn","translation":"can't help oneself","example":"她情不自禁地笑了。"},
    {"term":"姑且","romanization":"gūqiě","translation":"for the time being","example":"这件事姑且不谈。"},
    {"term":"何况","romanization":"hékuàng","translation":"let alone","example":"大人都不懂，何况孩子。"},
    {"term":"哭笑不得","romanization":"kū xiào bù dé","translation":"half amused, half annoyed","example":"他的回答让我哭笑不得。"},
    {"term":"况且","romanization":"kuàngqiě","translation":"besides","example":"太远了，况且我也累了。"},
    {"term":"以免","romanization":"yǐmiǎn","translation":"so as to avoid","example":"早点走，以免迟到。"},
    {"term":"目瞪口呆","romanization":"mù dèng kǒu dāi","translation":"dumbstruck","example":"大家都看得目瞪口呆。"},
    {"term":"从而","romanization":"cóng'ér","translation":"thereby","example":"他努力学习，从而进步很快。"},
    {"term":"倘若","romanization":"tǎngruò","translation":"if, supposing","example":"倘若你不来，我就走。"},
    {"term":"大惊小怪","romanization":"dà jīng xiǎo guài","translation":"to make a fuss","example":"这有什么好大惊小怪的？"},
    {"term":"似乎","romanization":"sìhū","translation":"seemingly","example":"他似乎不太高兴。"},
    {"term":"仿佛","romanization":"fǎngfú","translation":"as if","example":"时间仿佛停止了。"},
    {"term":"理所当然","romanization":"lǐ suǒ dāng rán","translation":"taken for granted","example":"别把帮助当作理所当然。"},
    {"term":"疏忽","romanization":"shūhu","translation":"oversight","example":"这是我的疏忽。"},
    {"term":"误会","romanization":"wùhuì","translation":"misunderstanding","example":"这只是一个误会。"},
    {"term":"显而易见","romanization":"xiǎn ér yì jiàn","translation":"plain to see","example":"答案显而易见。"},
    {"term":"借口","romanization":"jièkǒu","translation":"excuse","example":"别再找借口了。"},
    {"term":"秘诀","romanization":"mìjué","translation":"secret, knack","example":"成功没有什么秘诀。"},
    {"term":"独一无二","romanization":"dú yī wú èr","translation":"one of a kind","example":"每个人都是独一无二的。"},
    {"term":"契机","romanization":"qìjī","translation":"turning point","example":"这次失败是一个契机。"},
    {"term":"瓶颈","romanization":"píngjǐng","translation":"bottleneck, plateau","example":"我的学习遇到了瓶颈。"},
    {"term":"千方百计","romanization":"qiān fāng bǎi jì","translation":"by every means","example":"他千方百计想见她。"},
    {"term":"底线","romanization":"dǐxiàn","translation":"bottom line","example":"撒谎是我的底线。"},
    {"term":"分寸","romanization":"fēncun","translation":"sense of limits","example":"说话要有分寸。"},
    {"term":"面子","romanization":"miànzi","translation":"face, dignity","example":"他很爱面子。"},
    {"term":"全力以赴","romanization":"quán lì yǐ fù","translation":"to go all out","example":"我们会全力以赴。"},
    {"term":"人情","romanization":"rénqíng","translation":"a favor owed","example":"我欠他一个人情。"},
    {"term":"缘分","romanization":"yuánfèn","translation":"fate, destiny","example":"我们认识是缘分。"},
    {"term":"一帆风顺","romanization":"yī fān fēng shùn","translation":"smooth sailing","example":"祝你一帆风顺！"},
    {"term":"默契","romanization":"mòqì","translation":"unspoken understanding","example":"他们配合得很有默契。"},
    {"term":"氛围","romanization":"fēnwéi","translation":"atmosphere","example":"这家咖啡店氛围很好。"},
    {"term":"万事如意","romanization":"wàn shì rú yì","translation":"may all go well","example":"新年快乐，万事如意！"},
    {"term":"风度","romanization":"fēngdù","translation":"grace, poise","example":"输了也要有风度。"},
    {"term":"魅力","romanization":"mèilì","translation":"charm","example":"她很有个人魅力。"},
    {"term":"来之不易","romanization":"lái zhī bù yì","translation":"hard-won","example":"今天的生活来之不易。"},
    {"term":"气质","romanization":"qìzhì","translation":"presence, aura","example":"她的气质很特别。"},
    {"term":"品味","romanization":"pǐnwèi","translation":"taste","example":"他的穿衣品味不错。"},
    {"term":"得不偿失","romanization":"dé bù cháng shī","translation":"not worth it","example":"为了钱熬夜，得不偿失。"},
    {"term":"脾气","romanization":"píqi","translation":"temper","example":"他的脾气越来越大。"},
    {"term":"毛病","romanization":"máobìng","translation":"bad habit, flaw","example":"他有乱扔东西的毛病。"},
    {"term":"恰到好处","romanization":"qià dào hǎo chù","translation":"just right","example":"盐放得恰到好处。"},
    {"term":"本事","romanization":"běnshi","translation":"ability","example":"你有本事自己做。"},
    {"term":"心态","romanization":"xīntài","translation":"mindset","example":"保持好心态很重要。"},
    {"term":"适可而止","romanization":"shì kě ér zhǐ","translation":"to know when to stop","example":"玩游戏要适可而止。"},
    {"term":"心思","romanization":"xīnsi","translation":"thoughts, mind","example":"我猜不透他的心思。"},
    {"term":"心事","romanization":"xīnshì","translation":"something on one's mind","example":"你好像有心事。"},
    {"term":"物美价廉","romanization":"wù měi jià lián","translation":"good and cheap","example":"这家店的东西物美价廉。"},
    {"term":"念头","romanization":"niàntou","translation":"idea, thought","example":"我突然有个念头。"},
    {"term":"灵感","romanization":"línggǎn","translation":"inspiration","example":"散步时我常有灵感。"},
    {"term":"讨价还价","romanization":"tǎo jià huán jià","translation":"to haggle","example":"她在市场上讨价还价。"},
    {"term":"动力","romanization":"dònglì","translation":"motivation","example":"你是我前进的动力。"},
    {"term":"负担","romanization":"fùdān","translation":"burden","example":"房贷是很大的负担。"},
    {"term":"一无所知","romanization":"yī wú suǒ zhī","translation":"to know nothing","example":"我对这件事一无所知。"},
    {"term":"后果","romanization":"hòuguǒ","translation":"consequences","example":"你要承担后果。"},
    {"term":"代价","romanization":"dàijià","translation":"price, cost","example":"成功要付出代价。"},
    {"term":"一窍不通","romanization":"yī qiào bù tōng","translation":"clueless about","example":"我对电脑一窍不通。"},
    {"term":"矛盾","romanization":"máodùn","translation":"contradiction","example":"他的话前后矛盾。"},
    {"term":"偏见","romanization":"piānjiàn","translation":"prejudice","example":"我们不应该有偏见。"},
    {"term":"似懂非懂","romanization":"sì dǒng fēi dǒng","translation":"to half understand","example":"他似懂非懂地点点头。"},
    {"term":"局面","romanization":"júmiàn","translation":"situation","example":"局面已经无法控制。"},
    {"term":"趋势","romanization":"qūshì","translation":"trend","example":"这是未来的趋势。"},
    {"term":"刮目相看","romanization":"guā mù xiāng kàn","translation":"to see in a new light","example":"他的进步让人刮目相看。"},
    {"term":"前途","romanization":"qiántú","translation":"prospects","example":"这个行业很有前途。"},
    {"term":"遗憾","romanization":"yíhàn","translation":"regret, a pity","example":"没去成真遗憾。"},
    {"term":"自以为是","romanization":"zì yǐ wéi shì","translation":"self-righteous","example":"他总是自以为是。"},
    {"term":"理想","romanization":"lǐxiǎng","translation":"ideal","example":"现实和理想不一样。"},
    {"term":"现实","romanization":"xiànshí","translation":"reality","example":"你要面对现实。"},
    {"term":"目中无人","romanization":"mù zhōng wú rén","translation":"full of oneself","example":"他太目中无人了。"},
    {"term":"规矩","romanization":"guīju","translation":"rules, manners","example":"这里有这里的规矩。"},
    {"term":"风俗","romanization":"fēngsú","translation":"custom","example":"每个地方风俗不同。"},
    {"term":"斤斤计较","romanization":"jīn jīn jì jiào","translation":"to sweat the small stuff","example":"朋友之间别斤斤计较。"},
    {"term":"节奏","romanization":"jiézòu","translation":"pace, rhythm","example":"城市生活节奏很快。"},
    {"term":"效率","romanization":"xiàolǜ","translation":"efficiency","example":"他的工作效率很高。"},
    {"term":"小题大做","romanization":"xiǎo tí dà zuò","translation":"to make a big deal","example":"这点事别小题大做。"},
    {"term":"细节","romanization":"xìjié","translation":"detail","example":"细节决定成败。"},
    {"term":"把握","romanization":"bǎwò","translation":"confidence, certainty","example":"我没有把握能赢。"},
    {"term":"一毛不拔","romanization":"yī máo bù bá","translation":"extremely stingy","example":"他是个一毛不拔的人。"},
    {"term":"窍门","romanization":"qiàomén","translation":"trick, knack","example":"学语言有什么窍门？"},
    {"term":"优势","romanization":"yōushì","translation":"advantage","example":"这是我们的优势。"},
    {"term":"无所事事","romanization":"wú suǒ shì shì","translation":"to idle about","example":"他整天无所事事。"},
    {"term":"缺陷","romanization":"quēxiàn","translation":"defect","example":"这个设计有缺陷。"},
    {"term":"弊端","romanization":"bìduān","translation":"drawback","example":"这种制度有弊端。"},
    {"term":"游手好闲","romanization":"yóu shǒu hào xián","translation":"to loaf around","example":"他年轻时游手好闲。"},
    {"term":"隐私","romanization":"yǐnsī","translation":"privacy","example":"请尊重别人的隐私。"},
    {"term":"尊严","romanization":"zūnyán","translation":"dignity","example":"每个人都有尊严。"},
    {"term":"废寝忘食","romanization":"fèi qǐn wàng shí","translation":"to forget to eat and sleep","example":"他学习得废寝忘食。"},
    {"term":"良心","romanization":"liángxīn","translation":"conscience","example":"做事要讲良心。"},
    {"term":"诚意","romanization":"chéngyì","translation":"sincerity","example":"他很有诚意。"},
    {"term":"争分夺秒","romanization":"zhēng fēn duó miǎo","translation":"to race against time","example":"大家争分夺秒地工作。"},
    {"term":"耐心","romanization":"nàixīn","translation":"patience","example":"教孩子需要耐心。"},
    {"term":"珍藏","romanization":"zhēncáng","translation":"to keep as a treasure","example":"我珍藏着那封信。"},
    {"term":"慢条斯理","romanization":"màn tiáo sī lǐ","translation":"unhurried","example":"他说话总是慢条斯理的。"},
    {"term":"琢磨","romanization":"zuómo","translation":"to mull over","example":"我一直在琢磨这件事。"},
    {"term":"打听","romanization":"dǎting","translation":"to ask around","example":"我去打听一下消息。"},
    {"term":"急急忙忙","romanization":"jí jí máng máng","translation":"in a hurry","example":"他急急忙忙地出门了。"},
    {"term":"张罗","romanization":"zhāngluo","translation":"to arrange, to bustle","example":"妈妈在张罗晚饭。"},
    {"term":"应付","romanization":"yìngfu","translation":"to cope with","example":"我一个人应付不了。"},
    {"term":"对付","romanization":"duìfu","translation":"to deal with","example":"这个人很难对付。"},
    {"term":"一干二净","romanization":"yī gān èr jìng","translation":"completely","example":"我把这事忘得一干二净。"},
    {"term":"迁就","romanization":"qiānjiù","translation":"to give in to","example":"你不能总迁就他。"},
    {"term":"包容","romanization":"bāoróng","translation":"to accept, to forgive","example":"夫妻之间要互相包容。"},
    {"term":"一清二楚","romanization":"yī qīng èr chǔ","translation":"crystal clear","example":"我记得一清二楚。"},
    {"term":"体谅","romanization":"tǐliàng","translation":"to be understanding","example":"请体谅我的难处。"},
    {"term":"辜负","romanization":"gūfù","translation":"to let down","example":"我不想辜负你的期望。"},
    {"term":"脱口而出","romanization":"tuō kǒu ér chū","translation":"to blurt out","example":"这句话他脱口而出。"},
    {"term":"忽略","romanization":"hūlüè","translation":"to overlook","example":"别忽略这些细节。"},
    {"term":"忽视","romanization":"hūshì","translation":"to neglect","example":"不要忽视自己的健康。"},
    {"term":"滔滔不绝","romanization":"tāo tāo bù jué","translation":"to talk nonstop","example":"她一说起旅行就滔滔不绝。"},
    {"term":"回避","romanization":"huíbì","translation":"to dodge","example":"他总是回避这个问题。"},
    {"term":"逃避","romanization":"táobì","translation":"to run away from","example":"逃避解决不了问题。"},
    {"term":"默默无闻","romanization":"mò mò wú wén","translation":"unknown, unsung","example":"他默默无闻地工作了多年。"},
    {"term":"承担","romanization":"chéngdān","translation":"to bear, to take on","example":"我愿意承担责任。"},
    {"term":"克服","romanization":"kèfú","translation":"to overcome","example":"我们克服了很多困难。"},
    {"term":"名不虚传","romanization":"míng bù xū chuán","translation":"lives up to its name","example":"这家店果然名不虚传。"},
    {"term":"坚守","romanization":"jiānshǒu","translation":"to hold firm","example":"他坚守自己的原则。"},
    {"term":"挽回","romanization":"wǎnhuí","translation":"to win back","example":"一切都无法挽回了。"},
    {"term":"人山人海","romanization":"rén shān rén hǎi","translation":"a sea of people","example":"广场上人山人海。"},
    {"term":"弥补","romanization":"míbǔ","translation":"to make up for","example":"我想弥补我的过错。"},
    {"term":"惦记","romanization":"diànjì","translation":"to keep thinking of","example":"妈妈总是惦记着我。"},
    {"term":"五颜六色","romanization":"wǔ yán liù sè","translation":"colorful","example":"花园里开满了五颜六色的花。"},
    {"term":"牵挂","romanization":"qiānguà","translation":"to worry about","example":"父母一直牵挂着你。"},
    {"term":"盼望","romanization":"pànwàng","translation":"to long for","example":"孩子们盼望着过年。"},
    {"term":"千变万化","romanization":"qiān biàn wàn huà","translation":"ever-changing","example":"天上的云千变万化。"},
    {"term":"感激","romanization":"gǎnjī","translation":"grateful","example":"我非常感激你的帮助。"},
    {"term":"赞叹","romanization":"zàntàn","translation":"to marvel at","example":"大家都赞叹不已。"},
    {"term":"一成不变","romanization":"yī chéng bù biàn","translation":"unchanging","example":"生活不能一成不变。"},
    {"term":"夸奖","romanization":"kuājiǎng","translation":"to praise","example":"老师夸奖了他。"},
    {"term":"责怪","romanization":"zéguài","translation":"to blame","example":"别责怪自己了。"},
    {"term":"日新月异","romanization":"rì xīn yuè yì","translation":"changing by the day","example":"科技发展日新月异。"},
    {"term":"讽刺","romanization":"fěngcì","translation":"irony, to mock","example":"这真是一种讽刺。"},
    {"term":"炫耀","romanization":"xuànyào","translation":"to show off","example":"他喜欢炫耀新车。"},
    {"term":"与众不同","romanization":"yǔ zhòng bù tóng","translation":"out of the ordinary","example":"她的风格与众不同。"},
    {"term":"吹牛","romanization":"chuīniú","translation":"to brag","example":"别听他吹牛。"},
    {"term":"撒谎","romanization":"sāhuǎng","translation":"to lie","example":"小孩子不要撒谎。"},
    {"term":"各有千秋","romanization":"gè yǒu qiān qiū","translation":"each has its merits","example":"这两家餐厅各有千秋。"},
    {"term":"隐瞒","romanization":"yǐnmán","translation":"to hide, to conceal","example":"你不该隐瞒真相。"},
    {"term":"揭穿","romanization":"jiēchuān","translation":"to expose","example":"他的谎言被揭穿了。"},
    {"term":"美中不足","romanization":"měi zhōng bù zú","translation":"a small flaw","example":"唯一美中不足的是太贵。"},
    {"term":"猜测","romanization":"cāicè","translation":"to guess","example":"这只是我的猜测。"},
    {"term":"推测","romanization":"tuīcè","translation":"to infer","example":"据推测他已经走了。"},
    {"term":"十全十美","romanization":"shí quán shí měi","translation":"perfect","example":"世上没有十全十美的人。"},
    {"term":"权衡","romanization":"quánhéng","translation":"to weigh up","example":"他权衡了利弊。"},
    {"term":"协商","romanization":"xiéshāng","translation":"to negotiate","example":"双方正在协商。"},
    {"term":"一败涂地","romanization":"yī bài tú dì","translation":"a crushing defeat","example":"这次比赛我们一败涂地。"},
    {"term":"妥协","romanization":"tuǒxié","translation":"to compromise","example":"我不会妥协的。"},
    {"term":"争取","romanization":"zhēngqǔ","translation":"to strive for","example":"我会争取这个机会。"},
    {"term":"东山再起","romanization":"dōng shān zài qǐ","translation":"to make a comeback","example":"他失败后又东山再起。"},
    {"term":"积累","romanization":"jīlěi","translation":"to build up","example":"经验需要慢慢积累。"},
    {"term":"培养","romanization":"péiyǎng","translation":"to cultivate","example":"要培养好习惯。"},
    {"term":"卷土重来","romanization":"juǎn tǔ chóng lái","translation":"to come back for more","example":"明年我们会卷土重来。"},
    {"term":"适应","romanization":"shìyìng","translation":"to adapt","example":"我还没适应这里的天气。"},
    {"term":"融入","romanization":"róngrù","translation":"to blend in","example":"他很快融入了新环境。"},
    {"term":"前功尽弃","romanization":"qián gōng jìn qì","translation":"all effort wasted","example":"现在放弃就前功尽弃了。"},
    {"term":"打扰","romanization":"dǎrǎo","translation":"to disturb","example":"不好意思，打扰了。"},
    {"term":"耽误","romanization":"dānwu","translation":"to hold up","example":"别耽误你的时间。"},
    {"term":"持之以恒","romanization":"chí zhī yǐ héng","translation":"to persevere","example":"学语言要持之以恒。"},
    {"term":"节省","romanization":"jiéshěng","translation":"to save","example":"这样可以节省时间。"},
    {"term":"挥霍","romanization":"huīhuò","translation":"to squander","example":"他挥霍了所有的钱。"},
    {"term":"循序渐进","romanization":"xún xù jiàn jìn","translation":"step by step","example":"学习要循序渐进。"},
    {"term":"收拾","romanization":"shōushi","translation":"to tidy up","example":"快把房间收拾一下。"},
    {"term":"打扮","romanization":"dǎban","translation":"to dress up","example":"她今天打扮得很漂亮。"},
    {"term":"水到渠成","romanization":"shuǐ dào qú chéng","translation":"it'll happen in time","example":"别着急，水到渠成。"},
    {"term":"模仿","romanization":"mófǎng","translation":"to imitate","example":"孩子喜欢模仿大人。"},
    {"term":"陪伴","romanization":"péibàn","translation":"to keep company","example":"谢谢你一直陪伴我。"},
    {"term":"顺其自然","romanization":"shùn qí zì rán","translation":"to let things be","example":"有些事要顺其自然。"},
    {"term":"安慰","romanization":"ānwèi","translation":"to comfort","example":"朋友安慰了我很久。"},
    {"term":"劝说","romanization":"quànshuō","translation":"to persuade","example":"我劝说他别去了。"},
    {"term":"随遇而安","romanization":"suí yù ér ān","translation":"to go with the flow","example":"他是个随遇而安的人。"},
    {"term":"提醒","romanization":"tíxǐng","translation":"to remind","example":"谢谢你提醒我。"},
    {"term":"嘱咐","romanization":"zhǔfù","translation":"to tell, to instruct","example":"妈妈嘱咐我早点回家。"},
    {"term":"叮嘱","romanization":"dīngzhǔ","translation":"to warn again and again","example":"医生叮嘱他多休息。"},
    {"term":"知足常乐","romanization":"zhī zú cháng lè","translation":"contentment brings joy","example":"知足常乐是我的态度。"},
    {"term":"吩咐","romanization":"fēnfu","translation":"to give orders","example":"有事尽管吩咐。"},
    {"term":"凑热闹","romanization":"còurènao","translation":"to join the fun","example":"他最喜欢凑热闹。"},
    {"term":"苦尽甘来","romanization":"kǔ jìn gān lái","translation":"good times after hardship","example":"坚持下去，总会苦尽甘来。"},
    {"term":"走神","romanization":"zǒushén","translation":"to zone out","example":"上课的时候我走神了。"},
    {"term":"发呆","romanization":"fādāi","translation":"to space out","example":"他坐在窗边发呆。"},
    {"term":"同甘共苦","romanization":"tóng gān gòng kǔ","translation":"through thick and thin","example":"我们是同甘共苦的朋友。"},
    {"term":"发愁","romanization":"fāchóu","translation":"to fret","example":"别为这点小事发愁。"},
    {"term":"叹气","romanization":"tànqì","translation":"to sigh","example":"他一直在叹气。"},
    {"term":"雪中送炭","romanization":"xuě zhōng sòng tàn","translation":"help when it counts","example":"谢谢你雪中送炭。"},
    {"term":"吵架","romanization":"chǎojià","translation":"to quarrel","example":"他们昨天又吵架了。"},
    {"term":"和好","romanization":"héhǎo","translation":"to make up","example":"他们很快就和好了。"},
    {"term":"锦上添花","romanization":"jǐn shàng tiān huā","translation":"icing on the cake","example":"这条围巾真是锦上添花。"},
    {"term":"撒娇","romanization":"sājiāo","translation":"to act cute","example":"她喜欢跟爸爸撒娇。"},
    {"term":"害羞","romanization":"hàixiū","translation":"bashful","example":"她一说话就害羞。"},
    {"term":"举手之劳","romanization":"jǔ shǒu zhī láo","translation":"no trouble at all","example":"不用谢，举手之劳。"},
    {"term":"生闷气","romanization":"shēngmènqì","translation":"to sulk","example":"他一个人在生闷气。"},
    {"term":"闹别扭","romanization":"nàobièniu","translation":"to be at odds","example":"他们俩在闹别扭。"},
    {"term":"力不从心","romanization":"lì bù cóng xīn","translation":"willing but unable","example":"年纪大了，力不从心。"},
    {"term":"糊涂","romanization":"hútu","translation":"muddled","example":"我一时糊涂做错了。"},
    {"term":"马虎","romanization":"mǎhu","translation":"sloppy","example":"做事不能马虎。"},
    {"term":"情有可原","romanization":"qíng yǒu kě yuán","translation":"understandable","example":"他迟到情有可原。"},
    {"term":"别扭","romanization":"bièniu","translation":"awkward, uneasy","example":"穿新鞋走路很别扭。"},
    {"term":"憋屈","romanization":"biēqu","translation":"stifled, frustrated","example":"这份工作让我很憋屈。"},
    {"term":"将心比心","romanization":"jiāng xīn bǐ xīn","translation":"to empathize","example":"将心比心，你会懂我的。"},
    {"term":"窝囊","romanization":"wōnang","translation":"spineless","example":"我觉得自己很窝囊。"},
    {"term":"舒坦","romanization":"shūtan","translation":"at ease","example":"洗完澡真舒坦。"},
    {"term":"设身处地","romanization":"shè shēn chǔ dì","translation":"in someone else's shoes","example":"请设身处地为我想想。"},
    {"term":"惬意","romanization":"qièyì","translation":"cozy, content","example":"周末躺着看书很惬意。"},
    {"term":"悠闲","romanization":"yōuxián","translation":"leisurely","example":"老人过着悠闲的生活。"},
    {"term":"实事求是","romanization":"shí shì qiú shì","translation":"to stick to the facts","example":"做事要实事求是。"},
    {"term":"忙碌","romanization":"mánglù","translation":"busy","example":"他每天都很忙碌。"},
    {"term":"疲惫","romanization":"píbèi","translation":"exhausted","example":"下班后我很疲惫。"},
    {"term":"脚踏实地","romanization":"jiǎo tà shí dì","translation":"down to earth","example":"他做事很脚踏实地。"},
    {"term":"狼狈","romanization":"lángbèi","translation":"in a sorry state","example":"被雨淋得很狼狈。"},
    {"term":"荒唐","romanization":"huāngtáng","translation":"absurd","example":"这个想法太荒唐了。"},
    {"term":"好高骛远","romanization":"hào gāo wù yuǎn","translation":"to aim too high","example":"年轻人不要好高骛远。"},
    {"term":"离谱","romanization":"lípǔ","translation":"outrageous","example":"这个价格太离谱了。"},
    {"term":"夸张","romanization":"kuāzhāng","translation":"exaggerated","example":"你说得太夸张了。"},
    {"term":"眼高手低","romanization":"yǎn gāo shǒu dī","translation":"big ideas, little skill","example":"他有点眼高手低。"},
    {"term":"微妙","romanization":"wēimiào","translation":"subtle, delicate","example":"他们的关系很微妙。"},
    {"term":"朴素","romanization":"pǔsù","translation":"plain, simple","example":"她穿得很朴素。"},
    {"term":"一知半解","romanization":"yī zhī bàn jiě","translation":"a shallow understanding","example":"我对历史一知半解。"},
    {"term":"精致","romanization":"jīngzhì","translation":"exquisite","example":"这个蛋糕很精致。"},
    {"term":"热闹","romanization":"rènao","translation":"lively","example":"过年的时候很热闹。"},
    {"term":"聚精会神","romanization":"jù jīng huì shén","translation":"fully focused","example":"学生们聚精会神地听课。"},
    {"term":"冷清","romanization":"lěngqing","translation":"deserted","example":"晚上街上很冷清。"},
    {"term":"拥挤","romanization":"yōngjǐ","translation":"crowded","example":"地铁里非常拥挤。"},
    {"term":"兴高采烈","romanization":"xìng gāo cǎi liè","translation":"in high spirits","example":"孩子们兴高采烈地出发了。"},
    {"term":"宽敞","romanization":"kuānchang","translation":"spacious","example":"新房子很宽敞。"},
    {"term":"偏僻","romanization":"piānpì","translation":"remote","example":"他住在偏僻的山村。"},
    {"term":"垂头丧气","romanization":"chuí tóu sàng qì","translation":"crestfallen","example":"他垂头丧气地回家了。"},
    {"term":"陌生","romanization":"mòshēng","translation":"unfamiliar","example":"这里对我来说很陌生。"},
    {"term":"难得","romanization":"nándé","translation":"rare, hard to come by","example":"这是难得的机会。"},
    {"term":"闷闷不乐","romanization":"mèn mèn bù lè","translation":"in low spirits","example":"她这几天闷闷不乐。"},
    {"term":"稀奇","romanization":"xīqí","translation":"unusual","example":"这没什么稀奇的。"},
    {"term":"罕见","romanization":"hǎnjiàn","translation":"rarely seen","example":"这种病很罕见。"},
    {"term":"心满意足","romanization":"xīn mǎn yì zú","translation":"fully satisfied","example":"吃完饭他心满意足。"},
    {"term":"普遍","romanization":"pǔbiàn","translation":"widespread","example":"这种现象很普遍。"},
    {"term":"显然","romanization":"xiǎnrán","translation":"obviously","example":"他显然没听懂。"},
    {"term":"喜出望外","romanization":"xǐ chū wàng wài","translation":"overjoyed","example":"收到礼物她喜出望外。"},
    {"term":"模糊","romanization":"móhu","translation":"blurry","example":"照片有点模糊。"},
    {"term":"清醒","romanization":"qīngxǐng","translation":"clear-headed","example":"喝了咖啡我很清醒。"},
    {"term":"忍俊不禁","romanization":"rěn jùn bù jīn","translation":"can't help laughing","example":"他的样子让人忍俊不禁。"},
    {"term":"坦白","romanization":"tǎnbái","translation":"to confess","example":"我向她坦白了一切。"},
    {"term":"坦然","romanization":"tǎnrán","translation":"calm, at peace","example":"他坦然接受了结果。"},
    {"term":"依依不舍","romanization":"yī yī bù shě","translation":"reluctant to part","example":"分别时大家依依不舍。"},
    {"term":"淡定","romanization":"dàndìng","translation":"unfazed","example":"遇到问题要淡定。"},
    {"term":"慌张","romanization":"huāngzhāng","translation":"flustered","example":"他慌张地跑了出去。"},
    {"term":"归心似箭","romanization":"guī xīn sì jiàn","translation":"eager to get home","example":"快过年了，我归心似箭。"},
]

const papers = ["#8FD9EC", "#FF3B57", "#7CFFB0", "#B57BFF", "#E8FF5A", "#2F86FF", "#FFB3CB"]
const ink = new Color("#14110F")

function addRule(stack) {
    const rule = stack.addStack()
    rule.size = new Size(0, 1)
    rule.backgroundColor = ink
    rule.addSpacer()
}

const WIDGET_SIZES = {
    430: [364, 170],
    428: [364, 170],
    414: [360, 169],
    402: [348, 164],
    393: [338, 158],
    390: [338, 158],
    375: [329, 155],
}

function widgetSize() {
    const screen = Math.round(Device.screenSize().width)
    if (WIDGET_SIZES[screen]) return WIDGET_SIZES[screen]
    const scale = screen / 390
    return [Math.round(338 * scale), Math.round(158 * scale)]
}

const [WIDGET_WIDTH, WIDGET_HEIGHT] = widgetSize()
const COLUMN_WIDTH = WIDGET_WIDTH - 32
const WORD_AREA = WIDGET_HEIGHT - 24 - 4 - 47 - 12
const ADVANCE = 1.0
const INK = 0.9

const start = new Date(2026, 10, 24)
const today = new Date()
today.setHours(0, 0, 0, 0)
const dayNumber = Math.round((today - start) / 86400000)

const word = words[dayNumber % words.length]
const paper = papers[today.getDay()]

const widget = new ListWidget()
widget.backgroundColor = new Color(paper)

const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const day = today.getDay()

const files = FileManager.local()
const folder = files.joinPath(files.documentsDirectory(), "vocab-backgrounds")
if (!files.fileExists(folder)) files.createDirectory(folder)
const imageName = `background-${day}-${dayNames[day]}.png`
const path = files.joinPath(folder, imageName)
if (!files.fileExists(path)) {
    try {
        const image = await new Request(`https://raw.githubusercontent.com/ericakwakk/vocab-widget/main/backgrounds/${imageName}`).loadImage()
        files.writeImage(path, image)
    } catch (error) {
        // No internet yet: show the plain paper color today and try again tomorrow.
    }
}
if (files.fileExists(path)) widget.backgroundImage = files.readImage(path)

widget.setPadding(12, 16, 12, 16)

widget.spacing = 0

addRule(widget)
widget.addSpacer()

const syllables = [...word.term].length
const wordSize = Math.min(COLUMN_WIDTH / (syllables * ADVANCE), WORD_AREA / 1.25)

const nudge = wordSize * 0
widget.addSpacer(nudge * 2)

const wordBox = widget.addStack()
wordBox.size = new Size(COLUMN_WIDTH, WORD_AREA - nudge * 2)
wordBox.centerAlignContent()

const term = wordBox.addText(word.term)
term.font = new Font("PingFangSC-Semibold", wordSize)
term.textColor = ink
term.lineLimit = 1

wordBox.addSpacer()

widget.addSpacer()
addRule(widget)

const caption = widget.addStack()
caption.setPadding(3, 0, 3, 0)

const romanization = caption.addText(word.romanization)
romanization.font = new Font("HelveticaNeue-Bold", 13)
romanization.textColor = ink

caption.addSpacer()

const translation = caption.addText(word.translation)
translation.font = new Font("HelveticaNeue", 13)
translation.textColor = ink

addRule(widget)

const exampleRow = widget.addStack()
exampleRow.setPadding(3, 0, 3, 0)

const example = exampleRow.addText(word.example)
example.font = new Font("PingFangSC-Regular", 13)
example.textColor = ink
example.lineLimit = 1

addRule(widget)

if (config.runsInApp) {
    await widget.presentMedium()
}

const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
widget.refreshAfterDate = tomorrow

Script.setWidget(widget)
Script.complete()