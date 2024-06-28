// ==UserScript==
// @name         一乐编辑器命运卡高级编辑扩展
// @namespace    npm/vite-plugin-monkey
// @version      2.0.6
// @author       rxdey
// @description  命运卡/暗金高级编辑预览
// @license      MIT
// @icon         https://edit.filtereditor.cn/favicon.ico
// @match        https://edit.filtereditor.cn/*
// @match        https://price.filtereditor.cn/*
// @require      https://cdn.bootcdn.net/ajax/libs/vue/3.4.4/vue.global.prod.min.js
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-start
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const o=document.createElement("style");o.textContent=e,document.head.append(o)})(' .divination-card[data-v-ebb54801]{--txt-color: #fff;--card-width: 180px;--card-height: calc(var(--card-width) / 440 * 670);font-size:12px;color:var(--txt-color);text-align:center;display:inline-block;width:var(--card-width);height:var(--card-height);position:relative;overflow:hidden;cursor:pointer;line-height:1}.divination-card--background[data-v-ebb54801]{position:absolute;top:8%;left:4%;z-index:1;width:90%;overflow:hidden}.divination-card--background img[data-v-ebb54801]{width:100%;object-fit:contain}.divination-card__exmod[data-v-ebb54801]{width:100%;height:100%;background-image:url(https://poecdn.game.qq.com/protected/image/item/popup/divination-card.png?v=1713750437430&key=FeT51JhtvdZwH-iROFE-CA);background-repeat:no-repeat;background-position:center;background-size:cover;position:absolute;top:0;left:0;z-index:2}.divination-card__exmod.disabled[data-v-ebb54801]{filter:brightness(.4)}.divination-card--name[data-v-ebb54801]{color:#111;font-weight:800;position:absolute;width:100%;top:2.9%;font-size:13px}.divination-card--stack[data-v-ebb54801]{position:absolute;top:47.5%;left:8%;font-size:80%;color:#c8c8c8;text-align:center;min-width:17%;transform:scale(.8)}.divination-card--stack.single[data-v-ebb54801]{color:#00bafe}.divination-card--wrap[data-v-ebb54801]{position:absolute;top:49%;left:0;bottom:0;right:0;font-size:109%;display:flex;flex-direction:column;transform:scale(.9)}.divination-card--line[data-v-ebb54801]{width:70%;background:url(data:image/webp;base64,UklGRvgBAABXRUJQVlA4IOwBAADwCwCdASoCAQQAPmUmjkWhoqIitpqrMIAMiWkA0JW+9ohbg3wONHHO2hWE+EZ3lcxPjAzpf5YdP7nUdGxoW/0ve42n0S1KbDYneakrOTFwunEr1C/VdrPGG/8G+9uM8OHcTjfvxu6qAAD++qDUzYUYStwr0qga4Q9GikbOaphkTdftbRXFk3dtQDAZL61gqoreKdI5KbcowsLTKQVQhFJzeuhIPiTBuShrcx5E9Q2ZpYzwXaCtHpzTibwo2vk4ieVHmtFuAVXFbDQLAPOqk6qK+8w2LXI9mQn8w/Ltfi/isVOuC+g2Q8eO8bebbooA+Zqs2r//6/13ZFhuK56wcGbATjlGfoO6N1K+BUnNddT0ac4Z8h+3nsu7e+iPparpOw9Dl8bNPcLMAy3v8LEeJijm8x/R5wMT6/vMh+LHiqS95t6VARBQrm/QwLrWBY42dyRO0gnqWQT5Kq2wqDgTwigtuoNbNw/dMeLZ+IByQrKHetqW2F7VZv63bz47qftPirH84flMSvGOa1YJvBy9K+SFLaxwvGp4t74koNwFx2AcHT/mepDZAGtCdA9Bmyv7+YMQTI+KmM5RjuvKvc1bhoLcZtShvFD/0iI5wukZlAooI3FDImliYp0AWoSbO1bmQXdUeaMvWCt6M0YAAAA=) no-repeat center;background-size:contain;height:3px;margin:0 auto;flex:0 0 3px}.divination-card--reward[data-v-ebb54801]{min-height:55px;display:flex;flex-flow:column;align-items:center;justify-content:center;line-height:1.3;transform:scale(.9)}.divination-card--flavour[data-v-ebb54801]{width:115%;margin-left:-7.5%;margin-top:-4%;white-space:pre-wrap;color:var(--color-uniqueitem);flex:1 1 auto;display:flex;flex-flow:column;align-items:center;justify-content:center;line-height:1.2;font-style:italic;transform:scale(.85);font-size:11px}.price[data-v-ebb54801]{background-color:#000000b3;padding:5px 10px;text-align:center;line-height:1.3;margin-top:-10px;margin-left:auto;margin-right:auto;color:var(--color-currencyitem);font-size:12px;display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;text-decoration:underline}.price .chaos[data-v-ebb54801]{content:"";background:url(https://poe.game.qq.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwic2NhbGUiOjF9XQ/46a2347805/CurrencyRerollRare.png) no-repeat center;background-size:contain;width:18px;height:18px}.unique-item[data-v-5f4b4871]{background-color:#48484e;padding:0 8px;color:#ffffffd1;max-height:400px;overflow-y:auto;box-shadow:0 0 16px #00000080}.unique-cell[data-v-5f4b4871]{display:flex;flex-flow:row nowrap;font-size:14px;align-items:center;padding:8px 12px;border-bottom:1px solid #58585e}.unique-cell[data-v-5f4b4871]:last-child{border:none}.unique-cell__icon[data-v-5f4b4871]{width:32px;height:32px}.unique-cell__body[data-v-5f4b4871]{flex:1;padding:0 16px}.unique-cell__body .name[data-v-5f4b4871]{line-height:1.2}.unique-cell__body .name a[data-v-5f4b4871]{text-decoration:underline}.unique-cell__body .limit[data-v-5f4b4871]{white-space:pre-wrap;color:var(--color-default);font-size:12px;line-height:1.2}.unique-cell__price[data-v-5f4b4871]{text-align:right;color:var(--color-currencyitem)}.unique-cell img[data-v-5f4b4871]{width:100%;height:100%;object-fit:contain}.hover-wrap[data-v-c47f1024]{position:fixed;top:0;left:0;z-index:10000}#d-radio[data-v-6967c72b]{position:absolute;bottom:-20px;left:0;display:flex;flex-flow:row;font-size:11px;align-items:center}.radio[data-v-6967c72b]{display:flex;flex-flow:row wrap;gap:4px}.radio-item[data-v-6967c72b]{min-width:48px;padding:4px 8px;font-size:12px;line-height:1;cursor:pointer;background-color:#3f4448;border-radius:100px;color:#dcddde;text-align:center;border:1px solid #3f4448}.radio-item[data-v-6967c72b].active[data-v-6967c72b]{background-color:#e8808033;color:#e88080;border-color:#e88080}.hover-span[data-v-931720c3]{cursor:pointer}:root{--color-uniqueitem: #af6025;--color-gemitem: #1ba29b;--color-currencyitem: #aa9e82;--color-rareitem: #ffff77;--color-whiteitem: #c8c8c8;--color-corrupted: #d20000;--color-magicitem: #8888ff;--color-default: #7f7f7f;--color-augmented: #8888ff;--color-enchanted: #b8daf2;--color-divination: #0ebaff;--color-fractured: #a29162;--color-normal: #c8c8c8}.uniqueitem{color:var(--color-uniqueitem)}.gemitem{color:var(--color-gemitem)}.currencyitem{color:var(--color-currencyitem)}.rareitem{color:var(--color-rareitem)}.whiteitem{color:var(--color-whiteitem)}.corrupted{color:var(--color-corrupted)}.magicitem{color:var(--color-magicitem)}.default{color:var(--color-default)}.augmented{color:var(--color-augmented)}.enchanted{color:var(--color-enchanted)}.divination{color:var(--color-divination)}.fractured{color:var(--color-fractured)}.normal{color:var(--color-normal)}.Gemitem{color:var(--color-magicitem)}.n-card>.n-card-header{padding-bottom:24px!important}.simpleitem-wrap{box-shadow:0 0 16px #00000080;background-color:#48484e;padding:4px 8px;color:#ffffffd1;border-radius:4px;font-size:14px;line-height:1.2} ');

(function (vue) {
  'use strict';

  const getModalPosition = (el, ract) => {
    var _a;
    const card = (_a = document.querySelector(ract)) == null ? void 0 : _a.getBoundingClientRect();
    if (!card)
      return { x: 0, y: 0 };
    const { top, left, width, height } = el.getBoundingClientRect();
    const positionAction = {
      bottom: { x: left - card.width / 2 + width / 2, y: top + height },
      top: { x: left - card.width / 2 + width / 2, y: top - card.height }
    };
    if (top + height < card.height)
      return positionAction.bottom;
    return positionAction.top;
  };
  const CARD_POOL = [
    {
      name: "疯医",
      href: "https://poedb.tw/cn/The_Doctor",
      type: "The Doctor",
      explicitMod: '<span class="uniqueitem">猎首</span>',
      flavourText: '"大家说我脑袋有问题，需要检查一下，但我比较想先砍下你的脑袋检查。"- 食人族克洛培克',
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheDoctor.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "好运连连",
      href: "https://poedb.tw/cn/Lucky_Connections",
      type: "Lucky Connections",
      explicitMod: '<span class="currencyitem">20 X 链结石</span>',
      flavourText: "会赌运气的都是蠢才，而我就认识不少有钱的蠢材。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/LuckyConnections.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "创痕之原",
      href: "https://poedb.tw/cn/The_Scarred_Meadow",
      type: "The Scarred Meadow",
      explicitMod: '<span class="uniqueitem">覆灭之兆</span>',
      flavourText: "大地让万物滋养茁壮，休养生息，除非上天另有安排。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheScarredMeadow.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "食腐掠鸦",
      href: "https://poedb.tw/cn/The_Carrion_Crow",
      type: "The Carrion Crow",
      explicitMod: '<span class="magicitem">附有生命词缀的护具</span>',
      flavourText: "从生到死。\n由死至生。\n轮轴转动，\n乌鸦盘旋。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheCarrionCrow.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "赌徒",
      href: "https://poedb.tw/cn/The_Gambler",
      type: "The Gambler",
      explicitMod: '<span class="divination">命运卡</span>',
      flavourText: '"我不相信报应。若真有报应，恶人如我绝不可能获胜。"',
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheGambler.png",
      Tags: "gives_other_cards_divination, divination_card"
    },
    {
      name: "学者",
      href: "https://poedb.tw/cn/The_Scholar",
      type: "The Scholar",
      explicitMod: '<span class="currencyitem">知识卷轴 X 40</span>',
      flavourText: "至微话语蕴含至伟真理。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheScholar.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "珠宝匠",
      href: "https://poedb.tw/cn/The_Gemcutter",
      type: "The Gemcutter",
      explicitMod: '<span class="currencyitem">珠宝匠的棱镜</span>',
      flavourText: "经过工匠大师巧手，区区卵石也可成为皇冠饰物。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheGemcutter.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "兰塔朵迷惘之爱",
      href: "https://poedb.tw/cn/Lantadors_Lost_Love",
      type: "Lantadors Lost Love",
      explicitMod: '<span class="rareitem">双玉戒指</span>',
      flavourText: "他们合而为一抵抗最强大的暴风，直到最漫长的日子结束。\n随着每一次的呼吸气息，他们的爱情变得更加深厚，\n直到死亡将他们分离。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/LantadorsLostLove.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "浑沌性情",
      href: "https://poedb.tw/cn/Chaotic_Disposition",
      type: "Chaotic Disposition",
      explicitMod: '<span class="currencyitem"> 5 X 混沌石</span>',
      flavourText: "你无从开创人生，一切早有定数。",
      stack: 1,
      icon: "https://poe.game.qq.com/image/divination-card/ChaoticDisposition.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "凝视者",
      href: "https://poedb.tw/cn/The_Watcher",
      type: "The Watcher",
      explicitMod: '<span class="uniqueitem">邪眼之冠</span>',
      flavourText: "冠刺顶端的诡异眼球\n看穿时空迷蒙\n矿场的地底深处尚有\n绯红的尘封之梦",
      stack: 12,
      icon: "https://poe.game.qq.com/image/divination-card/TheWatcher.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "隐士",
      href: "https://poedb.tw/cn/The_Hermit",
      type: "The Hermit",
      explicitMod: '<span class="uniqueitem">生机之记</span>',
      flavourText: "隐士独立于世，唯有绿枝青叶相伴。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheHermit.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "弃财求生",
      href: "https://poedb.tw/cn/Abandoned_Wealth",
      type: "Abandoned Wealth",
      explicitMod: '<span class="currencyitem">3 X 崇高石</span>',
      flavourText: "全世界熊熊焚烧，贪婪之徒葬身火海，幸存的灵巧之辈落魄潦倒。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/AbandonedWealth.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "群聚之首",
      href: "https://poedb.tw/cn/The_Pack_Leader",
      type: "The Pack Leader",
      explicitMod: '<span class="uniqueitem">极地之眼</span>',
      flavourText: "你生来就是领袖，呼应天命吧。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/ThePackLeader.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "薇妮雅的信物",
      href: "https://poedb.tw/cn/Vinias_Token",
      type: "Vinias Token",
      explicitMod: '<span class="currencyitem">后悔石 X 10</span>',
      flavourText: "人名能更替修改，人生却无法重来。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/ViniasToken.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "宝箱",
      href: "https://poedb.tw/cn/The_Hoarder",
      type: "The Hoarder",
      explicitMod: '<span class="currencyitem">崇高石</span>',
      flavourText: '"还不够！ 我想要更多！ "- 贪得无厌的范德利斯',
      stack: 12,
      icon: "https://poe.game.qq.com/image/divination-card/TheHoarder.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "召唤师",
      href: "https://poedb.tw/cn/The_Summoner",
      type: "The Summoner",
      explicitMod: '<span class="gemitem">召唤生物宝石</span><br/><span class="default">品质：</span> <span class="augmented">+20%</span>',
      flavourText: "为驾驭恶梦之力，你必须先成为恶梦。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheSummoner.png",
      Tags: "gems_divination, gems_quality_divination, divination_card"
    },
    {
      name: "天堂执法官",
      href: "https://poedb.tw/cn/The_Celestial_Justicar",
      type: "The Celestial Justicar",
      explicitMod: '<span class="whiteitem">六连星芒战铠</span>',
      flavourText: "她有天庭荣光护体，为阵亡将士伸张正义。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheCelestialJusticar.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "枯骨皇帝",
      href: "https://poedb.tw/cn/The_Brittle_Emperor",
      type: "The Brittle Emperor",
      explicitMod: '<span class="uniqueitem">福尔的忠诚之符</span><br/><span class="corrupted">已腐化</span>',
      flavourText: '"当福尔饶恕玛拉凯，让他协助进行【净化】，最坚定的信念便已遭受腐化，变得如玻璃般易碎。"- 人民诗人维多',
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheBrittleEmperor.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "失落遗骨",
      href: "https://poedb.tw/cn/Time-Lost_Relic",
      type: "Time-Lost Relic",
      explicitMod: '<span class="uniqueitem">赛季限定物品</span>',
      flavourText: "若为无从忘怀之事，谅时间也无从冲淡。",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TimeLostRelic.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "协约",
      href: "https://poedb.tw/cn/The_Pact",
      type: "The Pact",
      explicitMod: '<span class="uniqueitem">誓约</span>',
      flavourText: '"我今日首度与这块土地与其上居民作出协议。"',
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/ThePact.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, boss_drop_card, divination_card"
    },
    {
      name: "饥渴之占",
      href: "https://poedb.tw/cn/Coveted_Possession",
      type: "Coveted Possession",
      explicitMod: '<span class="currencyitem">5 X 富豪石</span>',
      flavourText: "一尝权力滋味，对其更加饥渴。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/CovetedPossession.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "典狱长",
      href: "https://poedb.tw/cn/The_Warden",
      type: "The Warden",
      explicitMod: '<span class="rareitem">项链</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "布鲁特斯身为典狱长的头号创举，就是在所有囚犯颈部缠上沉重铁链，这样囚犯无时无刻都会向他低头鞠躬。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheWarden.png",
      Tags: "jewellery_divination, corrupted_divination, divination_card"
    },
    {
      name: "力量之道",
      href: "https://poedb.tw/cn/The_Road_to_Power",
      type: "The Road to Power",
      explicitMod: '<span class="magicitem">密文单手武器</span><br/><span class="default">物品等级:</span> <span class="normal">100</span>',
      flavourText: "海天一线处，强光乍现，或为指引方向，或为发声呼救，或为警告勿回。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheRoadToPower.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "联姻",
      href: "https://poedb.tw/cn/The_Union",
      type: "The Union",
      explicitMod: '<span class="currencyitem">10 X 珠宝匠的棱镜</span>',
      flavourText: "恒历二十一日，\n两人合而为一，\n屋中灯光明耀，\n更胜落日余晖。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheUnion.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "宝石匠的允诺",
      href: "https://poedb.tw/cn/Gemcutters_Promise",
      type: "Gemcutters Promise",
      explicitMod: '<span class="gemitem">宝石</span><br/><span class="default">品质：</span> <span class="augmented">+20%</span>',
      flavourText: "【我发誓将以敝职助人。有能力之人若只是让权贵更加强大，那能力有何意义?】-帝国珠宝匠伊拉斯玛斯",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/GemcuttersPromise.png",
      Tags: "gems_divination, gems_quality_divination, divination_card"
    },
    {
      name: "混沌之雨",
      href: "https://poedb.tw/cn/Rain_of_Chaos",
      type: "Rain of Chaos",
      explicitMod: '<span class="currencyitem">混沌石</span>',
      flavourText: "当夜烈焰弥天，一片混乱\n碎片掉落之处，全数毁灭殆尽\n-乔森卡西吉，重述巨变的都市传奇",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/RainOfChaos.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "复仇者",
      href: "https://poedb.tw/cn/The_Avenger",
      type: "The Avenger",
      explicitMod: '<span class="uniqueitem">沉默之雷</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "正义迅得伸张\n新罪接踵而至\n复仇雪恨，如获至宝\n以命偿命，以眼还眼",
      stack: 12,
      icon: "https://poe.game.qq.com/image/divination-card/TheAvenger.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "巨变",
      href: "https://poedb.tw/cn/The_Cataclysm",
      type: "The Cataclysm",
      explicitMod: '<span class="gemitem">等级 21 法术宝石</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "强大战士刀剑相击，敏捷弓手箭海交射，为世人带来浩劫的却是无耻的奇术师。",
      stack: 13,
      icon: "https://poe.game.qq.com/image/divination-card/TheCataclysm.png",
      Tags: "gems_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "黑暗术者",
      href: "https://poedb.tw/cn/The_Dark_Mage",
      type: "The Dark Mage",
      explicitMod: '<span class="whiteitem">六连长杖</span><br/><span class="default">物品等级:</span> <span class="normal">55</span>',
      flavourText: "法杖在手\n怒火在心，\n灵魂身躯\n分离注定。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheDarkMage.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "铁匠的赠礼",
      href: "https://poedb.tw/cn/The_Metalsmiths_Gift",
      type: "The Metalsmiths Gift",
      explicitMod: '<span class="whiteitem">三相戒指</span>',
      flavourText: "仅需一月走险，得抵终年薪资。他走上快捷方式，穿越恐喙鸟巢穴，实在愚蠢至极。最后徒留准新娘哀悼，未婚夫的贵礼从未送到。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheMetalsmithsGift.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "希望",
      href: "https://poedb.tw/cn/Hope",
      type: "Hope",
      explicitMod: '<span class="uniqueitem">三相戒指</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "尽管他人已疯狂堕落，罗瑞依然奋战不懈。她独处黑暗之中，仍可望见希望的遥远暮光。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/Hope.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "黑暗三面",
      href: "https://poedb.tw/cn/Three_Faces_in_the_Dark",
      type: "Three Faces in the Dark",
      explicitMod: '<span class="currencyitem">混沌石 X 3</span>',
      flavourText: "威胁在即，暗中刺探，奈何总是察此疏彼。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/ThreeFacesInTheDark.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "烈日",
      href: "https://poedb.tw/cn/The_Sun",
      type: "The Sun",
      explicitMod: '<span class="uniqueitem">烈炎之翼</span>',
      flavourText: "光明夜夜死去，日日重生，以金色羽翼拥抱大地。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheSun.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "发明家",
      href: "https://poedb.tw/cn/The_Inventor",
      type: "The Inventor",
      explicitMod: '<span class="currencyitem">10 X 瓦尔宝珠</span>',
      flavourText: "立刻投身创造吧\n但请务必留意\n毁坏破损之物\n无与伦比之物。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheInventor.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "帝运",
      href: "https://poedb.tw/cn/Emperors_Luck",
      type: "Emperors Luck",
      explicitMod: '<span class="currencyitem">5 X 通货物品</span>',
      flavourText: "胜者总为王族。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/EmperorsLuck.png",
      Tags: "currency_divination, divination_card"
    },
    {
      name: "情人",
      href: "https://poedb.tw/cn/The_Lover",
      type: "The Lover",
      explicitMod: '<span class="rareitem">饰品</span><br/><span class="default">物品等级:</span> <span class="normal">79</span>',
      flavourText: '"我想送你三件事物。我已经给你无穷爱意，更以最优美的歌曲赞颂你，甚至还想把明月献给你，可惜我做不到。所以我以此代替，希望你能悦纳。"',
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/TheLover.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "酒醉贵族",
      href: "https://poedb.tw/cn/The_Drunken_Aristocrat",
      type: "The Drunken Aristocrat",
      explicitMod: '<span class="uniqueitem">宝视精华</span>',
      flavourText: "美酒酿得越是醇香，饮者越是酩酊遗忘。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheDrunkenAristocrat.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "艺者",
      href: "https://poedb.tw/cn/The_Artist",
      type: "The Artist",
      explicitMod: '<span class="gemitem">等级 4 增幅</span><br/><span class="corrupted">已腐化</span>',
      flavourText: '"颜料，金属，血肉…真正的艺术家不会限制自己使用什么素材。" - 超灵者玛拉凯',
      stack: 11,
      icon: "https://poe.game.qq.com/image/divination-card/TheArtist.png",
      Tags: "gems_divination, gems_levelled_divination, unique_corrupted_divination, divination_card"
    },
    {
      name: "斗士",
      href: "https://poedb.tw/cn/The_Gladiator",
      type: "The Gladiator",
      explicitMod: '<span class="uniqueitem">梦魇战盔</span>',
      flavourText: "当那拇指朝下\n观众狂吼轰然，\n全场渴切杀戮。\n唯你流血受难。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheGladiator.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "束缚之炼",
      href: "https://poedb.tw/cn/The_Chains_that_Bind",
      type: "The Chains that Bind",
      explicitMod: '<span class="whiteitem">六连护具</span>',
      flavourText: "无辜之人身陷囹圄，比任何罪犯入狱还要可怖。因为将来他重获自由之时，他就能名正言顺展开复仇。",
      stack: 11,
      icon: "https://poe.game.qq.com/image/divination-card/TheChainsThatBind.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "惊喜盒",
      href: "https://poedb.tw/cn/Jack_in_the_Box",
      type: "Jack in the Box",
      explicitMod: '<span class="uniqueitem">物品</span>',
      flavourText: "转动曲柄，\n闭上双眼，\n向众神默祷\n祈求愉悦惊喜。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/JackInTheBox.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "风",
      href: "https://poedb.tw/cn/The_Wind",
      type: "The Wind",
      explicitMod: '<span class="uniqueitem">裂风</span>',
      flavourText: "极速转向，飞穿裂缝，攻其破绽，低声出击，人人皆杀。箭所及处，徒留伤悲。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheWind.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "劣魔",
      href: "https://poedb.tw/cn/The_Fiend",
      type: "The Fiend",
      explicitMod: '<span class="uniqueitem">猎首</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "现今你称霸为王，\n你的力量丝毫未减，\n但我们即将见识到，\n谁才是众神所眷顾之人。",
      stack: 11,
      icon: "https://poe.game.qq.com/image/divination-card/TheFiend.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "咒语",
      href: "https://poedb.tw/cn/The_Incantation",
      type: "The Incantation",
      explicitMod: '<span class="uniqueitem">冰点低语</span>',
      flavourText: "别无选择之时，最温和的耳语都能引发最强烈的风暴。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheIncantation.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "盛宴",
      href: "https://poedb.tw/cn/The_Feast",
      type: "The Feast",
      explicitMod: '<span class="uniqueitem">罗米拉的潜力之环</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "夫君的遭遇让人遗憾，他生前很讲究美食的。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheFeast.png",
      Tags: "unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "王者之心",
      href: "https://poedb.tw/cn/The_Kings_Heart",
      type: "The Kings Heart",
      explicitMod: '<span class="uniqueitem">冈姆的壮志</span>',
      flavourText: "冈姆战斧落下五百回，冈姆之心碎裂五百回，最后仅剩丧心病狂的骇人忿怒。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheKingsHeart.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "诗人",
      href: "https://poedb.tw/cn/The_Poet",
      type: "The Poet",
      explicitMod: '<span class="uniqueitem">堕落之血</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "神已遗弃此地\n维多淌泪哀泣\n腐败吞噬大地\n维多纵已泪竭，仍泣血不止。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/ThePoet.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "女王",
      href: "https://poedb.tw/cn/The_Queen",
      type: "The Queen",
      explicitMod: '<span class="uniqueitem">阿兹里的捷思</span>',
      flavourText: "世间权力，尽在掌中",
      stack: 16,
      icon: "https://poe.game.qq.com/image/divination-card/TheQueen.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "饥饿",
      href: "https://poedb.tw/cn/The_Hunger",
      type: "The Hunger",
      explicitMod: '<span class="uniqueitem">恨意</span>',
      flavourText: "【你夺走多少生命?】\n【你已眨眼了几回?】",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheHunger.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "三者之诞",
      href: "https://poedb.tw/cn/Birth_of_the_Three",
      type: "Birth of the Three",
      explicitMod: '<span class="uniqueitem">女神的灵缚</span>',
      flavourText: "折磨苦难，略见一斑。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/BirthOfTheThree.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "战火锻造",
      href: "https://poedb.tw/cn/The_Battle_Born",
      type: "The Battle Born",
      explicitMod: '<span class="uniqueitem">斧</span>',
      flavourText: '"凡人恶魔，皆败于我，我斧披靡，所向无敌！ "',
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheBattleBorn.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "背叛",
      href: "https://poedb.tw/cn/The_Betrayal",
      type: "The Betrayal",
      explicitMod: '<span class="uniqueitem">马雷格罗的玫红手套</span>',
      flavourText: "这是个友情需要用钱来购买的可悲时代。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheBetrayal.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "谦逊",
      href: "https://poedb.tw/cn/Humility",
      type: "Humility",
      explicitMod: '<span class="uniqueitem">无尽之衣</span>',
      flavourText: "人性的力量啊",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/Humility.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "完人",
      href: "https://poedb.tw/cn/The_One_With_All",
      type: "The One With All",
      explicitMod: '<span class="uniqueitem">英灵宝环</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "接受死亡，纪念逝者\n生无畏惧，不计代价。\n我们各为个体，\n我们全都相信，\n过往，现今与未来···正义得以伸张。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheOneWithAll.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "怨忿",
      href: "https://poedb.tw/cn/The_Wrath",
      type: "The Wrath",
      explicitMod: '<span class="currencyitem">10 X 混沌石</span>',
      flavourText: '"她是浩劫之女，苦痛之母，在瓦尔克拉斯的秽物中徘徊。她的岔怒将接踵而来。" - 重生之灵昆顿',
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheWrath.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "钱与权",
      href: "https://poedb.tw/cn/Wealth_and_Power",
      type: "Wealth and Power",
      explicitMod: '<span class="gemitem">等级 4 启蒙</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "人的伟大之处不在于他所拥有的财富，而是在于他的品性，以及他影响周围事物的能力。",
      stack: 11,
      icon: "https://poe.game.qq.com/image/divination-card/WealthAndPower.png",
      Tags: "gems_divination, gems_levelled_divination, corrupted_divination, divination_card"
    },
    {
      name: "海洋学者",
      href: "https://poedb.tw/cn/Scholar_of_the_Seas",
      type: "Scholar of the Seas",
      explicitMod: '<span class="uniqueitem">贼窝</span>',
      flavourText: "我从未上过一艘我无法指挥的船舰。然而，我却遇过不愿被带领的水手。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/ScholarOfTheSeas.png",
      Tags: "unique_divination, maps_divination, maps_unique_divination, divination_card"
    },
    {
      name: "龙之心",
      href: "https://poedb.tw/cn/The_Dragons_Heart",
      type: "The Dragons Heart",
      explicitMod: '<span class="gemitem">等级 4 赋予</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "传说当龙殒命之时，它的血肉将会溶解，只剩下一颗炽热的心脏。",
      stack: 11,
      icon: "https://poe.game.qq.com/image/divination-card/TheDragonsHeart.png",
      Tags: "gems_divination, gems_levelled_divination, corrupted_divination, divination_card"
    },
    {
      name: "狡狐",
      href: "https://poedb.tw/cn/The_Fox",
      type: "The Fox",
      explicitMod: '<span class="gemitem">等级 20 技能宝石</span>',
      flavourText: '"要在寒冷的冬天求生，你必须有像狐狸般的智慧，狡猾以及力量。"\n- 艾兹麦族方言',
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheFox.png",
      Tags: "gems_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "傀儡",
      href: "https://poedb.tw/cn/The_Doppelganger",
      type: "The Doppelganger",
      explicitMod: '<span class="gemitem">魅影射击</span><br/><span class="default">品质：</span> <span class="augmented">+20%</span>',
      flavourText: "看见他的脸我真的吓坏了－月光反射出了我真实的面貌。",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/TheDoppelganger.png",
      Tags: "gems_divination, gems_quality_divination, divination_card"
    },
    {
      name: "屹立不败之人",
      href: "https://poedb.tw/cn/The_Last_One_Standing",
      type: "The Last One Standing",
      explicitMod: '<span class="uniqueitem">阿兹里的刑刃</span>',
      flavourText: "苦难逆境者意志最坚强。伤疤最多者体魄最强健。唯一幸存者收获最丰硕。",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TheLastOneStanding.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, boss_drop_card, divination_card"
    },
    {
      name: "骄纵皇子",
      href: "https://poedb.tw/cn/The_Spoiled_Prince",
      type: "The Spoiled Prince",
      explicitMod: '<span class="magicitem">独裁者预言法杖</span><br/><span class="default">物品等级:</span> <span class="normal">100</span>',
      flavourText: "一个坐拥一切长大的孩子长大了永远不会心存感激。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheSpoiledPrince.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "死亡",
      href: "https://poedb.tw/cn/Death",
      type: "Death",
      explicitMod: '<span class="uniqueitem">凋零魔爪</span>',
      flavourText: "历史的终结\n未来的开端\n一个转变的绝佳机会\n只给那些有能力的人\n掌握在手",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/Death.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "大艺术家",
      href: "https://poedb.tw/cn/The_Aesthete",
      type: "The Aesthete",
      explicitMod: '<span class="uniqueitem">薛朗物品</span>',
      flavourText: '"一般人只把人的肉体视为障碍和界限。我则认为它是朝向伟大进化的机会。" - 黑影薛朗',
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheAesthete.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "佣兵",
      href: "https://poedb.tw/cn/The_Mercenary",
      type: "The Mercenary",
      explicitMod: '<span class="uniqueitem">盾</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "忠诚是可以被收买的。唯一需要注意的是，你必须了解买家的背景。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheMercenary.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "海妖",
      href: "https://poedb.tw/cn/The_Siren",
      type: "The Siren",
      explicitMod: '<span class="uniqueitem">冰点低语</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "唯命是从，\n海妖之手，\n寒冬肆虐，\n大地撼动，\n积冰沉重，\n能摧毁最坚强的意志。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheSiren.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "绅士之风",
      href: "https://poedb.tw/cn/The_Gentleman",
      type: "The Gentleman",
      explicitMod: '<span class="uniqueitem">剑</span><br/><span class="corrupted">已腐化</span>',
      flavourText: '"斧头和锤子?尽是些蛮人的武器… 从脖子干净利落的一刀割下脑袋，这才是萨恩的风格！ "',
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheGentleman.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "求生专家",
      href: "https://poedb.tw/cn/The_Survivalist",
      type: "The Survivalist",
      explicitMod: '<span class="currencyitem">7x 点金石</span>',
      flavourText: "一个幸运数字\n从天而降\n带领我们\n突破险境",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheSurvivalist.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "灾变",
      href: "https://poedb.tw/cn/The_Catalyst",
      type: "The Catalyst",
      explicitMod: '<span class="currencyitem">瓦尔宝珠</span>',
      flavourText: "一个微小的举动也有可能带领世界走向灭亡。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheCatalyst.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "亡灵智慧",
      href: "https://poedb.tw/cn/Grave_Knowledge",
      type: "Grave Knowledge",
      explicitMod: '<span class="gemitem">召唤愤怒狂灵</span><br/><span class="default">品质</span> <span class="augmented">+20%</span>',
      flavourText: "那些已故的人教会了我许多事。他们除了一堆坐下思考的时间外，什么都没有。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/GraveKnowledge.png",
      Tags: "gems_divination, gems_quality_divination, divination_card"
    },
    {
      name: "德瑞竞之狂",
      href: "https://poedb.tw/cn/Doedres_Madness",
      type: "Doedres Madness",
      explicitMod: '<span class="uniqueitem">德瑞物品</span>',
      flavourText: '"在我夺走你的舌头之前，闭嘴顾好你的舌头"- 暗语者德瑞',
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/DoedresMadness.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "芙劳拉的赠礼",
      href: "https://poedb.tw/cn/The_Floras_Gift",
      type: "The Floras Gift",
      explicitMod: '<span class="whiteitem">五连长杖</span><br/><span class="default">物品等级:</span> <span class="normal">66</span>',
      flavourText: "强壮勇猛，\n顺流而来，\n此地之卉，\n吾士之志。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheFlorasGift.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "骄者必败",
      href: "https://poedb.tw/cn/Pride_Before_the_Fall",
      type: "Pride Before the Fall",
      explicitMod: '<span class="uniqueitem">冈姆的壮志</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "当冈姆手刃了他仅存的族人\n他内心最深处的某些东西也跟着破碎\n从这破碎的裂隙中，开始腐败\n纯粹的黑暗，开始蔓延",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/PrideBeforeTheFall.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "忠诚",
      href: "https://poedb.tw/cn/Loyalty",
      type: "Loyalty",
      explicitMod: '<span class="currencyitem">3x 链结石</span>',
      flavourText: "因命运相系\n因选择相依",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/Loyalty.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "小丑",
      href: "https://poedb.tw/cn/The_Jester",
      type: "The Jester",
      explicitMod: '<span class="size-31"><span class="magicitem">【无情的】单手武器</span><br/><span class="default">物品等级:</span> <span class="normal">100</span></span>',
      flavourText: "因王的旨意而被召唤\n宫殿中掌声响起；\n然而，疯狂才是他们真正的王\n因此沉默不语；\n小丑阴险的短匕快如风\n王的皇冠已易主。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheJester.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "王者之刃",
      href: "https://poedb.tw/cn/The_Kings_Blade",
      type: "The Kings Blade",
      explicitMod: '<span class="size-31"><span class="magicitem">【嗜血的】永恒之剑</span><br/><span class="default">物品等级:</span> <span class="normal">66</span></span>',
      flavourText: '"要了解自己为何而战，要屡败屡战，智取更为迅捷之人，骗过更为聪慧之人，击溃更强大之人。欲得皇冠，便须如此。"- 斗剑之王德瑞索',
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheKingsBlade.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "平壤",
      href: "https://poedb.tw/cn/The_Vast",
      type: "The Vast",
      explicitMod: '<span class="uniqueitem">海妖魅曲</span>',
      flavourText: "你是否听见了那迷人的呼唤\n就在那大海的彼端\n一个深入人心\n掳获所有男人的魅曲\n而我，也已经深深陷入。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheVast.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "猎者之愿",
      href: "https://poedb.tw/cn/Hunters_Resolve",
      type: "Hunters Resolve",
      explicitMod: '<span class="uniqueitem">弓</span>',
      flavourText: "蓄势待发的，极致的圆滑\n毅然决然的，笃定的瞬间\n既是恶意，既是正义\n唯有一条，解决之道",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/HuntersResolve.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "暗影恩惠",
      href: "https://poedb.tw/cn/Assassins_Favour",
      type: "Assassins Favour",
      explicitMod: '<span class="uniqueitem">匕首</span>',
      flavourText: "当他们的双眼交会时\n黑暗的交易将同时签下\n他的命运也将同时终结",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/AssassinsFavor.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "远征",
      href: "https://poedb.tw/cn/The_Trial",
      type: "The Trial",
      explicitMod: '<span class="rareitem">地图</span><br/><span class="default">地图阶级:</span> <span class="normal">15</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "直到你提起勇气远离家乡，你才有办法远征异土。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheTrial.png",
      Tags: "maps_divination, corrupted_divination, divination_card"
    },
    {
      name: "宝石皇后的赠礼",
      href: "https://poedb.tw/cn/Gift_of_the_Gemling_Queen",
      type: "Gift of the Gemling Queen",
      explicitMod: '<span class="gemitem">等级 20 辅助宝石</span>',
      flavourText: "我们的达拉夫人\n是显示我们进步的标志\n即使是宝石，也不比她的光芒来得耀眼",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/GiftOfTheGemlingQueen.png",
      Tags: "gems_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "探险家",
      href: "https://poedb.tw/cn/The_Explorer",
      type: "The Explorer",
      explicitMod: '<span class="rareitem">地图</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "仅管手握地图，却只有在知道自己身在何处，才有用处。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheExplorer.png",
      Tags: "maps_divination, corrupted_divination, divination_card"
    },
    {
      name: "明镜",
      href: "https://poedb.tw/cn/House_of_Mirrors",
      type: "House of Mirrors",
      explicitMod: '<span class="currencyitem">卡兰德的魔镜</span>',
      flavourText: "你在镜中看见什么?",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/HouseOfMirrors.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "智慧启蒙",
      href: "https://poedb.tw/cn/The_Enlightened",
      type: "The Enlightened",
      explicitMod: '<span class="gemitem">等级 3 启蒙</span>',
      flavourText: "蜿蜒诡谲，\n毒蛇直立待发；\n头戴冠冕，\n花瓣成千绽放。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheEnlightened.png",
      Tags: "gems_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "孪生",
      href: "https://poedb.tw/cn/The_Twins",
      type: "The Twins",
      explicitMod: '<span class="magicitem">庆祝之双子战爪</span><br/><span class="default">物品等级:</span><span class="normal">83</span>',
      flavourText: "双面铜板；\n人头为友，\n反之为敌；\n双子之掷",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheTwins.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "胆识",
      href: "https://poedb.tw/cn/Audacity",
      type: "Audacity",
      explicitMod: '<span class="uniqueitem">多里亚尼之拳</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "一瞬跳电，使其亦然震动，或是短路起烟\n一道电流，使其重获生命，或是永远沉眠\n一股涌电，使其向上超越···或者悄然无息\n唯有一种方式才能得到解答",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/Audacity.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "移花接木",
      href: "https://poedb.tw/cn/The_Inoculated",
      type: "The Inoculated",
      explicitMod: '<span class="magicitem">【六翼天使的】护甲</span>',
      flavourText: "混乱散布，灾难降临。他们说没有人能得到幸免，然而我却还站在此处。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheInoculated.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "黑暗来犯",
      href: "https://poedb.tw/cn/The_Encroaching_Darkness",
      type: "The Encroaching Darkness",
      explicitMod: '<span class="uniqueitem">地图</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "无论梦想引你至何处，恶梦总是紧随其后。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheEncroachingDarkness.png",
      Tags: "unique_divination, unique_corrupted_divination, maps_unique_divination, corrupted_divination, divination_card"
    },
    {
      name: "外科医师",
      href: "https://poedb.tw/cn/The_Surgeon",
      type: "The Surgeon",
      explicitMod: '<span class="magicitem">外科医生的 药剂</span>',
      flavourText: '"他或许缺乏远见，但他的眼光确实卓越。"\n- 玛拉凯对马雷格罗评语。',
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheSurgeon.png",
      Tags: "divination_card"
    },
    {
      name: "猎人的奖赏",
      href: "https://poedb.tw/cn/Hunters_Reward",
      type: "Hunters Reward",
      explicitMod: '<span class="uniqueitem">元素之章</span>',
      flavourText: "若是要驯服野兽，你必须先使其心归顺。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/HuntersReward.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "混乱代价",
      href: "https://poedb.tw/cn/Anarchys_Price",
      type: "Anarchys Price",
      explicitMod: '<span class="uniqueitem">魔暴之痕</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "由愤怒及憎恨中出生，于混乱和痛苦中求生，在欲望与邪念中贪生，我只奢求再一次的沐浴在鲜血之中。",
      stack: 13,
      icon: "https://poe.game.qq.com/image/divination-card/AnarchysPrice.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "雷针",
      href: "https://poedb.tw/cn/The_Conduit",
      type: "The Conduit",
      explicitMod: '<span class="uniqueitem">多里亚尼之拳</span>',
      flavourText: "通往神的境界的路途，是由牺牲所引领的。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheConduit.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "巫妖",
      href: "https://poedb.tw/cn/The_Lich",
      type: "The Lich",
      explicitMod: '<span class="uniqueitem">冥约</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "当死亡的躯体复活并得以自立于世，那么这片土地就真正的陷落了。",
      stack: 12,
      icon: "https://poe.game.qq.com/image/divination-card/TheLich.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "勘查员",
      href: "https://poedb.tw/cn/The_Surveyor",
      type: "The Surveyor",
      explicitMod: '<span class="whiteitem">地图</span><br/><span class="default">地图阶级:</span> <span class="normal">14</span>',
      flavourText: "在充满血肉和悲伤的土地中，我们将不顾一切烧杀掳掠。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheSurveyor.png",
      Tags: "maps_divination, divination_card"
    },
    {
      name: "大奇术师",
      href: "https://poedb.tw/cn/The_Thaumaturgist",
      type: "The Thaumaturgist",
      explicitMod: '<span class="uniqueitem">薛朗的启示之环</span><br/><span class="corrupted">已腐化</span>',
      flavourText: '"奇术就像世上其他的技艺一样。它必须透过牺牲才能有所专精，有时候甚至是无以计数的牺牲。" - 黑影薛朗',
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheThaumaturgist.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "制箭者",
      href: "https://poedb.tw/cn/The_Fletcher",
      type: "The Fletcher",
      explicitMod: '<span class="uniqueitem">穿心</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "让这些精良箭矢成为你最强的武器。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheFletcher.png",
      Tags: "unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "最后希望",
      href: "https://poedb.tw/cn/Last_Hope",
      type: "Last Hope",
      explicitMod: '<span class="whiteitem">凡人的希望</span>',
      flavourText: "当他们的王朝开始崩坏，瓦尔民族的人民望向他们的女王。在她身上，人民看到了一线希望。在人民身上，她只见到负担。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/LastHope.png",
      Tags: "divination_card"
    },
    {
      name: "弓匠的梦想",
      href: "https://poedb.tw/cn/Bowyers_Dream",
      type: "Bowyers Dream",
      explicitMod: '<span class="whiteitem">六连先驱者之弓</span><br/><span class="default">物品等级:</span> <span class="normal">91</span>',
      flavourText: "如果这就是我的梦中世界，我盼望永不苏醒。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/BowyersDream.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "塔峰",
      href: "https://poedb.tw/cn/The_Tower",
      type: "The Tower",
      explicitMod: '<span class="uniqueitem">长杖</span>',
      flavourText: "即使使用最坚硬的石材打造了高塔，也无法使其成为永恒。立于塔顶的智慧无法被世界所启蒙。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheTower.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "不稳定的力量",
      href: "https://poedb.tw/cn/Volatile_Power",
      type: "Volatile Power",
      explicitMod: '<span class="gemitem">瓦尔宝石</span><br/><span class="default">品质：</span> <span class="augmented">+20%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "无穷的力量容易使人的心智堕落。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/VolatilePower.png",
      Tags: "gems_divination, gems_quality_divination, corrupted_divination, divination_card"
    },
    {
      name: "盲途",
      href: "https://poedb.tw/cn/Blind_Venture",
      type: "Blind Venture",
      explicitMod: '<span class="uniqueitem">戒指</span><br/><span class="corrupted">已腐化</span>',
      flavourText: '"不清楚自己货物的来源是件相当危险的事情。这就是为什么我总是亲自查验。"\n- 克雷佛，古董收藏家',
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/BlindVenture.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "狂妄",
      href: "https://poedb.tw/cn/Hubris",
      type: "Hubris",
      explicitMod: '<span class="uniqueitem">戒指</span>',
      flavourText: '"这一件吗?这个是非卖品。但我想你总有一天会从我已死亡的双手中抢走。" - 强菲·达隆托斯，戒指锻造师',
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/Hubris.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "魅魔",
      href: "https://poedb.tw/cn/The_Demoness",
      type: "The Demoness",
      explicitMod: '<span class="uniqueitem">死神之手</span>',
      flavourText: "她所经之地，必定跟随着死亡。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheDemoness.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "无情军械",
      href: "https://poedb.tw/cn/Merciless_Armament",
      type: "Merciless Armament",
      explicitMod: '<span class="size-31"><span class="magicitem">无情的 双手武器</span><br/><span class="default">物品等级:</span> <span class="normal">100</span></span>',
      flavourText: '"千回战场，\n血骨交织，\n平凡人生，\n是我无法赦免的结。"\n- 图克哈玛，战争之父',
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/MercilessArmament.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "疯狂恐喙鸟",
      href: "https://poedb.tw/cn/The_Rabid_Rhoa",
      type: "The Rabid Rhoa",
      explicitMod: '<span class="magicitem">恶意的 双子战爪</span><br/><span class="default">物品等级:</span> <span class="normal">83</span>',
      flavourText: '"实验 22A： 抽干水分的恐喙鸟会释出一种绝妙的毒素"\n- 马雷格罗',
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheRabidRhoa.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "背叛者",
      href: "https://poedb.tw/cn/The_Traitor",
      type: "The Traitor",
      explicitMod: '<span class="uniqueitem">法杖</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "有时后见习者透过不断的努力而成为大师。\n有时候是透过强大的力量。 数量越少，你分出去的就更少。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheTraitor.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "血肉之躯",
      href: "https://poedb.tw/cn/The_Body",
      type: "The Body",
      explicitMod: '<span class="uniqueitem">护甲</span>',
      flavourText: "人们说头是身体的主导，但身体中所有一切最终还是要在体内流动一轮。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheBody.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "雄狮",
      href: "https://poedb.tw/cn/The_Lion",
      type: "The Lion",
      explicitMod: '<span class="uniqueitem">狮眼 物品</span>',
      flavourText: "永恒帝国赞扬他的英勇。卡鲁族回味他的落败。而这些关于穆希尔斯·狮眼的评价也只是毫无价值的，对他昔日荣耀的哀悼。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheLion.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "空灵",
      href: "https://poedb.tw/cn/The_Ethereal",
      type: "The Ethereal",
      explicitMod: '<span class="whiteitem">六连 瓦尔法衣</span>',
      flavourText: '"很久以前，人们仰望群星，相信着它们正影响着我们。很快的，我们将会成为影响群星的人们。"\n- 多里亚尼，女王的奇术师',
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheEthereal.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "无尽之域",
      href: "https://poedb.tw/cn/Boundless_Realms",
      type: "Boundless Realms",
      explicitMod: '<span class="whiteitem">地图</span>',
      flavourText: "无尽的距离就是从我们启程到我们再次启程的距离。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/BoundlessRealms.png",
      Tags: "maps_divination, divination_card"
    },
    {
      name: "灵魂",
      href: "https://poedb.tw/cn/The_Soul",
      type: "The Soul",
      explicitMod: '<span class="uniqueitem">开膛斧</span>',
      flavourText: '"大部分人有一个就够了。但我有收藏癖。"',
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheSoul.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "极致不凡",
      href: "https://poedb.tw/cn/The_Dapper_Prodigy",
      type: "The Dapper Prodigy",
      explicitMod: '<span class="whiteitem">六连护甲</span><br/><span class="default">物品等级:</span> <span class="normal">100</span>',
      flavourText: "许多人认为谋杀是邪恶，不人道，另人作恶的罪恶。然而却也有些人视其为艺术。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheDapperProdigy.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "赏金猎手",
      href: "https://poedb.tw/cn/Treasure_Hunter",
      type: "Treasure Hunter",
      explicitMod: '<span class="uniqueitem">阿兹里的秘宝库</span><br/><span class="corrupted">已腐化</span>',
      flavourText: '"别担心，我知道我在做什么"\n- 特格的遗言',
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TreasureHunter.png",
      Tags: "unique_divination, unique_corrupted_divination, maps_divination, maps_unique_divination, corrupted_divination, divination_card"
    },
    {
      name: "宁静",
      href: "https://poedb.tw/cn/Tranquillity",
      type: "Tranquillity",
      explicitMod: '<span class="uniqueitem">魔暴之痕</span>',
      flavourText: "注意突然的宁静。它很可能是暴风来临前的征兆。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/Tranquillity.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "兴盛",
      href: "https://poedb.tw/cn/Prosperity",
      type: "Prosperity",
      explicitMod: '<span class="magicitem">普兰德斯的 金光戒指</span>',
      flavourText: "累积财富也是有代价的",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/Prosperity.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "母亲的礼物",
      href: "https://poedb.tw/cn/A_Mothers_Parting_Gift",
      type: "A Mothers Parting Gift",
      explicitMod: '<span class="uniqueitem">丰富心灵</span><br/><span class="corrupted">腐化</span>',
      flavourText: "自然是她的领域，\n爱情是她的旋律，\n亲情是她的奉献，\n知识是她曾经的赠礼。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/AMothersPartingGift.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, corrupted_divination, unique_corrupted_divination, divination_card"
    },
    {
      name: "魔符",
      href: "https://poedb.tw/cn/The_Sigil",
      type: "The Sigil",
      explicitMod: '<span class="magicitem">坚不可摧的 项链</span>',
      flavourText: "三人成行\n穿越拱门\n携手守护\n支派阴谋\n命运相斥\n揭示之剑",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheSigil.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "制图师",
      href: "https://poedb.tw/cn/The_Cartographer",
      type: "The Cartographer",
      explicitMod: '<span class="currencyitem">10 x 制图钉</span>',
      flavourText: "{孩子，你在到来前早已迷失了自己的道路。\n为了不再失去你，\n我将开辟内心之路。}",
      stack: 1,
      icon: "https://poe.game.qq.com/image/divination-card/TheMapmaker.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "狼的影子",
      href: "https://poedb.tw/cn/The_Wolfs_Shadow",
      type: "The Wolfs Shadow",
      explicitMod: '<span class="uniqueitem">海昂的狂怒</span>',
      flavourText: '"如果我死了\n你会在我身边，还有刺入你咽喉的我的利爪"',
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheWolfsShadow.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "王座",
      href: "https://poedb.tw/cn/The_Throne",
      type: "The Throne",
      explicitMod: '<span class="uniqueitem">冈姆的稳重之靴</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "王的每个步伐都是不可动摇的。",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/TheThrone.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "命运之晶",
      href: "https://poedb.tw/cn/Shard_of_Fate",
      type: "Shard of Fate",
      explicitMod: '<span class="magicitem">生机的 珠宝</span>',
      flavourText: "他们的幻想依然成谜\n他们的性命为他人而牺牲",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/ShardofFate.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "消逝之怒",
      href: "https://poedb.tw/cn/Dying_Anguish",
      type: "Dying Anguish",
      explicitMod: '<span class="Gemitem">19 级改造宝石</span><br/><span class="default">品质：</span> <span class="augmented">+19%</span>',
      flavourText: "他垂死的凝视着走过的旅程，血液缓缓流到了下巴。他看着永远不会称做家的城市，缓缓地闭起了双眼。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/DyingAnguish.png",
      Tags: "gems_divination, gems_quality_divination, divination_card"
    },
    {
      name: "蹂躏之王",
      href: "https://poedb.tw/cn/The_Devastator",
      type: "The Devastator",
      explicitMod: '<span class="uniqueitem">阿兹里的刑刃</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "只有愚蠢之人才会试着装下无尽的力量。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheDevastator.png",
      Tags: "weapon_divination, boss_drop_card, divination_card"
    },
    {
      name: "奉献",
      href: "https://poedb.tw/cn/The_Offering",
      type: "The Offering",
      explicitMod: '<span class="uniqueitem">薛朗的护身长袍</span>',
      flavourText: "内在的优美是有代价的。薛朗愿意以它人的性命换取。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheOffering.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "鼠辈",
      href: "https://poedb.tw/cn/Rats",
      type: "Rats",
      explicitMod: '<span class="uniqueitem">鼠巢</span>',
      flavourText: '那些说"越多越好"的人们肯定没见过老鼠。',
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/Rats.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "巨龙",
      href: "https://poedb.tw/cn/The_Dragon",
      type: "The Dragon",
      explicitMod: '<span class="uniqueitem">闪耀精华</span>',
      flavourText: "天空中布满鳞片的野兽\n用它金黄的双眼静观四方\n当你进入它影子的范围里\n那就一切都太迟了。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheDragon.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "大军阀",
      href: "https://poedb.tw/cn/The_Warlord",
      type: "The Warlord",
      explicitMod: '<span class="whiteitem">六连 花冠重锤</span><br/><span class="default">物品等级:</span> <span class="normal">83</span>',
      flavourText: '" 要治愈女神，\n断开腐败的连接，\n你必须击碎世界。"',
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheWarlord.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "希望微光",
      href: "https://poedb.tw/cn/Glimmer_of_Hope",
      type: "Glimmer of Hope",
      explicitMod: '<span class="uniqueitem">金光戒指</span>',
      flavourText: "当你遁入黑暗的深处，最微弱的光也能成为你的引导。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/GlimmerOfHope.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "大地吞食者",
      href: "https://poedb.tw/cn/Earth_Drinker",
      type: "Earth Drinker",
      explicitMod: '<span class="uniqueitem">坚岩药剂</span>',
      flavourText: "浅尝能成长\n饮尽则下葬",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/EarthDrinker.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "危机",
      href: "https://poedb.tw/cn/The_Risk",
      type: "The Risk",
      explicitMod: '<span class="uniqueitem">赌神芬多</span>',
      flavourText: '"没有选择是正确或错误的，也没有最好或最坏的。只有选择，和结果而已。"',
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheRisk.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "虚空",
      href: "https://poedb.tw/cn/The_Void",
      type: "The Void",
      explicitMod: "",
      flavourText: "深入虚空并领取你的奖赏。",
      stack: 1,
      icon: "https://poe.game.qq.com/image/divination-card/TheVoid.png",
      Tags: "boss_drop_card, divination_card"
    },
    {
      name: "失落帝国",
      href: "https://poedb.tw/cn/Lost_Worlds",
      type: "Lost Worlds",
      explicitMod: '<span class="whiteitem">地图</span><br/><span class="default">地图阶级:</span> <span class="normal">15</span>',
      flavourText: '"在超出我书页的范围，超出我所理解的地方，有着其它的世界。奇妙的世界，恐怖的世界。"\n阿拉米尔 - 给切斯特大帝的制图',
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/LostWorlds.png",
      Tags: "maps_divination, divination_card"
    },
    {
      name: "忍辱",
      href: "https://poedb.tw/cn/Turn_the_Other_Cheek",
      type: "Turn the Other Cheek",
      explicitMod: '<span class="uniqueitem">和平主义</span><br/><span class="corrupted">已腐化</span>',
      flavourText: '"唯有遗忘愤怒，方能获得力量。＂\n- 丝克玛·安赛娜丝',
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TurnTheOtherCheek.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "诱惑之雨",
      href: "https://poedb.tw/cn/Rain_Tempter",
      type: "Rain Tempter",
      explicitMod: '<span class="whiteitem">地图</span><br/><span class="default">地图位阶：</span> <span class="normal">6</span>',
      flavourText: "像水一样，朋友。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/RainTempter.png",
      Tags: "maps_divination, divination_card"
    },
    {
      name: "暗黑之王",
      href: "https://poedb.tw/cn/The_Lord_in_Black",
      type: "The Lord in Black",
      explicitMod: '<span class="magicitem">巴曼斯之 戒指</span><br/><span class="default">物品等级:</span> <span class="normal">83</span>',
      flavourText: "你的膝为了在黑暗中迅敏的移动而弯曲，\n你的刃为了你而守卫。\n你的誓言将连接你和他的印记，\n你的身躯将注记着他的的魔符。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheLordInBlack.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "永恒不朽",
      href: "https://poedb.tw/cn/The_Immortal",
      type: "The Immortal",
      explicitMod: '<span class="divination">明镜</span>',
      flavourText: '"你好！ 你以为我是个贪婪的人不代表我就不愿意分享。你只要先把我干掉就可以了。" - 元帅·死王',
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TheImmortal.png",
      Tags: "gives_other_cards_divination, divination_card"
    },
    {
      name: "怒雷之空",
      href: "https://poedb.tw/cn/Thunderous_Skies",
      type: "Thunderous Skies",
      explicitMod: '<span class="uniqueitem">暴雨之弦</span>',
      flavourText: "许多操纵着雷电力量的人说过被电击而死的受害者都看起来更加地有活力。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/ThunderousSkies.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "生命之树",
      href: "https://poedb.tw/cn/The_Sephirot",
      type: "The Sephirot",
      explicitMod: '<span class="currencyitem">10x 神圣石</span>',
      flavourText: "如果通往神圣的道路是简单的，那么人人都能成神。",
      stack: 11,
      icon: "https://poe.game.qq.com/image/divination-card/TheSephirot.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "纯净帝王",
      href: "https://poedb.tw/cn/Emperor_of_Purity",
      type: "Emperor of Purity",
      explicitMod: '<span class="whiteitem">六连的圣语锁甲</span><br/><span class="default">物品等级:</span><span class="normal">60</span>',
      flavourText: "与其头衔名符其实，\n新登基者，福尔\n摧毁许多\n永恒帝国著名的\n奢侈与浮华。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/EmperorOfPurity.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "梦想家",
      href: "https://poedb.tw/cn/The_Visionary",
      type: "The Visionary",
      explicitMod: '<span class="uniqueitem">狮眼的视线</span>',
      flavourText: "狮眼仰头看着胜利的荣耀，却忘了留意面前的泪水。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheVisionary.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "殒落的命运",
      href: "https://poedb.tw/cn/Destined_to_Crumble",
      type: "Destined to Crumble",
      explicitMod: '<span class="rareitem">身体护具</span><br/><span class="default">物品等级:</span><span class="normal">100</span>',
      flavourText: '"我们不能忘记瓦尔教过我们最重要的一课：\n没有任何事物是永恒的。"\n- 萨欧赛·佛耶葛，皇家学者',
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/DestinedtoCrumble.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "诅咒之王",
      href: "https://poedb.tw/cn/The_Cursed_King",
      type: "The Cursed King",
      explicitMod: '<span class="uniqueitem">瑞佛诅咒</span>',
      flavourText: "初代们\n或许是种亵渎，\n但他们是\n强大的亵渎。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheCursedKing.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "阴阳眼",
      href: "https://poedb.tw/cn/Heterochromia",
      type: "Heterochromia",
      explicitMod: '<span class="uniqueitem">双玉戒指</span>',
      flavourText: "黑白，金银\n让我们见证世界的真相\n红蓝，黄绿\n让我们再造无人见过之色彩",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/Heterochromia.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "莉莎之息",
      href: "https://poedb.tw/cn/Lysahs_Respite",
      type: "Lysahs Respite",
      explicitMod: '<span class="uniqueitem">玛瑙护身符</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "许多回忆，\n许多苦痛\n充斥着小图腾。\n淹没在血液之中\n才能使你遗忘。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/LysahsRespite.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "风暴使者",
      href: "https://poedb.tw/cn/The_Stormcaller",
      type: "The Stormcaller",
      explicitMod: '<span class="uniqueitem">雷霆圣杖</span>',
      flavourText: "若你召唤了\n雷霆之神，\n当你被雷劈时\n也别觉得惊讶。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheStormcaller.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "命运之网",
      href: "https://poedb.tw/cn/The_Web",
      type: "The Web",
      explicitMod: '<span class="magicitem">工艺打造武器</span>',
      flavourText: "武器，避难所，监狱。\n蛛网的用途不断改变\n因应着蜘蛛的需要。\n一堂课题\n需要我们用心学习。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheWeb.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "制图者的青睐",
      href: "https://poedb.tw/cn/Cartographers_Delight",
      type: "Cartographers Delight",
      explicitMod: '<span class="normal">地图</span><br/><span class="default">地图阶级:</span><span class="normal">5</span>',
      flavourText: "地图就像\n一双眼睛，\n若失去它你将\n蹒跚，找不到去路。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/CartographersDelight.png",
      Tags: "maps_divination, divination_card"
    },
    {
      name: "竞技场冠军",
      href: "https://poedb.tw/cn/The_Arena_Champion",
      type: "The Arena Champion",
      explicitMod: '<span class="whiteitem">地图</span><br/><span class="default">地图位阶：</span> <span class="normal">12</span>',
      flavourText: "真正的战斗是最简单的\n让人想死的是长年的训练",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TheArenaChampion.png",
      Tags: "maps_divination, divination_card"
    },
    {
      name: "收割者",
      href: "https://poedb.tw/cn/The_Harvester",
      type: "The Harvester",
      explicitMod: '<span class="uniqueitem">收割者</span>',
      flavourText: "不要尝试\n禁忌果实。\n他们正收割着\n黑暗的一族，\n扭曲，腐败以及\n受到永恒之诅咒。",
      stack: 11,
      icon: "https://poe.game.qq.com/image/divination-card/TheHarvester.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "她的面具",
      href: "https://poedb.tw/cn/Her_Mask",
      type: "Her Mask",
      explicitMod: '<span class="whiteitem">奉献碎片</span>',
      flavourText: "臣服在女王的美丽之下\n至少你还能献出颈项让她划破",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/HerMask.png",
      Tags: "divination_card"
    },
    {
      name: "月影女祭司",
      href: "https://poedb.tw/cn/The_Lunaris_Priestess",
      type: "The Lunaris Priestess",
      explicitMod: '<span class="uniqueitem">破碎传承者</span>',
      flavourText: "拥抱光明，\n等待明日，\n不再怨恨，\n并不再悲伤。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheLunarisPriestess.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "暴虐之灵",
      href: "https://poedb.tw/cn/The_Tyrant",
      type: "The Tyrant",
      explicitMod: '<span class="magicitem">无情的武器</span><br/><span class="default">物品等级:</span><span class="normal">100</span>',
      flavourText: '"恐惧支配众人"\n- 拉兹罗，灾祸之源',
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheTyrant.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "命运垂青",
      href: "https://poedb.tw/cn/Lucky_Deck",
      type: "Lucky Deck",
      explicitMod: '<span class="currencyitem">10x 未知的命运卡</span>',
      flavourText: "戏法或运气，结果一致时，有谁会在意?",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/LuckyDeck.png",
      Tags: "gives_other_cards_divination, divination_card"
    },
    {
      name: "光与真实",
      href: "https://poedb.tw/cn/Light_and_Truth",
      type: "Light and Truth",
      explicitMod: '<span class="uniqueitem">水晶短杖</span>',
      flavourText: "即使光阴的变迁\n也将无法黯淡\n真理清澈的光芒",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/LigthAndTruth.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "耐久者",
      href: "https://poedb.tw/cn/The_Endurance",
      type: "The Endurance",
      explicitMod: '<span class="magicitem">生机的 赤红珠宝</span>',
      flavourText: "艳红珠宝，有如血气，\n畅流于吾脉，\n身体有如媒矿，尝试碾碎我，\n残留的便是坚钻",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheEndurance.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "力之誓言",
      href: "https://poedb.tw/cn/The_Oath",
      type: "The Oath",
      explicitMod: '<span class="uniqueitem">冥使之体</span>',
      flavourText: "所谓誓言，就是改变的约定。绝不为了达成目标而延期，这只是愚弄傻瓜的把戏·",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheOath.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "忏悔者",
      href: "https://poedb.tw/cn/The_Penitent",
      type: "The Penitent",
      explicitMod: '<span class="uniqueitem">潜能之戒</span>',
      flavourText: "我付出了财富，我们开始饥饿。\n我付出了土地，我们无家可归。\n我付出了家人，我变的孤独。\n我付出了双眼，获得梦寐的渴望",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/ThePenitent.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "无迹之海",
      href: "https://poedb.tw/cn/The_Formless_Sea",
      type: "The Formless Sea",
      explicitMod: '<span class="uniqueitem">黑鲨</span>',
      flavourText: "无形的力量，\n驯服狂野之美，\n神祇的海水，\n拘束八方海域。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheFormlessSea.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "瓦尔的眷顾",
      href: "https://poedb.tw/cn/Luck_of_the_Vaal",
      type: "Luck of the Vaal",
      explicitMod: '<span class="uniqueitem">瓦尔护手</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "真没那么幸运，否则他们现在可还在呢！",
      stack: 1,
      icon: "https://poe.game.qq.com/image/divination-card/LuckOfTheVaal.png",
      Tags: "divination_card"
    },
    {
      name: "远古召唤",
      href: "https://poedb.tw/cn/Call_to_the_First_Ones",
      type: "Call to the First Ones",
      explicitMod: '<span class="rareitem">1阶魔符</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "艾兹麦人绝望无助之际，神灵是他们最后的救赎·",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/CallToTheFirstOnes.png",
      Tags: "corrupted_divination, divination_card"
    },
    {
      name: "博学者",
      href: "https://poedb.tw/cn/The_Polymath",
      type: "The Polymath",
      explicitMod: '<span class="uniqueitem">均衡之符</span>',
      flavourText: "天赋没有界限·",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/ThePolymath.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "群狼之王",
      href: "https://poedb.tw/cn/The_Wolf",
      type: "The Wolf",
      explicitMod: '<span class="uniqueitem">瑞佛物品</span>',
      flavourText: "巨兽无法靠蛮力压制。彪狼教导我们使用诡计替代力量，刺探要害，深切重击。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheWolf.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "达拉夫人的宝石",
      href: "https://poedb.tw/cn/Diallas_Subjugation",
      type: "Diallas Subjugation",
      explicitMod: '<span class="size-31"><span class="gemitem">辅助宝石</span><br/><span class="default">品质：</span> <span class="augmented">+23%</span><br/><span class="corrupted">已腐化</span></span>',
      flavourText: "美丽与纯净的象征\n宝石污染了她的神智\n玛拉凯腐败了她的宝石\n疯狂吞噬了仅存的荣耀。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/DiallasSubjugation.png",
      Tags: "gems_divination, gems_quality_divination, corrupted_divination, divination_card"
    },
    {
      name: "射成筛子",
      href: "https://poedb.tw/cn/The_Porcupine",
      type: "The Porcupine",
      explicitMod: '<span class="whiteitem">六连短弓</span><br/><span class="default">物品等级:</span><span class="normal">50</span>',
      flavourText: "第一支带羽毛的箭把人分成两类： 学以致用的，以及等死的·",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/ThePorcupine.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "金刚狼",
      href: "https://poedb.tw/cn/The_Wolverine",
      type: "The Wolverine",
      explicitMod: '<span class="uniqueitem">爪</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "从底下撕裂他们，你会为你的杀戮满意；从顶上撕裂他们，你会上瘾着迷。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheWolverine.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "炫耀之力",
      href: "https://poedb.tw/cn/The_Garish_Power",
      type: "The Garish Power",
      explicitMod: '<span class="uniqueitem">珠宝</span>',
      flavourText: "马雷格罗可能注重内在忽视外表，但这不能掩盖他对夸张创造的狂热。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/GarishPower.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "越界的呼唤",
      href: "https://poedb.tw/cn/The_Calling",
      type: "The Calling",
      explicitMod: '<span class="uniqueitem">超越词缀物品</span>',
      flavourText: "鲜血不仅流动于血脉，它畅流任何大地。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheCalling.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "露指手套",
      href: "https://poedb.tw/cn/Mitts",
      type: "Mitts",
      explicitMod: '<span class="uniqueitem">手套</span>',
      flavourText: "用双手劳动和生存的人知道如何珍惜那双生活的来源·",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/Mitts.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "狼之信物",
      href: "https://poedb.tw/cn/Mawr_Blaidd",
      type: "Mawr Blaidd",
      explicitMod: '<span class="uniqueitem">巨狼之眼</span>',
      flavourText: "狼王瑞佛以为他获得了力量，其实只不是过是力量又多了一个仆从·",
      stack: 16,
      icon: "https://poe.game.qq.com/image/divination-card/RussiaDivinationCard.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "金属盒子",
      href: "https://poedb.tw/cn/The_Valley_of_Steel_Boxes",
      type: "The Valley of Steel Boxes",
      explicitMod: "禁用",
      flavourText: '"最珍贵的宝物，更应当藏在意想不到的平凡之处·"',
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheValleyOfSteelBoxes.png",
      Tags: "divination_card"
    },
    {
      name: "拾荒者",
      href: "https://poedb.tw/cn/The_Scavenger",
      type: "The Scavenger",
      explicitMod: '<span class="uniqueitem">致命之体</span>',
      flavourText: "一点一滴，拾取每一件小小的物品，最终将它们组合成杰出的艺术品·",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheScavenger.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "女之武神",
      href: "https://poedb.tw/cn/The_Valkyrie",
      type: "The Valkyrie",
      explicitMod: '<span class="uniqueitem">复仇词缀物品</span>',
      flavourText: "邪恶侵袭，撕毁了大地。\n战争四起，造就了英雄，\n复仇之火点燃夜空。\n英勇奉献将永熄业火。\n- 德雷克之墓",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheValkyrie.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "闪光与火焰",
      href: "https://poedb.tw/cn/The_Spark_and_the_Flame",
      type: "The Spark and the Flame",
      explicitMod: '<span class="uniqueitem">贝雷克的火与雷之乐</span>',
      flavourText: "当天空与地面相撞，碰撞的火花美丽动人，但却无人能够征服他们。",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/TheSparkAndTheFlame.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "冷淡",
      href: "https://poedb.tw/cn/The_Standoff",
      type: "The Standoff",
      explicitMod: '<span class="uniqueitem">素布腰带</span>',
      flavourText: "一个所谓的宿命之敌，最后可能会成为你活下去的唯一理由。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheStandOff.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "正气",
      href: "https://poedb.tw/cn/Might_is_Right",
      type: "Might is Right",
      explicitMod: '<span class="uniqueitem">裂颅</span>',
      flavourText: "即使在奇术出现前，人心也有许多顾虑。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/MightIsRight.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "雷劈",
      href: "https://poedb.tw/cn/Struck_by_Lightning",
      type: "Struck by Lightning",
      explicitMod: '<span class="magicitem">电切宝石</span><br/><span class="default">物品等级：</span> <span class="normal">76</span>',
      flavourText: "“闪电绝不会命中相同的地方两次”\n这不过是凡人的一厢情愿罢了。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/StruckbyLightning.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "残酷之环",
      href: "https://poedb.tw/cn/The_Ruthless_Ceinture",
      type: "The Ruthless Ceinture",
      explicitMod: '<span class="uniqueitem">梅吉诺德的力量泉源</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "在战斗中，真正的勇士首先要足智多谋，\n而后就是坚决果断。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheRuthlessCeinture.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "遗弃之物",
      href: "https://poedb.tw/cn/The_Forsaken",
      type: "The Forsaken",
      explicitMod: '<span class="uniqueitem">不朽系命</span>',
      flavourText: "你曾无私地给予我们生命和博爱。现在你的离去让我们的存在孤独又毫无意义。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheForsaken.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "稍纵即逝",
      href: "https://poedb.tw/cn/Lingering_Remnants",
      type: "Lingering Remnants",
      explicitMod: '<span class="rareitem">瓦尔密殿</span><br/><span class="default">物品等级:</span><span class="normal">83</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "死不去也活不了，他们在凄惨的月光下没有目的，没有尽头地漫游着。",
      stack: 16,
      icon: "https://poe.game.qq.com/image/divination-card/LingeringRemnants.png",
      Tags: "maps_divination, corrupted_divination, divination_card"
    },
    {
      name: "风暴来袭",
      href: "https://poedb.tw/cn/The_Coming_Storm",
      type: "The Coming Storm",
      explicitMod: '<span class="uniqueitem">雷语</span>',
      flavourText: "没有人希望风暴再临。你能做的只是默默祈祷你不会无意激怒它·",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheComingStorm.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "龙之眼",
      href: "https://poedb.tw/cn/The_Eye_of_the_Dragon",
      type: "The Eye of the Dragon",
      explicitMod: '<span class="uniqueitem">珠宝</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "这是对于远古神灵来说也过于强大的力量。",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TheEyeOfTheDragon.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "净白",
      href: "https://poedb.tw/cn/The_Opulent",
      type: "The Opulent",
      explicitMod: '<span class="rareitem">戒指</span><br/><span class="default">物品等级：</span> <span class="normal">100</span>',
      flavourText: "事实上，财富真的能买到幸福。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheOpulecent.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "灼热之火",
      href: "https://poedb.tw/cn/The_Blazing_Fire",
      type: "The Blazing Fire",
      explicitMod: '<span class="uniqueitem">乱矢之弦</span>',
      flavourText: "致命, 不可触摸,\n热情, 兴奋跃动。\n这就是我所寻找的。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheBlazingFire.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "家的捷径",
      href: "https://poedb.tw/cn/The_Realm",
      type: "The Realm",
      explicitMod: '<span class="gemitem">时空之门</span><br/><span class="default">品质：</span> <span class="augmented">+1-20%</span>',
      flavourText: "如果你急着想冲进陌生的地方，\n就要准备好面对稀奇古怪的事情。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheRealm.png",
      Tags: "gems_divination, gems_quality_divination, divination_card"
    },
    {
      name: "听天由命",
      href: "https://poedb.tw/cn/Left_to_Fate",
      type: "Left to Fate",
      explicitMod: '<span class="rareitem">地图</span><br/><span class="default">地图阶级:</span><span class="normal">16</span><br/><span class="corrupted">未鉴定 已腐化</span>',
      flavourText: "无\n{数人为了成就伟大而奋斗，\n但挑战和机遇\n成就了正真的伟大。}",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/LeftToFate.png",
      Tags: "maps_divination, corrupted_divination, divination_card"
    },
    {
      name: "阿兹里的武器库",
      href: "https://poedb.tw/cn/Atziris_Arsenal",
      type: "Atziris Arsenal",
      explicitMod: '<span class="uniqueitem">武器</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "在罪恶的监牢中,\n是升天成神还是悲痛坠地.\n暗影之下, 唯有希望.",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/AtzirisArmory.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "锈铁诗人",
      href: "https://poedb.tw/cn/The_Rusted_Bard",
      type: "The Rusted Bard",
      explicitMod: '<span class="currencyitem">4x 污秽神秘石</span>',
      flavourText: "{四重高歌，欢呼雀跃\n一百银钱，棺柩不存。\n高歌往复，空空如也。\n希望破灭，一无所获。}",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheRustedBard.png",
      Tags: "currency_divination, currency_exotic_divination, divination_card"
    },
    {
      name: "重生",
      href: "https://poedb.tw/cn/Rebirth",
      type: "Rebirth",
      explicitMod: '<span class="uniqueitem">查兰之剑</span>',
      flavourText: "他告诉了我什么是微笑，\n而又夺走了我的一切。",
      stack: 27,
      icon: "https://poe.game.qq.com/image/divination-card/BirthOfTheThree.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, boss_drop_card, divination_card"
    },
    {
      name: "永不满足",
      href: "https://poedb.tw/cn/The_Insatiable",
      type: "The Insatiable",
      explicitMod: '<span class="uniqueitem">收割者</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "灵魂的欲望，\n是一种为了满足渴望而不顾一切的冲动，\n是一种难以承受的负担，\n是即使是最纯洁的心也会随着时间的流逝而改变的真相。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheInsatiable.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "圣人之礼",
      href: "https://poedb.tw/cn/The_Saints_Treasure",
      type: "The Saints Treasure",
      explicitMod: '<span class="currencyitem">2x 崇高石</span>',
      flavourText: "在众人面前，他是负有盛名的诗人，一生追求诗甫。在他的内心之中，他渴望的是最平静的生活·",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TheSaintsTreasure.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "狡徒",
      href: "https://poedb.tw/cn/The_Deceiver",
      type: "The Deceiver",
      explicitMod: '<span class="uniqueitem">狡徒束腰</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "小心那些失去信念的战士，\n他们仍然愿意跨进异界，\n一定是因为他们藏着什么不为人知的目的。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheDeceiver.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "神佑",
      href: "https://poedb.tw/cn/Blessing_of_God",
      type: "Blessing of God",
      explicitMod: '<span class="magicitem">艾尔雷恩的饰品</span><br/><span class="default">物品等级:</span><span class="normal">85</span>',
      flavourText: "当黑暗压在你身上时，\n光明将从你的内心成长。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/BlessingOfGod.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "无迹可寻",
      href: "https://poedb.tw/cn/No_Traces",
      type: "No Traces",
      explicitMod: '<span class="currencyitem">30x 重铸石</span>',
      flavourText: "这个世界上没有错误会巨大到无法弥补。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/NoTraces.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "追梦者",
      href: "https://poedb.tw/cn/The_Dreamer",
      type: "The Dreamer",
      explicitMod: '<span class="uniqueitem">裂隙物品</span>',
      flavourText: "一个黑暗的音符从梦想家的唇角滴下，\n成为一个亲昵的旋律。\n我们站着，听命于他，\n因为在他的梦里，我们是自由的。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheDreamer.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "裂隙",
      href: "https://poedb.tw/cn/The_Breach",
      type: "The Breach",
      explicitMod: '<span class="uniqueitem">裂隙物品</span>',
      flavourText: "你有感到过被人暗中监视的感受吗？",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheBreach.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "狼王之弦",
      href: "https://poedb.tw/cn/The_Wolven_Kings_Bite",
      type: "The Wolven Kings Bite",
      explicitMod: '<span class="uniqueitem">瑞佛之羽</span>',
      flavourText: "虽有尖牙，狼会撕咬它的猎物而不是同伴。知道你自己是谁，明白撕咬的意义。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheWolvenKingsBite.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "禁忌之力",
      href: "https://poedb.tw/cn/Forbidden_Power",
      type: "Forbidden Power",
      explicitMod: '<span class="uniqueitem">苍白烈火</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "一些东西永远不该被使用，\n一些力量同样带着太大的风险。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/ForbiddenPower.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "噬界者",
      href: "https://poedb.tw/cn/The_World_Eater",
      type: "The World Eater",
      explicitMod: '<span class="uniqueitem">塑星者</span>',
      flavourText: "它的身体是无限的。\n它的胃口是无穷的。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheWorldEater.png",
      Tags: "weapon_divination, shaper_divination, unique_divination, unique_weapon_divination, boss_drop_card, divination_card"
    },
    {
      name: "死灵遗物",
      href: "https://poedb.tw/cn/The_Wretched",
      type: "The Wretched",
      explicitMod: '<span class="uniqueitem">腰带</span>',
      flavourText: "相信我，通灵师比他们的手下更加令人毛骨悚然。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheWretched.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "谜团",
      href: "https://poedb.tw/cn/The_Puzzle",
      type: "The Puzzle",
      explicitMod: '<span class="currencyitem">5 x 裂隙碎片</span>',
      flavourText: "无数的打击只会让人更加强硬，\n不断的噩梦只会悄悄远离。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/ThePuzzle.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "巫婆",
      href: "https://poedb.tw/cn/The_Witch",
      type: "The Witch",
      explicitMod: '<span class="uniqueitem">奇亚拉的决心</span>',
      flavourText: "{游荡荒野，孤身无助\n逃出生天，斩敌无数\n明知崎岖，愚心不改\n巫术傍身，神灵庇护}",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheWitch.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "黑暗缭绕",
      href: "https://poedb.tw/cn/The_Obscured",
      type: "The Obscured",
      explicitMod: '<span class="normal">裂隙石</span>',
      flavourText: "我们的国度虽然危险，\n但远比我们看不到的地方安全得多。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheObscured.png",
      Tags: "currency_league_divination, divination_card"
    },
    {
      name: "主宰",
      href: "https://poedb.tw/cn/The_Master",
      type: "The Master",
      explicitMod: '<span class="uniqueitem">比斯克的项圈</span>',
      flavourText: "在混乱的世界，他总能在主宰的手中得到慰藉。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheMaster.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "不朽决心",
      href: "https://poedb.tw/cn/Immortal_Resolve",
      type: "Immortal Resolve",
      explicitMod: '<span class="whiteitem">六连身体护甲</span><br/><span class="default">影响效果物品</span>',
      flavourText: "命运缠成解不开的结。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/ImmortalResolve.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "至臻完美",
      href: "https://poedb.tw/cn/Perfection",
      type: "Perfection",
      explicitMod: '<span class="rareitem">饰品</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">塑界之器</span>',
      flavourText: "世界万千，但只有无限潜力者才能至臻完美。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/Perfection.png",
      Tags: "jewellery_divination, shaper_divination, divination_card"
    },
    {
      name: "深深黑梦",
      href: "https://poedb.tw/cn/The_Darkest_Dream",
      type: "The Darkest Dream",
      explicitMod: '<span class="uniqueitem">离异梦寐</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "让你无法挣脱的梦境，是为梦魇。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheDarkestDream.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "珠宝匠的福祉",
      href: "https://poedb.tw/cn/The_Jewellers_Boon",
      type: "The Jewellers Boon",
      explicitMod: '<span class="whiteitem">五连身体护甲</span><br/><span class="default">影响效果物品</span>',
      flavourText: "辨玉于石中，乃珠宝匠之真境界。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheJewellersBoon.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "无尽深渊",
      href: "https://poedb.tw/cn/The_Fathomless_Depths",
      type: "The Fathomless Depths",
      explicitMod: '<span class="uniqueitem">光明偷猎者</span>',
      flavourText: "堕入无尽的夜；驶向湮灭的海。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheFathomlessDepths.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "梦境",
      href: "https://poedb.tw/cn/The_Dreamland",
      type: "The Dreamland",
      explicitMod: '<span class="uniqueitem">沉沦之间</span>',
      flavourText: "苏醒之时，梦去之时。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheDreamland.png",
      Tags: "unique_divination, maps_divination, maps_unique_divination, divination_card"
    },
    {
      name: "壮心不已",
      href: "https://poedb.tw/cn/The_Hale_Heart",
      type: "The Hale Heart",
      explicitMod: '<span class="rareitem">物品</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">裂界之器</span>',
      flavourText: "岁月衰老了他的心，但肉身依旧致命如初。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheHaleHeart.png",
      Tags: "elder_divination, divination_card"
    },
    {
      name: "剑圣的致敬",
      href: "https://poedb.tw/cn/The_Sword_Kings_Salute",
      type: "The Sword Kings Salute",
      explicitMod: '<span class="uniqueitem">德瑞索的战礼</span>',
      flavourText: "{剑圣的剑下亡魂众多\n剑圣的戒指鲜血染红\n后退者只配被屠戮\n奋战者方能得到敬意}",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheSwordKingsSalute.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "魂之和谐",
      href: "https://poedb.tw/cn/Harmony_of_Souls",
      type: "Harmony of Souls",
      explicitMod: '<span class="currencyitem">9x 尖啸精华</span>',
      flavourText: "{尖啸之魂被沉枷重锁\n怨恨则将冰封的牢笼打破\n腐化的绳结\n最终得以解开}",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/HarmonyOfSouls.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "天堂之石",
      href: "https://poedb.tw/cn/The_Celestial_Stone",
      type: "The Celestial Stone",
      explicitMod: '<span class="whiteitem">蛋白石戒指</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">塑界之器</span>',
      flavourText: "不要久久凝视它的深邃，否则你可能会彻底失去自我。",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TheCelestialStone.png",
      Tags: "jewellery_divination, shaper_divination, divination_card"
    },
    {
      name: "仰慕者",
      href: "https://poedb.tw/cn/The_Admirer",
      type: "The Admirer",
      explicitMod: '<span class="uniqueitem">阿兹里物品</span>',
      flavourText: "路西安醉心于翻阅上古的卷轴，发现曾有一份爱连接了千年。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheAdmirer.png",
      Tags: "unique_divination, boss_drop_card, divination_card"
    },
    {
      name: "生命窃贼",
      href: "https://poedb.tw/cn/The_Life_Thief",
      type: "The Life Thief",
      explicitMod: '<span class="uniqueitem">泽佛伊之心</span>',
      flavourText: "“长生不老也是一种交换。你送给人们死亡，交换他们的青春。”\n——瓦尔的泽佛依",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheLifeThief.png",
      Tags: "unique_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "无尽黑暗",
      href: "https://poedb.tw/cn/The_Endless_Darkness",
      type: "The Endless Darkness",
      explicitMod: '<span class="uniqueitem">裂空者</span>',
      flavourText: "凝视星辰，警惕星辰凝视着你。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheEndlessDarkness.png",
      Tags: "weapon_divination, elder_divination, shaper_divination, unique_divination, unique_weapon_divination, boss_drop_card, divination_card"
    },
    {
      name: "无畏者",
      href: "https://poedb.tw/cn/The_Undaunted",
      type: "The Undaunted",
      explicitMod: '<span class="uniqueitem">复仇词缀物品</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{“命运曾是我的天罚……\n但它过去阻挡不了我，现在也不能。”\n— 无畏者杰特尔布兰}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheUndaunted.png",
      Tags: "unique_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "狂兽",
      href: "https://poedb.tw/cn/The_Beast",
      type: "The Beast",
      explicitMod: '<span class="uniqueitem">兽腹</span>',
      flavourText: "己欲除魔，必先成魔。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheBeast.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "无可争议者",
      href: "https://poedb.tw/cn/The_Undisputed",
      type: "The Undisputed",
      explicitMod: '<span class="magicitem">无情的瓦尔巨斧</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">裂界之器</span>',
      flavourText: "想要真的与众不同，就必须冒天塌之险。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheUndisputed.png",
      Tags: "weapon_divination, elder_divination, divination_card"
    },
    {
      name: "武士之眼",
      href: "https://poedb.tw/cn/The_Samurais_Eye",
      type: "The Samurais Eye",
      explicitMod: '<span class="uniqueitem">守望之眼</span>',
      flavourText: "他能看穿夜里寂静的海，幽暗的天。而无形的恶魔夺走了他的眼，粉碎了他的心。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheSamuraisEye.png",
      Tags: "jewellery_divination, elder_divination, unique_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "庄园主",
      href: "https://poedb.tw/cn/The_Mayor",
      type: "The Mayor",
      explicitMod: '<span class="uniqueitem">普兰德斯庄园</span><br/><span class="default">虚空石数量：</span> <span class="normal">4</span>',
      flavourText: "拥有财富，可以拥有权力。\n掌控经济，可以掌控国力。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheMayor.png",
      Tags: "divination_card"
    },
    {
      name: "三魔音",
      href: "https://poedb.tw/cn/Three_Voices",
      type: "Three Voices",
      explicitMod: '<span class="currencyitem">3x 精华</span>',
      flavourText: "村里的老人们有个规矩：如果听到三个声音在哭喊求救，那么别回头，赶紧逃命。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/ThreeVoices.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "鲜血大军",
      href: "https://poedb.tw/cn/The_Army_of_Blood",
      type: "The Army of Blood",
      explicitMod: '<span class="uniqueitem">血脉相连</span>',
      flavourText: "{我将身心尽数交付，\n第十二个小时自身难控。\n白昼转夜仍有光在，\n那是血红的眼让人心怵。}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheArmyOfBlood.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "元素祭祀",
      href: "https://poedb.tw/cn/The_Rite_of_Elements",
      type: "The Rite of Elements",
      explicitMod: '<span class="gemitem">等级 21 魔像宝石</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{念如闪电，\n拳似磐石，\n心中有怒，\n眼露寒芒。}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheRiteofElements.png",
      Tags: "gems_divination, gems_levelled_divination, corrupted_divination, divination_card"
    },
    {
      name: "暮光之月",
      href: "https://poedb.tw/cn/The_Twilight_Moon",
      type: "The Twilight Moon",
      explicitMod: '<span class="uniqueitem">暮光古庙</span>',
      flavourText: "白日将尽，黑夜初升，寒风骤起，天空破碎。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheTwilightMoon.png",
      Tags: "unique_divination, maps_divination, maps_unique_divination, divination_card"
    },
    {
      name: "来生之美",
      href: "https://poedb.tw/cn/Beauty_Through_Death",
      type: "Beauty Through Death",
      explicitMod: '<span class="uniqueitem">阿兹里的反击</span>',
      flavourText: "她的美丽并未消退，\n但她的人性却并未幸存。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/BeautyThroughDeath.png",
      Tags: "unique_divination, unique_armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "枯萎玫瑰",
      href: "https://poedb.tw/cn/The_Wilted_Rose",
      type: "The Wilted Rose",
      explicitMod: '<span class="gemitem">21 级光环宝石</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "升神之路艰险遍地，希望却在心中萌发。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheWiltedRose.png",
      Tags: "gems_divination, gems_levelled_divination, corrupted_divination, divination_card"
    },
    {
      name: "教授",
      href: "https://poedb.tw/cn/The_Professor",
      type: "The Professor",
      explicitMod: '<span class="uniqueitem">幽秘博物馆</span>',
      flavourText: "学院之路引你前往知识之洲； 但只有无师自通者方能移山填海。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheProfessor.png",
      Tags: "unique_divination, maps_divination, maps_unique_divination, divination_card"
    },
    {
      name: "萨博辛的誓言",
      href: "https://poedb.tw/cn/Sambodhis_Vow",
      type: "Sambodhis Vow",
      explicitMod: '<span class="whiteitem">凡人碎片</span>',
      flavourText: "{他一生驱离黑暗\n直到凡人不堪重负\n恳求希望之光的饶恕。}",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/SambodhisVow.png",
      Tags: "divination_card"
    },
    {
      name: "墨水点滴",
      href: "https://poedb.tw/cn/A_Dab_of_Ink",
      type: "A Dab of Ink",
      explicitMod: '<span class="uniqueitem">诗人的笔</span>',
      flavourText: "帝国的诗篇用诗人的鲜血书写而成。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/ADabOfInk.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "信使",
      href: "https://poedb.tw/cn/The_Messenger",
      type: "The Messenger",
      explicitMod: '<span class="uniqueitem">先驱者碎片</span>',
      flavourText: "<\n><\n><\n><\n><\n><\n><\n><\n><\n>\n<\n><\n><\n><\n><\n>\n<\n><\n><\n><\n><\n>\n<\n><\n><\n><\n><\n><\n><\n>",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheMessenger.png",
      Tags: "unique_divination, boss_drop_card, divination_card"
    },
    {
      name: "黑暗中独行",
      href: "https://poedb.tw/cn/Alone_in_the_Darkness",
      type: "Alone in the Darkness",
      explicitMod: '<span class="uniqueitem">地心探索物品</span>',
      flavourText: "“有时候，你得不到的，才是世间最美丽的瑰宝……”\n- 白若，蓝晶矿洞的幸存者",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/AloneintheDarkness.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "旅程",
      href: "https://poedb.tw/cn/The_Journey",
      type: "The Journey",
      explicitMod: '<span class="currencyitem">先驱石</span>',
      flavourText: "你要去向的地方，你要看到的风景，你要遭遇的人和事。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheJourney.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "先祖赐福",
      href: "https://poedb.tw/cn/Boon_of_the_First_Ones",
      type: "Boon of the First Ones",
      explicitMod: '<span class="uniqueitem">猎魔笔记物品</span>',
      flavourText: "{伴随着她屠杀的怪兽\n皮囊和骨髓的枯萎，\n她从自己丧失之物那里获得了馈赠，\n她丧失了人性。}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/BoonoftheFirstOnes.png",
      Tags: "unique_divination, boss_drop_card, divination_card"
    },
    {
      name: "降临",
      href: "https://poedb.tw/cn/The_Landing",
      type: "The Landing",
      explicitMod: '<span class="uniqueitem">降临之地</span><br/><span class="default">地图等阶：</span> <span class="normal">15</span><br/><span class="corrupted">腐化</span>',
      flavourText: "远方之地的战士，你将踏上可能一去不返的旅程，但却会为我们带来福祉。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheLanding.png",
      Tags: "unique_divination, corrupted_divination, unique_corrupted_divination, maps_divination, maps_unique_divination, divination_card"
    },
    {
      name: "照料者",
      href: "https://poedb.tw/cn/The_Nurse",
      type: "The Nurse",
      explicitMod: '<span class="divination">疯医</span>',
      flavourText: "我们曾试图劝说他做个头部检查。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheNurse.png",
      Tags: "gives_other_cards_divination, divination_card"
    },
    {
      name: "寻觅者",
      href: "https://poedb.tw/cn/The_Seeker",
      type: "The Seeker",
      explicitMod: '<span class="currencyitem">3x 剥离石</span>',
      flavourText: "任何有瑕疵的东西都一文不值；完美的世界不允许任何微小的错误，。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheSeeker.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "不协之音",
      href: "https://poedb.tw/cn/The_Cacophony",
      type: "The Cacophony",
      explicitMod: '<span class="currencyitem">3x 破空精华</span>',
      flavourText: "无人能在喧嚣中聆听，无人能在混乱中看清方向。感官已经无用。一切只能依托命运。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheCacophony.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "瓦尔的傲慢",
      href: "https://poedb.tw/cn/Arrogance_of_the_Vaal",
      type: "Arrogance of the Vaal",
      explicitMod: '<span class="uniqueitem">物品</span><br/> <span class="corrupted">双基底</span><br/> <span class="corrupted">腐化</span>',
      flavourText: "探索之旅可以带来美景，也可能是废墟。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/ArroganceoftheVaal.png",
      Tags: "unique_divination, corrupted_divination, unique_corrupted_divination, divination_card"
    },
    {
      name: "工匠大师",
      href: "https://poedb.tw/cn/The_Master_Artisan",
      type: "The Master Artisan",
      explicitMod: '<span class="currencyitem">20x 品质通货</span>',
      flavourText: "完美只是起点，每件作品都该有独特的光芒。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheMasterArtisan.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "无辜者",
      href: "https://poedb.tw/cn/The_Innocent",
      type: "The Innocent",
      explicitMod: '<span class="currencyitem">40x 后悔石</span>',
      flavourText: "他的兄弟无意赎罪，于是他带走了兄弟的生命，这成为了他的原罪。",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TheInnocent.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "黑白世界",
      href: "https://poedb.tw/cn/Monochrome",
      type: "Monochrome",
      explicitMod: "禁用",
      flavourText: "{“一种颜色怎能描绘世界。你和我一起，我们会共同画出完美的天地。”\n- 奇拉，变节的奇术师}",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/Monochrome.png",
      Tags: "currency_divination, divination_card"
    },
    {
      name: "司法的恩赐",
      href: "https://poedb.tw/cn/Boon_of_Justice",
      type: "Boon of Justice",
      explicitMod: '<span class="whiteitem">女神祭品</span>',
      flavourText: "有些天赋是责任，而有些只是给你的机会。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/BoonofJustice.png",
      Tags: "divination_card"
    },
    {
      name: "保护的代价",
      href: "https://poedb.tw/cn/The_Price_of_Protection",
      type: "The Price of Protection",
      explicitMod: '<span class="size-28"><span class="rareitem">裂界守卫占据地图</span><br/><span class="default">地图位阶：</span> <span class="normal">14到16</span><br/><span class="default">词缀：</span><span class="normal">8</span><br/><span class="corrupted">已腐化</span></span>',
      flavourText: "为了保护自己的庄园，她会同任何人、任何事物做交易。\n\n然后有东西回应了。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/ThePriceofProtection.png",
      Tags: "elder_divination, maps_divination, corrupted_divination, divination_card"
    },
    {
      name: "帝国的遗产",
      href: "https://poedb.tw/cn/Imperial_Legacy",
      type: "Imperial Legacy",
      explicitMod: '<span class="whiteitem">六连帝国弓</span><br/><span class="default">物品等级：</span> <span class="normal">100</span>',
      flavourText: "人生迷失，遗产浮现。",
      stack: 22,
      icon: "https://poe.game.qq.com/image/divination-card/ImperialLegacy.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "七年厄运",
      href: "https://poedb.tw/cn/Seven_Years_Bad_Luck",
      type: "Seven Years Bad Luck",
      explicitMod: '<span class="currencyitem">镜之残片</span>',
      flavourText: "只要相信的人多了，是否合理都无关紧要了。",
      stack: 13,
      icon: "https://poe.game.qq.com/image/divination-card/SevenYearsBadLuck.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "狂王",
      href: "https://poedb.tw/cn/The_Mad_King",
      type: "The Mad King",
      explicitMod: '<span class="uniqueitem">瓦尔之相</span>',
      flavourText: "请对渴望权力的人心生敬畏，因为他会不惜一切。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheMadKing.png",
      Tags: "unique_divination, boss_drop_card, divination_card"
    },
    {
      name: "黑暗的引诱",
      href: "https://poedb.tw/cn/Dark_Temptation",
      type: "Dark Temptation",
      explicitMod: '<span class="uniqueitem">抹灭</span>',
      flavourText: '“只有蠢货才会向教派寻求权力，并奢望能从它的烈焰中活命。"\n- 帝王福尔',
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/DarkTemptation.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "黄金纪元",
      href: "https://poedb.tw/cn/The_Golden_Era",
      type: "The Golden Era",
      explicitMod: '<span class="magicitem">迸出的月蚀长杖</span><br/><span class="default">物品等级：</span> <span class="normal">100</span>',
      flavourText: "在古灵使徒之前，在奇术之前，一个普通的宫廷魔术师就能迷惑大多数人。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheGoldenEra.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "燃烧之血",
      href: "https://poedb.tw/cn/Burning_Blood",
      type: "Burning Blood",
      explicitMod: '<span class="uniqueitem">索伏之血</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{有一个地方上下颠倒，\n善恶不分，\n苦乐交融，\n那里的人们只求一死。}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/BurningBlood.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "起源",
      href: "https://poedb.tw/cn/The_Primordial",
      type: "The Primordial",
      explicitMod: '<span class="uniqueitem">珠宝</span><br/><span class="magicitem">远古</span>',
      flavourText: "我们用亡灵巫术扮演神灵，\n但威力过于有效\n在石堆下安息吧。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/ThePrimordial.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "山脉",
      href: "https://poedb.tw/cn/The_Mountain",
      type: "The Mountain",
      explicitMod: '<span class="magicitem">强力之珠宝</span>',
      flavourText: "{被宝石蒙蔽双眼\n一心只求圆满\n不惜深入黑暗}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheMountain.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "虚荣",
      href: "https://poedb.tw/cn/Vanity",
      type: "Vanity",
      explicitMod: '<span class="uniqueitem">无尽之衣</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/Vanity.png",
      Tags: "armour_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_armour_divination, divination_card"
    },
    {
      name: "牺牲",
      href: "https://poedb.tw/cn/The_Sacrifice",
      type: "The Sacrifice",
      explicitMod: '<span class="whiteitem">六连祭礼束衣</span><br/><span class="default">物品等级：</span> <span class="normal">100</span>',
      flavourText: "总有人愿为力量支付任何代价。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheSacrifice.png",
      Tags: "armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "爱的回音",
      href: "https://poedb.tw/cn/Echoes_of_Love",
      type: "Echoes of Love",
      explicitMod: '<span class="uniqueitem">费德利塔斯的尖刺</span><br/> <span class="corrupted">双基底</span><br/> <span class="corrupted">已腐化</span>',
      flavourText: "我为你放弃了身体。我为你放弃了名讳。而总有一天，我必将为你放弃生命。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/EchoesOfLove.png",
      Tags: "weapon_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "欢庆领主",
      href: "https://poedb.tw/cn/The_Lord_of_Celebration",
      type: "The Lord of Celebration",
      explicitMod: '<span class="magicitem">庆祝节杖</span><br/><span class="default">塑界者物品</span>',
      flavourText: "尽管曾是一群精英斗士，但帝王的皇家护卫仍不敢参加他举办的任何一次胡天胡地的宴会。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheLordofCelebration.png",
      Tags: "weapon_divination, shaper_divination, divination_card"
    },
    {
      name: "诱人的奖赏",
      href: "https://poedb.tw/cn/Alluring_Bounty",
      type: "Alluring Bounty",
      explicitMod: '<span class="currencyitem">10x 崇高石</span>',
      flavourText: "{人为财死\n鸟为食亡。}",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/AlluringBounty.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "求知若渴",
      href: "https://poedb.tw/cn/Thirst_for_Knowledge",
      type: "Thirst for Knowledge",
      explicitMod: '<span class="uniqueitem">暴食</span>',
      flavourText: "思想的宝库不断拓宽觉醒，星辰也随之点燃。 {贪婪的头脑饥不择食。\n其他学者真幸运，因为他终于学到了什么叫永恒。}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/ThirstForKnowledge.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "恶毒的权力",
      href: "https://poedb.tw/cn/Vile_Power",
      type: "Vile Power",
      explicitMod: '<span class="uniqueitem">灭世</span>',
      flavourText: "{危机遍野，寒意席卷大地。\n权力蛰伏，不停撩拨命运。\n贪婪无度，片刻不得停息。}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/VilePower.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "深渊之子",
      href: "https://poedb.tw/cn/The_Deep_Ones",
      type: "The Deep Ones",
      explicitMod: '<span class="uniqueitem">局势逆转者</span>',
      flavourText: "{“大海在召唤，疯狂在回应”}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheDeepOnes.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "诺克之冠",
      href: "https://poedb.tw/cn/Nooks_Crown",
      type: "Nooks Crown",
      explicitMod: '<span class="rareitem">唤骨头盔</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">裂界者物品</span>',
      flavourText: "{每个头颅都曾有自己的主人，\n虽然少有人问津。\n朋友们，戴着诺克之冠的头颅\n却无需询问。\n他们早已铭记在心。}",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/NooksCrown.png",
      Tags: "armour_divination, elder_divination, divination_card"
    },
    {
      name: "黑暗之梦",
      href: "https://poedb.tw/cn/Dark_Dreams",
      type: "Dark Dreams",
      explicitMod: '<span class="rareitem">唤骨头盔</span><br/><span class="default">裂界者物品</span>',
      flavourText: "当她说要养家糊口的时候，没人搞清楚那到底意味着什么。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/DarkDreams.png",
      Tags: "armour_divination, elder_divination, divination_card"
    },
    {
      name: "愚人",
      href: "https://poedb.tw/cn/The_Fool",
      type: "The Fool",
      explicitMod: '<span class="currencyitem">20x 机会石</span>',
      flavourText: "哪怕最博学的人面对自己的命运也只是个愚人。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheFool.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "支线任务",
      href: "https://poedb.tw/cn/The_Side_Quest",
      type: "The Side Quest",
      explicitMod: '<span class="currencyitem">20x 侦察报告</span>',
      flavourText: "紧闭双眼，你将永远无法理解错失的一切",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheSideQuest.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "忠诚的代价",
      href: "https://poedb.tw/cn/The_Price_of_Loyalty",
      type: "The Price of Loyalty",
      explicitMod: '<span class="span class=" uniqueitem="">忠诚的皮囊</span><br/><size-26><span class="default">物品等级：</span> <span class="normal">25</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span></size-26>',
      flavourText: "“用他们的皮囊为我铸甲，用他们的灵魂淬化，再把他们的血肉丢给猎狗。”",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/ThePriceOfLoyalty.png",
      Tags: "armour_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_armour_divination, divination_card"
    },
    {
      name: "半神的赌局",
      href: "https://poedb.tw/cn/Demigods_Wager",
      type: "Demigods Wager",
      explicitMod: '<span class="currencyitem">剥离石</span>',
      flavourText: "偶尔你得靠自己找到运气。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/DemigodsWagergives.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "先祖的代价",
      href: "https://poedb.tw/cn/Pride_of_the_First_Ones",
      type: "Pride of the First Ones",
      explicitMod: '<span class="uniqueitem">大地之护</span>',
      flavourText: "利爪无声，芦苇遁形，日光渐隐，\n法瑞尔猎行。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/PrideOfTheFirstOnes.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "魔侍",
      href: "https://poedb.tw/cn/The_Skeleton",
      type: "The Skeleton",
      explicitMod: '<span class="gemitem">1 级召唤魔侍</span><br/><span class="default">品质：</span> <span class="augmented">+23%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "它们与我等同行，也是我等的归宿。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheSkeleton.png",
      Tags: "corrupted_divination, gems_divination, gems_quality_divination, divination_card"
    },
    {
      name: "阿祖兰的奖赏",
      href: "https://poedb.tw/cn/Azyrans_Reward",
      type: "Azyrans Reward",
      explicitMod: '<span class="uniqueitem">三相珠宝</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "方法胜于苦功，历久弥坚，灵光必然乍现。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/AzyransReward.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "铭记",
      href: "https://poedb.tw/cn/Remembrance",
      type: "Remembrance",
      explicitMod: '<span class="uniqueitem">先驱的纹章</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{“因为你的一切奋斗，一切成就都将远超我辈，千古名留。因此务必谨慎。”\n\n——尤利乌斯·普兰德斯，切特斯之父}",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/Remembrance.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "埋葬的宝藏",
      href: "https://poedb.tw/cn/Buried_Treasure",
      type: "Buried Treasure",
      explicitMod: '<span class="whiteitem">亚硫酸圣甲虫</span>',
      flavourText: "{两手干净不可能发家致富。}",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/BuriedTreasure.png",
      Tags: "divination_card"
    },
    {
      name: "恶魔",
      href: "https://poedb.tw/cn/The_Demon",
      type: "The Demon",
      explicitMod: '<span class="uniqueitem">猎首</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "谜音入脑，未必发狂。",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TheDemon.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "买卖",
      href: "https://poedb.tw/cn/The_Deal",
      type: "The Deal",
      explicitMod: '<span class="whiteitem">制图者圣甲虫</span>',
      flavourText: "追逐权力，正如追求财富，到头两手空空。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheDeal.png",
      Tags: "divination_card"
    },
    {
      name: "天选",
      href: "https://poedb.tw/cn/The_Chosen",
      type: "The Chosen",
      explicitMod: '<span class="uniqueitem">君主之肤</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "他们的生命被献给了黑暗梦者……他们真走运。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheChosen.png",
      Tags: "armour_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "地下森林",
      href: "https://poedb.tw/cn/Underground_Forest",
      type: "Underground Forest",
      explicitMod: "禁用",
      flavourText: "“又见森林……至少我不再两手空空。”",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/UndergroundForest.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "元素虚空",
      href: "https://poedb.tw/cn/Void_of_the_Elements",
      type: "Void of the Elements",
      explicitMod: '<span class="magicitem">强盛的蛋白石戒指</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">裂界者物品</span>',
      flavourText: "诚然，自然之力深不可测，可当它们消失后才叫人毛骨悚然。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/VoidOfTheElements.png",
      Tags: "jewellery_divination, elder_divination, divination_card"
    },
    {
      name: "老人",
      href: "https://poedb.tw/cn/The_Old_Man",
      type: "The Old Man",
      explicitMod: '<span class="rareitem">鱼竿</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "鱼儿啊，请听我一言！我爱你敬你，可日落之前，我必戮你享你。",
      stack: 12,
      icon: "https://poe.game.qq.com/image/divination-card/TheOldMan.png",
      Tags: "weapon_divination, corrupted_divination, divination_card"
    },
    {
      name: "永不知足",
      href: "https://poedb.tw/cn/More_is_Never_Enough",
      type: "More is Never Enough",
      explicitMod: "禁用",
      flavourText: "欲壑难填皆因填",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/MoreIsNeverEnough.png",
      Tags: "divination_card"
    },
    {
      name: "前程的诱惑",
      href: "https://poedb.tw/cn/Baited_Expectations",
      type: "Baited Expectations",
      explicitMod: '<span class="uniqueitem">渔具</span>',
      flavourText: "渔线的要领就是不长不短刚刚好。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/BaitedExpectations.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "大法师的右手",
      href: "https://poedb.tw/cn/The_Archmages_Right_Hand",
      type: "The Archmages Right Hand",
      explicitMod: '<span class="magicitem">雕纹箴言法杖</span><br/><span class="default">物品等级：</span> <span class="normal">100</span>',
      flavourText: "”哪怕普通的木棍握在他的手上，也能让天堂在恐惧中颤抖。“",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheArchmagesRightHand.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "以血镌刻",
      href: "https://poedb.tw/cn/Etched_in_Blood",
      type: "Etched in Blood",
      explicitMod: '<span class="uniqueitem">瑞弗之羽</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "为了在历史上留下浓重的一笔，必须有人作出牺牲。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/EtchedInBlood.png",
      Tags: "unique_divination, corrupted_divination, unique_corrupted_divination, divination_card"
    },
    {
      name: "逃亡",
      href: "https://poedb.tw/cn/The_Escape",
      type: "The Escape",
      explicitMod: '<span class="uniqueitem">神行靴</span>',
      flavourText: "感受真实，你将步入疯狂之境。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheEscape.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "英勇打击",
      href: "https://poedb.tw/cn/The_Heroic_Shot",
      type: "The Heroic Shot",
      explicitMod: '<span class="currencyitem">17x 幻色石</span>',
      flavourText: "千百遍的尝试，终将换来放弃。",
      stack: 1,
      icon: "https://poe.game.qq.com/image/divination-card/TheHeroicShot.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "骸骨",
      href: "https://poedb.tw/cn/The_Bones",
      type: "The Bones",
      explicitMod: '<span class="gemitem">21 瓦尔召唤魔侍</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "肉体是监牢，我等终自由。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheBones.png",
      Tags: "corrupted_divination, gems_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "致命谋划",
      href: "https://poedb.tw/cn/Deathly_Designs",
      type: "Deathly Designs",
      explicitMod: '<span class="gemitem">21 级陷阱宝石</span><br/><span class="default">品质：</span> <span class="augmented">+23%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "“卡拉说得对，这必将让我光宗耀祖。”",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/DeathlyDesigns.png",
      Tags: "corrupted_divination, gems_divination, gems_quality_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "恐怖之眼",
      href: "https://poedb.tw/cn/The_Eye_of_Terror",
      type: "The Eye of Terror",
      explicitMod: '<span class="whiteitem">夏乌拉的无暇裂隙石</span>',
      flavourText: "混乱之主睁眼做梦，目不转睛地望着他的奖赏。很快，一切都将在他醒来之前颤抖。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheEyeOfTerror.png",
      Tags: "currency_divination, currency_league_divination, boss_drop_card, divination_card"
    },
    {
      name: "无罪之援",
      href: "https://poedb.tw/cn/Succor_of_the_Sinless",
      type: "Succor of the Sinless",
      explicitMod: '<span class="uniqueitem">瓶中信仰</span>',
      flavourText: "蒙恩圣徒以血为福，踏遍千山步履赐祝，弘法除恶众苦皆除。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/SuccorOfTheSinless.png",
      Tags: "unique_divination, boss_drop_card, divination_card"
    },
    {
      name: "卡梅莉亚的回报",
      href: "https://poedb.tw/cn/Camerias_Cut",
      type: "Camerias Cut",
      explicitMod: '<span class="whiteitem">圣甲虫</span>',
      flavourText: "“酬劳有两种，金子和鲜血。而我两者都要。”\n\n- 冷血的卡梅莉亚",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/CameriasCut.png",
      Tags: "divination_card"
    },
    {
      name: "挥霍无度",
      href: "https://poedb.tw/cn/Squandered_Prosperity",
      type: "Squandered Prosperity",
      explicitMod: '<span class="uniqueitem">普兰德斯庄园</span><br/><span class="default">虚空石数量：</span> <span class="normal">4</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "“君王着魔，百姓遭殃。”",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/BaronCat.png",
      Tags: "unique_divination, corrupted_divination, unique_corrupted_divination, maps_divination, maps_unique_divination, divination_card"
    },
    {
      name: "鱼贩",
      href: "https://poedb.tw/cn/The_Fishmonger",
      type: "The Fishmonger",
      explicitMod: '<span class="whiteitem">白化的羽毛</span>',
      flavourText: "再狠的恐喙鸟，都有适合的棍子叫它们听话。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheFishmonger.png",
      Tags: "currency_divination, divination_card"
    },
    {
      name: "交易",
      href: "https://poedb.tw/cn/The_Bargain",
      type: "The Bargain",
      explicitMod: "禁用",
      flavourText: "追逐权力，正如追求财富，到头两手空空。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheBargain.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "渴求",
      href: "https://poedb.tw/cn/The_Craving",
      type: "The Craving",
      explicitMod: '<span class="uniqueitem">无尽渴望</span>',
      flavourText: "为何一时突发奇想会变成瘙痒难耐的渴望。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheCraving.png",
      Tags: "unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "友谊",
      href: "https://poedb.tw/cn/Friendship",
      type: "Friendship",
      explicitMod: "禁用",
      flavourText: "“点燃你的生命，寻求为你添柴之人。”\n\n- 瓦尔人鲁米",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/Friendship.png",
      Tags: "divination_card"
    },
    {
      name: "兵法家",
      href: "https://poedb.tw/cn/The_Strategist",
      type: "The Strategist",
      explicitMod: '<span class="uniqueitem">求知的热情</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "知己知彼，百战不殆。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheStrategist.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "阿凯的预言",
      href: "https://poedb.tw/cn/Akils_Prophecy",
      type: "Akils Prophecy",
      explicitMod: '<span class="uniqueitem">权贵圆盾</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">腐化</span>',
      flavourText: "{那位哈图纳格斯所学包罗万象，\n因为时间本身就繁如巨网。}",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/AkilsProphecy.png",
      Tags: "armour_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_armour_divination, divination_card"
    },
    {
      name: "轻松漫步",
      href: "https://poedb.tw/cn/The_Easy_Stroll",
      type: "The Easy Stroll",
      explicitMod: '<span class="rareitem">地图</span><br/><span class="default">地图位阶：</span> <span class="normal">15</span><br/><span class="default">词缀：</span> <span class="normal">8</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "“我出去散散步，很快就回来。”\n\n——布兰卡的遗言",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/TheEasyStroll.png",
      Tags: "maps_divination, corrupted_divination, divination_card"
    },
    {
      name: "风滚草",
      href: "https://poedb.tw/cn/The_Tumbleweed",
      type: "The Tumbleweed",
      explicitMod: '<span class="size-30"><span class="magicitem">救赎钻戒</span><br/><span class="default">物品等级：</span><span class="normal">100</span><br/><span class="default">救赎者物品</span></span>',
      flavourText: "屈服于这片废土之后，爱是唯一的一丝救赎。",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/TheTumbleWeed.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "猫咪议会",
      href: "https://poedb.tw/cn/Council_of_Cats",
      type: "Council of Cats",
      explicitMod: '<span class="uniqueitem">法瑞尔物品</span>',
      flavourText: "{万众瞩目，\n静候日暮，\n呼啸如影，\n守株待兔}",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/CounciloOfCats.png",
      Tags: "unique_divination, boss_drop_card, divination_card"
    },
    {
      name: "狼王的遗产",
      href: "https://poedb.tw/cn/The_Wolfs_Legacy",
      type: "The Wolfs Legacy",
      explicitMod: '<span class="uniqueitem">阿兹里的秘宝库</span>',
      flavourText: "狂啸与轻笑均无法掩饰悲伤。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheWolfsLegacy.png",
      Tags: "maps_divination, unique_divination, maps_unique_divination, divination_card"
    },
    {
      name: "月影的子嗣",
      href: "https://poedb.tw/cn/The_Progeny_of_Lunaris",
      type: "The Progeny of Lunaris",
      explicitMod: '<span class="uniqueitem">逝日</span>',
      flavourText: "生沐银芒，佩月之光，\n倾其全力，颠覆阴阳。",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/TheProgenyofLunaris.png",
      Tags: "shaper_divination, unique_divination, boss_drop_card, divination_card"
    },
    {
      name: "咒诅之灵",
      href: "https://poedb.tw/cn/The_Damned",
      type: "The Damned",
      explicitMod: '<span class="uniqueitem">裂魂者</span>',
      flavourText: "{鲜血裹挟着灵魂，\n逃向新的栖身之地。}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheDamned.png",
      Tags: "unique_divination, boss_drop_card, divination_card"
    },
    {
      name: "出老千",
      href: "https://poedb.tw/cn/The_Cheater",
      type: "The Cheater",
      explicitMod: '<span class="size-30"><span class="gemitem">6 级强化辅助宝石</span></span><br/><span class="default">品质：</span> <span class="augmented">+20%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "有时候为了成功免不了走点捷径。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheCheater.png",
      Tags: "corrupted_divination, gems_divination, gems_quality_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "神圣的正义",
      href: "https://poedb.tw/cn/Divine_Justice",
      type: "Divine Justice",
      explicitMod: '<span class="uniqueitem">聚光之石</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "寻求女神赐福者众，通过迷宫幸存者寡。",
      stack: 1,
      icon: "https://poe.game.qq.com/image/divination-card/DivineJustice.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "修补匠之桌",
      href: "https://poedb.tw/cn/The_Tinkerers_Table",
      type: "The Tinkerers Table",
      explicitMod: '<span class="currencyitem">5x 化石</span>',
      flavourText: "将幻象融入现实，足以让人发狂。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheTinkerersTable.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "裂界之殇",
      href: "https://poedb.tw/cn/The_Eldritch_Decay",
      type: "The Eldritch Decay",
      explicitMod: '<span class="whiteitem">至高裂界者碎片</span>',
      flavourText: "时间终将摧毁一切，但有人渴望将其加速。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheEldritchDecay.png",
      Tags: "shaper_divination, elder_divination, boss_drop_card, divination_card"
    },
    {
      name: "安赛娜丝的馈赠",
      href: "https://poedb.tw/cn/Gift_of_Asenath",
      type: "Gift of Asenath",
      explicitMod: '<span class="uniqueitem">安赛娜丝的安抚之语</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "金色丝克玛的话语能化解累世仇怨。然而之后却又添新愁。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/GiftOfAsenath.png",
      Tags: "armour_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_armour_divination, divination_card"
    },
    {
      name: "知识之巢",
      href: "https://poedb.tw/cn/The_Hive_of_Knowledge",
      type: "The Hive of Knowledge",
      explicitMod: '<span class="uniqueitem">马奇纳护手</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "经年累月，精益求精，力量方成。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheHiveOfKnowledge.png",
      Tags: "armour_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_armour_divination, divination_card"
    },
    {
      name: "安宁之时",
      href: "https://poedb.tw/cn/Peaceful_Moments",
      type: "Peaceful Moments",
      explicitMod: '<span class="uniqueitem">永恒珠宝</span>',
      flavourText: "品味这一刻吧，它将不复再来。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/PeacefulMoments.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "给养",
      href: "https://poedb.tw/cn/The_Sustenance",
      type: "The Sustenance",
      explicitMod: "禁用",
      flavourText: "她取走自己的一切，只为追求自己的渴望。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheSustenance.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "觉醒",
      href: "https://poedb.tw/cn/The_Awakened",
      type: "The Awakened",
      explicitMod: '<span class="rareitem">珠宝</span><br/><span class="default">物品等级：</span> <span class="normal">86</span><br/><span class="default">双重影响物品</span>',
      flavourText: "有些人一辈子都想改变世界，然而有些人在探寻途中就改变了世界。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheAwakened.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "至高之愿",
      href: "https://poedb.tw/cn/The_Greatest_Intentions",
      type: "The Greatest Intentions",
      explicitMod: '<span class="uniqueitem">救世者</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "朝光明追求纯净如同面对灵魂的黑暗。",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TheGreatestIntentions.png",
      Tags: "weapon_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_weapon_divination, boss_drop_card, divination_card"
    },
    {
      name: "风中之语",
      href: "https://poedb.tw/cn/A_Note_in_the_Wind",
      type: "A Note in the Wind",
      explicitMod: '<span class="uniqueitem">安赛娜丝的迅敏之冠</span>',
      flavourText: "{作者早已死亡，\n旋律早被遗忘，\n然而这首战歌势必再次唱响。}",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/ANoteInTheWind.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "猛烈绽放",
      href: "https://poedb.tw/cn/The_Bitter_Blossom",
      type: "The Bitter Blossom",
      explicitMod: '<span class="gemitem">21 级混沌宝石 </span><span class="default">品质：</span> <span class="augmented">+23%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "这并非是为了让你痛苦，而是为了进化，为了让你成为伟大的一份子。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheBitterBlossom.png",
      Tags: "corrupted_divination, gems_divination, gems_quality_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "长线钓鱼",
      href: "https://poedb.tw/cn/The_Long_Con",
      type: "The Long Con",
      explicitMod: '<span class="currencyitem">裂界毁灭者的崇高石</span>',
      flavourText: "“这是我人生中引以为傲的时刻。”\n\n“……过了这么久。”",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheLongCon.png",
      Tags: "currency_divination, currency_exotic_divination, boss_drop_card, divination_card"
    },
    {
      name: "普罗米修斯之备",
      href: "https://poedb.tw/cn/Prometheus_Armoury",
      type: "Prometheus Armoury",
      explicitMod: '<span class="rareitem">单手武器</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">双重影响物品</span>',
      flavourText: "追求不可理解的力量正是凡人的悲哀。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/PrometheusArmory.png",
      Tags: "weapon_divination, boss_drop_card, divination_card"
    },
    {
      name: "十三大忌",
      href: "https://poedb.tw/cn/Triskaidekaphobia",
      type: "Triskaidekaphobia",
      explicitMod: '<span class="size-26"><span class="rareitem">地图</span></span><br/><span class="size-26"><span class="default">地图位阶：</span> <span class="normal">13</span><br/><span class="default">品质：</span> <span class="augmented">+13%</span><br/><span class="default">惊悸迷雾：</span> <span class="normal">100%</span><br/><span class="default">词缀：</span> <span class="normal">8</span><br/><span class="corrupted">已腐化</span></span>',
      flavourText: "疯狂的迷雾追寻着那些在深埋恐惧中的猎物。",
      stack: 13,
      icon: "https://poe.game.qq.com/image/divination-card/Triskaidekaphobia.png",
      Tags: "maps_divination, corrupted_divination, divination_card"
    },
    {
      name: "莽撞的野心",
      href: "https://poedb.tw/cn/Reckless_Ambition",
      type: "Reckless Ambition",
      explicitMod: '<span class="uniqueitem">至高天堂</span>',
      flavourText: "既然永不满足，何必停留。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/RecklessAmbition.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "天人永隔",
      href: "https://poedb.tw/cn/The_Gulf",
      type: "The Gulf",
      explicitMod: '<span class="uniqueitem">希望之线</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{我以为真爱强过一切，\n可时间和孤独却远胜疯狂。}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheGulf.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "一厢情愿",
      href: "https://poedb.tw/cn/Unrequited_Love",
      type: "Unrequited Love",
      explicitMod: '<span class="currencyitem">19x 镜子碎片</span>',
      flavourText: "{他心中惨白的火焰在蔚蓝色的映衬中消失了。\n那是他的毕生心血，雄心勃勃，\n却无法完成。}",
      stack: 16,
      icon: "https://poe.game.qq.com/image/divination-card/UnrequitedLove.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "熟悉的呼唤",
      href: "https://poedb.tw/cn/A_Familiar_Call",
      type: "A Familiar Call",
      explicitMod: '<span class="magicitem">法瑞尔珠宝</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">塑界者和狩猎者物品</span>',
      flavourText: "强大的女猎人总想要她的钱，\n但这个钱得拿一辈子来换。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/AFamiliarCall.png",
      Tags: "jewellery_divination, shaper_divination, boss_drop_card, divination_card"
    },
    {
      name: "兄弟的秘藏",
      href: "https://poedb.tw/cn/Brothers_Stash",
      type: "Brothers Stash",
      explicitMod: '<span class="currencyitem">5x 崇高石</span>',
      flavourText: "即使他及时找到这批秘藏，他也宁愿用它们全部来换他生还。",
      stack: 1,
      icon: "https://poe.game.qq.com/image/divination-card/BrothersStash.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "漫长守望",
      href: "https://poedb.tw/cn/The_Long_Watch",
      type: "The Long Watch",
      explicitMod: "禁用",
      flavourText: "{暴雨滂沱，足陷深泥，思其牵挂，信念弥坚。}",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheLongWatch.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "白衣骑士",
      href: "https://poedb.tw/cn/The_White_Knight",
      type: "The White Knight",
      explicitMod: '<span class="whiteitem">六连星芒战铠</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">圣战者物品</span>',
      flavourText: "腐坏所至，我必随行，铸其丰碑，耀我功绩。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheWhiteKnight.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "雪盲",
      href: "https://poedb.tw/cn/The_Whiteout",
      type: "The Whiteout",
      explicitMod: '<span class="uniqueitem">卡斯普里怨恨</span>',
      flavourText: "{他们觉得冬天来得太早，\n冰雪笼罩大地，\n但事实上，他们的鸡群\n早已回家休憩。}",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheWhiteout.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "星象学家",
      href: "https://poedb.tw/cn/The_Astromancer",
      type: "The Astromancer",
      explicitMod: '<span class="size-27&gt;&lt;uniqueitem">永恒幽影</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{有人说他很危险，\n毫无道德禁忌，\n但这有什么，\n难道他不爱全人类，\n他的成果不会惠及所有人吗？}",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheAstromancer.png",
      Tags: "armour_divination, shaper_divination, elder_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "恶言诅咒",
      href: "https://poedb.tw/cn/Cursed_Words",
      type: "Cursed Words",
      explicitMod: '<span class="uniqueitem">害人之口</span>',
      flavourText: "如果你足够努力地寻找隐藏的含义，就会发现它。",
      stack: 13,
      icon: "https://poe.game.qq.com/image/divination-card/CursedWords.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "意外收获",
      href: "https://poedb.tw/cn/The_Unexpected_Prize",
      type: "The Unexpected Prize",
      explicitMod: '<span class="size-29"><span class="uniqueitem">属性变化珠宝</span></span><br/><span class="size-29"><span class="corrupted">腐化</span></span>',
      flavourText: "{他们远道而来，扛着共同的大旗。\n他们寻求友谊和竞赛，\n却找到了意外的宝藏。}",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/TheUnexpectedPrize.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, unique_corrupted_divination, unique_corrupted_divination, divination_card"
    },
    {
      name: "被亵渎的美德",
      href: "https://poedb.tw/cn/Desecrated_Virtue",
      type: "Desecrated Virtue",
      explicitMod: '<span class="size-29"><span class="gemitem">6 级强化辅助宝石</span></span><br/><span class="default">品质：</span> <span class="augmented">+23%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{空洞的美德将被肢解，\n它们被贪婪玷污，\n被残暴攫取。}",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/DesecratedVirtue.png",
      Tags: "corrupted_divination, gems_divination, gems_quality_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "萨博辛之智",
      href: "https://poedb.tw/cn/Sambodhis_Wisdom",
      type: "Sambodhis Wisdom",
      explicitMod: '<span class="uniqueitem">护甲</span><br/><span class="default">品质：</span><span class="augmented">+30%</span>',
      flavourText: "{没有剑刃可以战胜罪恶；\n引导一个罪人走向美德，\n揭开他遗失的视野——\n你的眼睛也将看到\n所有人心中的孩童，\n无论他们多么强大。}",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/SambodhisWisdom.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "密藏",
      href: "https://poedb.tw/cn/The_Cache",
      type: "The Cache",
      explicitMod: '<span class="uniqueitem">饰品</span>',
      flavourText: "{精美古董闪闪发亮\n拭去尘腐显露金光\n大小宝贝尽藏一箱\n勘探千里皆我辛劳\n故我所获无需献牢！\n左思右考为何苦恼\n哪件宝贝迎我心坳？\n这件珠宝让我显高\n可它能否配我发梢？}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheCache.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "命中注定",
      href: "https://poedb.tw/cn/Fateful_Meeting",
      type: "Fateful Meeting",
      explicitMod: '<span class="uniqueitem">赛季专属物品</span><br/><span class="default">双重影响效果物品</span><br/><br/><span class="default">物品等级：</span> <span class="normal">97</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{有人如灯塔般照亮世界，我有幸遇见了其中一人。\n\n——安东至曾雅的信}",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/FatefulMeeting.png",
      Tags: "unique_divination, corrupted_divination, unique_corrupted_divination, boss_drop_card, divination_card"
    },
    {
      name: "破灭之诺",
      href: "https://poedb.tw/cn/Broken_Promises",
      type: "Broken Promises",
      explicitMod: '<span class="whiteitem">宝钻戒指</span><br/><span class="default">物品等级：</span> <span class="normal">87</span><br/><span class="enchanted">二重基底</span>',
      flavourText: "寒冷不等于没有温暖，这是经验之谈。",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/BrokenPromises.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "破除枷锁",
      href: "https://poedb.tw/cn/Unchained",
      type: "Unchained",
      explicitMod: '<span class="uniqueitem">毁面者</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "赤手空拳去创造世界吧。当心，你的行为可能会导致败亡。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/Unchained.png",
      Tags: "armour_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_armour_divination, divination_card"
    },
    {
      name: "狗仔队",
      href: "https://poedb.tw/cn/The_Journalist",
      type: "The Journalist",
      explicitMod: '<span class="rareitem">头盔</span><br/><span class="default">双重解密物品</span>',
      flavourText: "优秀的间谍都懂得悄无声息。",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/TheJournalist.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "神恩之赐",
      href: "https://poedb.tw/cn/The_Card_Sharp",
      type: "The Card Sharp",
      explicitMod: '<span class="whiteitem">神恩圣甲虫</span>',
      flavourText: "“这一家总赢……直到我下场。”",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheCardSharp.png",
      Tags: "divination_card"
    },
    {
      name: "学院派",
      href: "https://poedb.tw/cn/The_Academic",
      type: "The Academic",
      explicitMod: '<span class="uniqueitem">求知的热情</span>',
      flavourText: "{“毕生奉献，\n换来的只有签名前的几行附注。”}",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheAcademic.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "梦之涟漪",
      href: "https://poedb.tw/cn/Draped_in_Dreams",
      type: "Draped in Dreams",
      explicitMod: '<span class="whiteitem">六连星芒战铠</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">影响效果物品</span>',
      flavourText: "我的衣服又沉又重。\n它就似一面帆，以生命为风，送我如梦。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/DrapedInDreams.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "守护者之腐",
      href: "https://poedb.tw/cn/Keepers_Corruption",
      type: "Keepers Corruption",
      explicitMod: '<span class="magicitem">古神的唤骨头盔 (集中效应效果)</span><br/><span class="default">物品等级：</span> <span class="normal">89</span><br/><span class="default">裂界者物品</span>',
      flavourText: "伟大的力量之后...\n\n...还有更伟大的力量。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/KeepersCorruption.png",
      Tags: "armour_divination, elder_divination, divination_card"
    },
    {
      name: "幽影纠缠",
      href: "https://poedb.tw/cn/Haunting_Shadows",
      type: "Haunting Shadows",
      explicitMod: '<span class="uniqueitem">灾变物品</span>',
      flavourText: "夜幕让你逃避阴影，\n清晨它将再次上门。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/HauntingShadows.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "流放兄弟会",
      href: "https://poedb.tw/cn/Brotherhood_in_Exile",
      type: "Brotherhood in Exile",
      explicitMod: '<span class="uniqueitem">徒手空拳</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{为避冷夜寻庐庵，\n草肆虽残酒却暖，\n往日冤仇皆作罢，\n交杯换盏俱尽欢。}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/BrotherhoodInExile.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "熊女",
      href: "https://poedb.tw/cn/The_Bear_Woman",
      type: "The Bear Woman",
      explicitMod: '<span class="magicitem">丰饶的熊首皮盔</span><br/><span class="default">督军物品</span>',
      flavourText: "{赐福之熊，睡于洞中，\n百日寂静，黑暗为伴，\n待月盈凸，去其毛皮\n熊获重生，再造为人。}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheBearWoman.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "致命之愉",
      href: "https://poedb.tw/cn/Deadly_Joy",
      type: "Deadly Joy",
      explicitMod: '<span class="uniqueitem">沧海桑田</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{“天下之道，唯快不破。”\n——收容所的瑞塔}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/DeadlyJoy.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "笔墨横姿",
      href: "https://poedb.tw/cn/Brush%2C_Paint_and_Palette",
      type: "Brush%2C Paint and Palette",
      explicitMod: '<span class="divination">艺者</span>',
      flavourText: "“世界由人塑造，而这里则塑造人。”——审判者马利伽罗",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/BrushPaintAndPalette.png",
      Tags: "gives_other_cards_divination, divination_card"
    },
    {
      name: "永恒之战",
      href: "https://poedb.tw/cn/The_Eternal_War",
      type: "The Eternal War",
      explicitMod: '<span class="uniqueitem">永恒珠宝</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "他们迅速坚信，只要有最强大的将领，便可不惧永世腐败。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheEternalWar.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "跨冰之恋",
      href: "https://poedb.tw/cn/Love_Through_Ice",
      type: "Love Through Ice",
      explicitMod: '<span class="uniqueitem">超自然本能</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "“我认识一位女士，情愿为她掏心”\n\n——寻梦者德拉克",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/LoveThroughIce.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "气候适应",
      href: "https://poedb.tw/cn/Acclimatisation",
      type: "Acclimatisation",
      explicitMod: '<span class="currencyitem">20x 改造石</span>',
      flavourText: "世界永远在变。\n茂林陷入黄沙，\n城池沉入波涛。\n不变即亡。",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/Acclimatisation.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "古道热肠",
      href: "https://poedb.tw/cn/The_Enthusiasts",
      type: "The Enthusiasts",
      explicitMod: '<span class="uniqueitem">维多里奥之绝响</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{“慈悲的光芒，\n掩盖了追逐权力的欲望，\n却潜移默化被它影响。”}",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheEnthusiasts.png",
      Tags: "armour_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_armour_divination, divination_card"
    },
    {
      name: "社团之悔",
      href: "https://poedb.tw/cn/Societys_Remorse",
      type: "Societys Remorse",
      explicitMod: '<span class="currencyitem">10x 改造石</span>',
      flavourText: "{我们生活在不属于我们的梦里，\n用虚假的故事填补灵魂的空虚，\n我们心有疑惑，\n这世界如此美丽，\n何需再造梦境。}",
      stack: 1,
      icon: "https://poe.game.qq.com/image/divination-card/SocietysRemorse.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "捷径",
      href: "https://poedb.tw/cn/The_Shortcut",
      type: "The Shortcut",
      explicitMod: '<span class="magicitem">猎豹之水银药剂</span><br/><span class="default">物品等级：</span><span class="normal">100</span>',
      flavourText: "如果时间最值钱，那你怎么挣时间？",
      stack: 1,
      icon: "https://poe.game.qq.com/image/divination-card/TheShortcut.png",
      Tags: "divination_card"
    },
    {
      name: "成见",
      href: "https://poedb.tw/cn/Prejudice",
      type: "Prejudice",
      explicitMod: '<span class="uniqueitem">物品</span><br/><span class="default">影响效果物品</span>',
      flavourText: "被过去蒙蔽双眼，就只能管中窥探当今。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/Prejudice.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "消逝的光芒",
      href: "https://poedb.tw/cn/Dying_Light",
      type: "Dying Light",
      explicitMod: '<span class="rareitem">宝钻戒指</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">塑界者+裂界者物品</span>',
      flavourText: "无上光明也将沦入黑暗。",
      stack: 10,
      icon: "https://poe.game.qq.com/image/divination-card/DyingLight.png",
      Tags: "jewellery_divination, shaper_divination, elder_divination, boss_drop_card, divination_card"
    },
    {
      name: "病患",
      href: "https://poedb.tw/cn/The_Patient",
      type: "The Patient",
      explicitMod: '<span class="divination">照料者</span>',
      flavourText: "我头疼欲裂，谁能为我请个护士？",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/ThePatient.png",
      Tags: "gives_other_cards_divination, divination_card"
    },
    {
      name: "冒险精神",
      href: "https://poedb.tw/cn/The_Adventuring_Spirit",
      type: "The Adventuring Spirit",
      explicitMod: '<span class="uniqueitem">维多里奥之绝响</span>',
      flavourText: "孩子，是你领导我的人取胜的吗？",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheAdventuringSpirit.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "微末的请求",
      href: "https://poedb.tw/cn/A_Modest_Request",
      type: "A Modest Request",
      explicitMod: '<span class="uniqueitem">妄想症</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{放弃所有权力和财富，永世向我效忠。\n我保证这个代价微不足道。}",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/AModestRequest.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "锃亮的宝箱",
      href: "https://poedb.tw/cn/Luminous_Trove",
      type: "Luminous Trove",
      explicitMod: '<span class="uniqueitem">天神之音</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{许多人进来寻觅梦中宝藏\n有二十人负伤，在奔逃中命丧\n暗影滋生，剩余的必亡\n有五人没了眼睛，在黑暗中惨叫\n一对粗心的兄弟，进了巫妖的罗网\n国王略施小计，人人皆入圈套\n葛海尼克斯在低语中举觞}",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/LuminousTrove.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "凛冬之拥",
      href: "https://poedb.tw/cn/Winters_Embrace",
      type: "Winters Embrace",
      explicitMod: '<span class="uniqueitem">恐惧之环</span><br/><span class="enchanted">三重基底</span>',
      flavourText: "{快回家吧，宝贝。\n原来你已经回来！\n快跟我在黑暗中躺下。\n我就会原谅你。\n恐惧将离你远去。}",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/WintersEmbrace.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "无价之宝",
      href: "https://poedb.tw/cn/Costly_Curio",
      type: "Costly Curio",
      explicitMod: '<span class="uniqueitem">物品</span><br/><span class="default">二重基底</span>',
      flavourText: "“唉，我可买不起这么好的艺术品，我只是……看看。”",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/CostlyCurio.png",
      Tags: "unique_divination, boss_drop_card, divination_card"
    },
    {
      name: "万事皆空",
      href: "https://poedb.tw/cn/The_Emptiness",
      type: "The Emptiness",
      explicitMod: '<span class="gemitem">瓦尔裂隙</span><br/><span class="default">品质：</span> <span class="augmented">+6%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "他一来到光明吞噬者面前，就立刻发现自己大难临头。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheEmptiness.png",
      Tags: "corrupted_divination, gems_divination, gems_quality_divination, boss_drop_card, divination_card"
    },
    {
      name: "苗裔",
      href: "https://poedb.tw/cn/The_Offspring",
      type: "The Offspring",
      explicitMod: '<span class="uniqueitem">瑞斯拉萨的线圈</span>',
      flavourText: "蜂群一开始只有几个孩子，如今已经是她的一切生命。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheOffspring.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "预见的代价",
      href: "https://poedb.tw/cn/The_Price_of_Prescience",
      type: "The Price of Prescience",
      explicitMod: '<span class="rareitem">瓦尔密殿地图</span><br/><span class="default">地图位阶：</span> <span class="normal">16</span><br/><span class="default">惊悸迷雾：</span> <span class="normal">100%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{陌生的声音向奥尔展示了一个未来，在那里他所有遗产都统统遭到遗忘，在奥尔的世界化为废墟之后，诞生了一种全新的文化。}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/ThePriceOfPrescience.png",
      Tags: "maps_divination, corrupted_divination, divination_card"
    },
    {
      name: "心灵之眼",
      href: "https://poedb.tw/cn/The_Minds_Eyes",
      type: "The Minds Eyes",
      explicitMod: '<span class="uniqueitem">星界投影</span>',
      flavourText: "{通过人的眼睛可以直视灵魂\n通过珠宝的眼睛可以看到整个宇宙}",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheMindsEyes.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "最后的晚餐",
      href: "https://poedb.tw/cn/The_Last_Supper",
      type: "The Last Supper",
      explicitMod: '<span class="uniqueitem">比诺的厨刀</span>',
      flavourText: "“比诺短暂的厨师生涯给刽子手们节约了大量工作。”",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheLastSupper.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "蔚蓝之海",
      href: "https://poedb.tw/cn/A_Sea_of_Blue",
      type: "A Sea of Blue",
      explicitMod: '<span class="currencyitem">13x 改造石</span>',
      flavourText: "收割结束，洪水开始。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/ASeaOfBlue.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "洪荒秘辛",
      href: "https://poedb.tw/cn/Terrible_Secret_of_Space",
      type: "Terrible Secret of Space",
      explicitMod: '<span class="Gemitem">21 级 改造魔像宝石</span><br/><span class="default">品质：</span> <span class="augmented">+23%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "听说他们是来保护我们的。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TerribleSecretOfSpace.png",
      Tags: "corrupted_divination, gems_divination, gems_quality_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "钩子",
      href: "https://poedb.tw/cn/The_Hook",
      type: "The Hook",
      explicitMod: '<span class="Gemitem">21 级改造宝石</span><br/><span class="default">品质：</span> <span class="augmented">+23%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "每一次沉迷都从懵懂的尝试开始。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheHook.png",
      Tags: "corrupted_divination, gems_divination, gems_quality_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "穆希保佑",
      href: "https://poedb.tw/cn/The_Blessing_of_Moosh",
      type: "The Blessing of Moosh",
      explicitMod: '<span class="Gemitem">21 级改造宝石</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "虽说迷宫困住了无数冒险者，可他们在设计的时候明显忘了猫儿。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheBlessingOfMoosh.png",
      Tags: "armour_divination, unique_divination, divination_card"
    },
    {
      name: "泪腺坏死",
      href: "https://poedb.tw/cn/Lachrymal_Necrosis",
      type: "Lachrymal Necrosis",
      explicitMod: '<span class="rareitem">珠宝</span><br/><span class="enchanted">基底词缀：</span> <br/><span class="magicitem">腐化之血影响不了你</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "心若不会哭泣，就会既反对纯洁，也反对腐坏。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/LachrymalNecrosis.png",
      Tags: "jewellery_divination, corrupted_divination, divination_card"
    },
    {
      name: "执着的野心",
      href: "https://poedb.tw/cn/Ambitious_Obsession",
      type: "Ambitious Obsession",
      explicitMod: '<span class="currencyitem">迷踪的雾魇宝珠</span>',
      flavourText: "世界上最可怜的人就是有眼无珠之辈。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/AmbitiousObsession.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "隐情",
      href: "https://poedb.tw/cn/The_Catch",
      type: "The Catch",
      explicitMod: '<span class="whiteitem">鱼竿</span><br/><span class="enchanted">已孕育</span><br/><span class="default">物品等级：</span> <span class="normal">99</span>',
      flavourText: "最大的鱼钩能钓起最大的鱼儿，可他们往往得到的只有鱼钩。",
      stack: 18,
      icon: "https://poe.game.qq.com/image/divination-card/TheCatch.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "永恒羁绊",
      href: "https://poedb.tw/cn/Eternal_Bonds",
      type: "Eternal Bonds",
      explicitMod: '<span class="uniqueitem">脑层</span>',
      flavourText: "一盘散沙，事不成。\n精诚团结，事竟成。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/EternalBonds.png",
      Tags: "maps_divination, unique_divination, maps_unique_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "完美之石",
      href: "https://poedb.tw/cn/A_Stone_Perfected",
      type: "A Stone Perfected",
      explicitMod: '<span class="uniqueitem">珠宝</span><br/><span class="magicitem">起源</span><br/><span class="corrupted">1-2 个基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{他们赋予顽石生命。在腐坏中浸淫千载之后，生命得到了进化。}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/AStonePerfected.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "不完美的回忆",
      href: "https://poedb.tw/cn/Imperfect_Memories",
      type: "Imperfect Memories",
      explicitMod: '<span class="rareitem">饰品</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="enchanted">三重基底</span><br/><span class="enchanted">忆境</span>',
      flavourText: "一切都会被时间侵蚀，然而消磨的棱角偶尔会化为无比美妙的回忆。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/ImperfectMemories.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "绝望圣战",
      href: "https://poedb.tw/cn/Desperate_Crusade",
      type: "Desperate Crusade",
      explicitMod: '<span class="uniqueitem">元素的庇护</span>',
      flavourText: "顽强的毅力经受过逆境的磨难，方能获得无上奖赏。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/DesperateCrusade.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "恐魔症",
      href: "https://poedb.tw/cn/Dementophobia",
      type: "Dementophobia",
      explicitMod: '<span class="currencyitem">10x 雾魇宝珠</span>',
      flavourText: "{我从不知道自己有多疯，\n直到有一天听到一个声音招呼我走进深渊，\n那里只有我一个。}",
      stack: 11,
      icon: "https://poe.game.qq.com/image/divination-card/Dementophobia.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "二刀流",
      href: "https://poedb.tw/cn/Duality",
      type: "Duality",
      explicitMod: '<span class="whiteitem">身体护甲</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="default">双重影响效果物品</span>',
      flavourText: "善恶交织在一起可以化为更伟大的东西。",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/Duality.png",
      Tags: "armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "瓦尔宝藏",
      href: "https://poedb.tw/cn/Treasures_of_the_Vaal",
      type: "Treasures of the Vaal",
      explicitMod: '<span class="uniqueitem">瓦尔珠宝</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{帝国的城市都遭到了后来人洗劫……\n只有一个例外。}",
      stack: 12,
      icon: "https://poe.game.qq.com/image/divination-card/TreasuresOfTheVaal.png",
      Tags: "unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "恒久榨取",
      href: "https://poedb.tw/cn/The_Tireless_Extractor",
      type: "The Tireless Extractor",
      explicitMod: '<span class="currencyitem">10x 圣油</span>',
      flavourText: '{我并非孤军奋战。神明与我同在！而且你也肯定会帮我的。"\n——卡西娅修女}',
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheTirelessExtractor.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "地摊货",
      href: "https://poedb.tw/cn/Bijoux",
      type: "Bijoux",
      explicitMod: '<span class="rareitem">星团珠宝</span><br/><span class="default">物品等级：</span><span class="normal">84</span>',
      flavourText: "这些小玩意儿在危机来临时才能彰显价值。——唐玛祖",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/Bijoux.png",
      Tags: "jewellery_divination, divination_card"
    },
    {
      name: "守卫的挑战",
      href: "https://poedb.tw/cn/Guardians_Challenge",
      type: "Guardians Challenge",
      explicitMod: '<span class="whiteitem">塑界守卫地图</span>',
      flavourText: "毫无准备挑战虚空便等于自寻死路。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/GuardiansChallenge.png",
      Tags: "shaper_divination, maps_divination, divination_card"
    },
    {
      name: "荆林之狐",
      href: "https://poedb.tw/cn/The_Fox_in_the_Brambles",
      type: "The Fox in the Brambles",
      explicitMod: '<span class="uniqueitem">刺棘宝甲</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "{海明沃斯第六章第十节- “狐狸从荆棘中探出脑袋，为没人够得着它而发笑。”}",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheFoxInTheBrambles.png",
      Tags: "armour_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_armour_divination, divination_card"
    },
    {
      name: "斥候",
      href: "https://poedb.tw/cn/The_Scout",
      type: "The Scout",
      explicitMod: '<span class="currencyitem">7x 崇高石</span>',
      flavourText: "头一批敢下海的人往往得到了丰厚的回报，可再多财富也救不活淹死的人。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheScout.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "变身",
      href: "https://poedb.tw/cn/The_Transformation",
      type: "The Transformation",
      explicitMod: '<span class="currencyitem">污秽神秘石</span>',
      flavourText: "哪怕最美丽的蜕变也有其黑暗面。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheTransformation.png",
      Tags: "currency_divination, currency_exotic_divination, divination_card"
    },
    {
      name: "死寂严冬",
      href: "https://poedb.tw/cn/Silence_and_Frost",
      type: "Silence and Frost",
      explicitMod: '<span class="uniqueitem">群魔殿</span>',
      flavourText: "哭吼吧！\n施放混沌！",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/SilenceAndFrost.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "被遗忘的宝藏",
      href: "https://poedb.tw/cn/The_Forgotten_Treasure",
      type: "The Forgotten Treasure",
      explicitMod: '<span class="uniqueitem">皮革腰带</span><br/><span class="default">双重影响物品</span>',
      flavourText: "{别让愚人金给骗了。}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheForgottenTreasure.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "黑暗半面",
      href: "https://poedb.tw/cn/Darker_Half",
      type: "Darker Half",
      explicitMod: '<span class="currencyitem">5x古灵混沌石</span>',
      flavourText: "当找到你要找的东西时，它永远不会完全正确。当拥有想要的，你还想要更多。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheDarkerHalf.png",
      Tags: "currency_divination, currency_exotic_divination, divination_card"
    },
    {
      name: "审判之音",
      href: "https://poedb.tw/cn/Judging_Voices",
      type: "Judging Voices",
      explicitMod: '<span class="uniqueitem">禁断的军帽</span>',
      flavourText: "他想要理智之道，却败给了心魔。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/JudgingVoices.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "黑暗君王",
      href: "https://poedb.tw/cn/The_Prince_of_Darkness",
      type: "The Prince of Darkness",
      explicitMod: '<span class="uniqueitem">优雅的狂妄</span>',
      flavourText: "{为了力量不择手段的人值得人惧怕。}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/ThePrinceOfDarkness.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "强壮的战斗法师",
      href: "https://poedb.tw/cn/The_Brawny_Battle_Mage",
      type: "The Brawny Battle Mage",
      explicitMod: '<span class="magicitem">无情狂风法杖</span><br/><span class="default">物品等级：</span><span class="normal">100</span>',
      flavourText: "一块不起眼的木头，可以为生活中遇到的问题提供最简单的解决方案:那是狠狠地揍它们。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheBrawnyBattleMage.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "离开的人是你",
      href: "https://poedb.tw/cn/The_One_That_Got_Away",
      type: "The One That Got Away",
      explicitMod: '<span class="uniqueitem">凝息【仿品】</span>',
      flavourText: "{品味生活中缺失的东西吧。\n人生的最终目标\n就是咽下最后一口气。}",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheOneThatGotAway.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "目的地",
      href: "https://poedb.tw/cn/The_Destination",
      type: "The Destination",
      explicitMod: '<span class="uniqueitem">守望之眼</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "你也许在众人眼里不值一提，但在有些人眼里你就是一切。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheDestination.png",
      Tags: "unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "雄心",
      href: "https://poedb.tw/cn/The_Aspirant",
      type: "The Aspirant",
      explicitMod: '<span class="magicitem">物品</span><br/><span class="default">尊崇物品</span><br/><span class="default">影响效果物品</span>',
      flavourText: "{在瓦尔克拉斯活下来的流放者\n想要的不是家园，而是力量。}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/Dream.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "比死亡更悲惨的命运",
      href: "https://poedb.tw/cn/A_Fate_Worse_Than_Death",
      type: "A Fate Worse Than Death",
      explicitMod: '<span class="uniqueitem">脑层</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "“就好像我的思想全都分崩析离……它们碎裂成微粒，随风而散。”",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/AFateWorseThanDeath.png",
      Tags: "unique_divination, corrupted_divination, unique_corrupted_divination, maps_divination, maps_unique_divination, divination_card"
    },
    {
      name: "幸运兔脚",
      href: "https://poedb.tw/cn/The_Rabbits_Foot",
      type: "The Rabbits Foot",
      explicitMod: '<span class="currencyitem">10x 穿越魔瓶</span>',
      flavourText: "大家都说，佩戴这种饰品的流放者是瓦尔克拉斯最幸运的。众神对此很不乐意，于是给胆敢抛弃它的人降下永恒的诅咒。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheRabbitsFoot.png",
      Tags: "currency_divination, currency_league_divination, boss_drop_card, divination_card"
    },
    {
      name: "更新发明",
      href: "https://poedb.tw/cn/Further_Invention",
      type: "Further Invention",
      explicitMod: '<span class="magicitem">头部</span><br/><span class="default">双重影响物品</span><br/><span class="default">物品等级：</span><span class="normal">100</span>',
      flavourText: "不可兼得？",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/FurtherInvention.png",
      Tags: "armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "蔑视",
      href: "https://poedb.tw/cn/Disdain",
      type: "Disdain",
      explicitMod: '<span class="currencyitem">雾魇宝珠</span>',
      flavourText: "{没人知道一切，但你这辈子知道的一定比别人多。}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/Disdain.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "代表作",
      href: "https://poedb.tw/cn/Magnum_Opus",
      type: "Magnum Opus",
      explicitMod: '<span class="whiteitem">物品</span><br/><span class="default">物品等级：</span><span class="normal">100</span><br/><span class="enchanted">三重基底</span><br/><span class="enchanted">忆境</span>',
      flavourText: "瓦尔克拉斯必将统一。我将完成如此伟业，将万众凝聚一心。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/MagnumOpus.png",
      Tags: "divination_card"
    },
    {
      name: "熔岩蟹",
      href: "https://poedb.tw/cn/The_Magma_Crab",
      type: "The Magma Crab",
      explicitMod: '<span class="gemitem">21 级瓦尔熔岩护盾</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "饮下活石，血脉喷张。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheMagmaCrab.png",
      Tags: "corrupted_divination, gems_divination, gems_levelled_divination, divination_card"
    },
    {
      name: "寄生客",
      href: "https://poedb.tw/cn/Parasitic_Passengers",
      type: "Parasitic Passengers",
      explicitMod: '<span class="currencyitem">10x 孕育石</span><br/><span class="default">物品等级：</span> <span class="normal">84</span>',
      flavourText: "死亡的滋养让它们日益强壮，终于等到了孵化的时刻……",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/ParasiticPassengers.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "志向高远",
      href: "https://poedb.tw/cn/Justified_Ambition",
      type: "Justified Ambition",
      explicitMod: '<span class="uniqueitem">忆境地图</span>',
      flavourText: "“我做的一切都是为了瓦尔克拉斯。如果你经历过我的遭遇也会做出同样的选择。而且那很快就会到来。”\n——神主维纳留斯",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/JustifiedAmbition.png",
      Tags: "maps_divination, unique_divination, maps_unique_divination, divination_card"
    },
    {
      name: "风险追逐",
      href: "https://poedb.tw/cn/Chasing_Risk",
      type: "Chasing Risk",
      explicitMod: '<span class="uniqueitem">忆境物品</span>',
      flavourText: "美好的回忆勾起了我的乡愁。有些人会感到内疚，可我从不因为惧怕自己的野心而懊悔。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/ChasingRisk.png",
      Tags: "unique_divination, boss_drop_card, divination_card"
    },
    {
      name: "放远目光",
      href: "https://poedb.tw/cn/The_Forward_Gaze",
      type: "The Forward Gaze",
      explicitMod: '<span class="uniqueitem">仿品</span>',
      flavourText: "“当他们意识到我们的真正意图时，他们会谴责我们，攻击我们，并试图摧毁我们建立的一切。我们必须傲然屹立，科塔拉，我们要创造自己的未来。”",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/TheForwardGaze.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "药剂师",
      href: "https://poedb.tw/cn/The_Apothecary",
      type: "The Apothecary",
      explicitMod: '<span class="uniqueitem">法师之血</span>',
      flavourText: "“你想要我最强药剂提供的力量，但代价恐怕远超你的想象。”",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/TheApothecary.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "黑暗之苦",
      href: "https://poedb.tw/cn/Misery_in_Darkness",
      type: "Misery in Darkness",
      explicitMod: '<span class="uniqueitem">泯光寿衣</span>',
      flavourText: "{他在遍地骸骨的深渊里游荡，期望每一个角落都是最后一次探索。\n最后，他找到了光。}",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/MiseryInDarkness.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "重生与新生",
      href: "https://poedb.tw/cn/Rebirth_and_Renewal",
      type: "Rebirth and Renewal",
      explicitMod: "禁用",
      flavourText: "生命终有尽头，但那之后又会开始。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/RebirthAndRenewal.png",
      Tags: "divination_card"
    },
    {
      name: "家园",
      href: "https://poedb.tw/cn/Home",
      type: "Home",
      explicitMod: '<span class="gemitem">卓越宝石</span><br/><span class="default">品质：</span><span class="augmented">+1-20%</span>',
      flavourText: "世上有数不清的众生、故事和时代，但曾经有一个地方，人人都可以爱与被爱。这很重要，我们也重要。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/Home.png",
      Tags: "gems_divination, gems_quality_divination, divination_card"
    },
    {
      name: "多里亚尼的启蒙",
      href: "https://poedb.tw/cn/Doryanis_Epiphany",
      type: "Doryanis Epiphany",
      explicitMod: '<span class="Gemitem">21 级改造宝石</span><br/><span class="default">品质：</span> <span class="augmented">+20%</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "“美德宝石具有肉眼看不到的层面。让我们更深入观察...”",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/DoryanisEpiphany.png",
      Tags: "currency_divination, divination_card"
    },
    {
      name: "地下城大师",
      href: "https://poedb.tw/cn/The_Dungeon_Master",
      type: "The Dungeon Master",
      explicitMod: '<span class="uniqueitem">腰带</span><br/><span class="default">双重影响物品</span>',
      flavourText: "“我的控制欲如此强烈，我把我的整个世界都变成了一座监狱。现在你将来分担我的痛苦。”",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheDungeonMaster.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "改变知觉",
      href: "https://poedb.tw/cn/Altered_Perception",
      type: "Altered Perception",
      explicitMod: '<span class="currencyitem">梦魇拟像</span>',
      flavourText: "你可不能忘记：你无法离开这里。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/AlteredPerception.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "无尽夜晚",
      href: "https://poedb.tw/cn/Endless_Night",
      type: "Endless Night",
      explicitMod: '<span class="uniqueitem">马洛尼的技巧</span>',
      flavourText: "阳光不为我照耀。我在黑暗中行走，从未自由。当你们都死在我怀里时，时间停止了。",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/EndlessNight.png",
      Tags: "unique_divination, divination_card"
    },
    {
      name: "破碎休战",
      href: "https://poedb.tw/cn/Broken_Truce",
      type: "Broken Truce",
      explicitMod: '<span class="uniqueitem">寒铁刃</span>',
      flavourText: "仅仅一个举动，多年的和平付之东流。一个不知名的刺客给我们带来了战争。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/BrokenTruce.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "从骨到灰",
      href: "https://poedb.tw/cn/From_Bone_to_Ashes",
      type: "From Bone to Ashes",
      explicitMod: '<span class="uniqueitem">努葛玛呼之耀</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化</span>',
      flavourText: "数百年来，他们一直秘密守护着沉睡的女神，即使堕落的瓦尔帝国还在遍布污染。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/FromBonesToAshes.png",
      Tags: "weapon_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "牧羊人的凉鞋",
      href: "https://poedb.tw/cn/The_Shepherds_Sandals",
      type: "The Shepherds Sandals",
      explicitMod: '<span class="uniqueitem">靴子</span> <span class="default">物品等级</span> <span class="normal">100</span> <span class="corrupted">二重基底</span> <span class="corrupted">腐化</span>',
      flavourText: "{看着羊群的人自己也被那些无比忠诚的人看着。}",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheShepherdsSandals.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, unique_corrupted_divination, corrupted_divination, divination_card"
    },
    {
      name: "持盾人",
      href: "https://poedb.tw/cn/The_Shieldbearer",
      type: "The Shieldbearer",
      explicitMod: '<span class="uniqueitem">侍从</span>',
      flavourText: "你成长时，我是你的骑士，你是我的扈从。总有一天，你会成为家园的捍卫者。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/TheShieldbearer.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "执行官",
      href: "https://poedb.tw/cn/The_Enforcer",
      type: "The Enforcer",
      explicitMod: '<span class="magicitem">征服尖刺手部护甲（终结）</span> <span class="default">物品等级：</span> <span class="normal">86</span> <span class="default">大军阀物品</span>',
      flavourText: "{“首领说让他滚蛋，没说不要弄得一团糟。”-呆子符文}",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/TheEnforcer.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "窒息愧疚",
      href: "https://poedb.tw/cn/Choking_Guilt",
      type: "Choking Guilt",
      explicitMod: '<span class="uniqueitem">黑曜护身符</span>',
      flavourText: "随着死亡的临近，他变得难以捉摸。痛苦包围了他，把他拖进了黑暗。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/ChokingGuilt.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "天蓝之怒",
      href: "https://poedb.tw/cn/Azure_Rage",
      type: "Azure Rage",
      explicitMod: '<span class="magicitem">惩罚地图</span> <span class="default">地图等级：</span> <span class="normal">16</span>',
      flavourText: "{面具隐藏了他的身份，但也让人难以辨认...}",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/AzureRage.png",
      Tags: "maps_divination, divination_card"
    },
    {
      name: "挫败",
      href: "https://poedb.tw/cn/Checkmate",
      type: "Checkmate",
      explicitMod: '<span class="currencyitem">76x 梦魇拟像碎片</span>',
      flavourText: "当无法取胜时，我们每个人所做的只是为了拖延结局。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/Checkmate.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "海怪",
      href: "https://poedb.tw/cn/The_Leviathan",
      type: "The Leviathan",
      explicitMod: '<span class="uniqueitem">贤主物品</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">腐化</span>',
      flavourText: "{早在人类踏上这片土地之前，远古巨兽就在海洋深处游动。}",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/TheLeviathan.png",
      Tags: "unique_divination, corrupted_divination, unique_corrupted_divination, boss_drop_card, divination_card"
    },
    {
      name: "宝石匠的仁慈",
      href: "https://poedb.tw/cn/Gemcutters_Mercy",
      type: "Gemcutters Mercy",
      explicitMod: '<span class="gemitem">卓越宝石</span>',
      flavourText: "当你只能拥有一个的时候，你会选择哪个？红色？蓝色？可能是绿色。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/GemcuttersMercy.png",
      Tags: "gems_divination, divination_card"
    },
    {
      name: "星界防护",
      href: "https://poedb.tw/cn/Astral_Protection",
      type: "Astral Protection",
      explicitMod: '<span class="whiteitem">护盾</span> <span class="default">塑界者物品</span>',
      flavourText: "一段时间内，我们有比邪术更强大的东西。我们拥有彼此。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/AstralProtection.png",
      Tags: "armour_divination, shaper_divination, divination_card"
    },
    {
      name: "至美圣容",
      href: "https://poedb.tw/cn/Divine_Beauty",
      type: "Divine Beauty",
      explicitMod: '<span class="currencyitem">7x 神圣石</span>',
      flavourText: "{遥遥不知何处\n有一绝代佳人。\n她的微笑如春风化雨，\n她的歌声令万物动容，\n她的美貌乃举世无双；\n圣哉伊人。}",
      stack: 12,
      icon: "https://poe.game.qq.com/image/divination-card/DivineBeauty.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "遗忘诱惑",
      href: "https://poedb.tw/cn/Lethean_Temptation",
      type: "Lethean Temptation",
      explicitMod: '<span class="uniqueitem">内布利斯</span>',
      flavourText: "我的记忆无休止地折磨着我。为了逃避，我拥抱虚无，但遗忘只是带来了另一种痛苦...",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/LetheanTemptation.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, boss_drop_card, divination_card"
    },
    {
      name: "吉庆雄心",
      href: "https://poedb.tw/cn/Auspicious_Ambitions",
      type: "Auspicious Ambitions",
      explicitMod: '<span class="whiteitem">实验物品</span><br/><span class="default">物品等级：</span><span class="normal">100</span><br/><span class="default">双重影响物品</span>',
      flavourText: "{“凝视明镜，可知未来；然后退入无穷境界。”\n- 奇术升华者戴克希翁}",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/AuspiciousAmbitions.png",
      Tags: "boss_drop_card, divination_card"
    },
    {
      name: "黑暗之物",
      href: "https://poedb.tw/cn/Something_Dark",
      type: "Something Dark",
      explicitMod: '<span class="whiteitem">蓝图</span> <span class="default">区域等级：</span> <span class="normal">83</span> <span class="default">完全显示</span>',
      flavourText: "即使在黑暗中，你也能找到朋友。",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/SomethingDark.png",
      Tags: "divination_card"
    },
    {
      name: "灵魂淬火",
      href: "https://poedb.tw/cn/Soul_Quenched",
      type: "Soul Quenched",
      explicitMod: '<rareitem> {实验双手武器}<br/><span class="default">物品等级：</span> <span class="normal">86</span><br/><span class="default">品质：</span> <span class="augmented">+30%</span></rareitem>',
      flavourText: "{如此利器需要更为黑暗的锻造方式……}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/SoulQuenched.png",
      Tags: "weapon_divination, divination_card"
    },
    {
      name: "虔诚的代价",
      href: "https://poedb.tw/cn/The_Price_of_Devotion",
      type: "The Price of Devotion",
      explicitMod: '<span class="uniqueitem">法师之血</span><br/><span class="default">质量：</span> <span class="augmented">+20%</span><br/><span class="corrupted">二重基底</span><br/> <span class="corrupted">腐化</span>',
      flavourText: "{Atziri最优秀的奇术师并不知道，他们的忠诚需要做到比单纯的研究工作更多的奉献。}",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/ThePriceOfDevotion.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "刺客的馈赠",
      href: "https://poedb.tw/cn/Assassins_Gift",
      type: "Assassins Gift",
      explicitMod: '<span class="uniqueitem">戒律之影</span><br/><span class="corrupted">二重基底</span><br/><span class="corrupted">已腐化d</span>',
      flavourText: "{所谓生命真谛\n不在寿命长短，\n而在所留痕迹。}",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/AssassinsGift.png",
      Tags: "weapon_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "他的裁定",
      href: "https://poedb.tw/cn/His_Judgement",
      type: "His Judgement",
      explicitMod: "禁用",
      flavourText: "{禁用}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/HisJudgement.png",
      Tags: "armour_divination, divination_card"
    },
    {
      name: "失智猫咪",
      href: "https://poedb.tw/cn/The_Insane_Cat",
      type: "The Insane Cat",
      explicitMod: '<span class="uniqueitem">法师之血</span><br/><span class="default">物品等级：</span><span class="normal">84</span><br/><span class="corrupted">腐化</span>',
      flavourText: "一人之疯狂，他人之现实。",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/TheInsaneCat.png",
      Tags: "jewellery_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "套娃",
      href: "https://poedb.tw/cn/Matryoshka",
      type: "Matryoshka",
      explicitMod: '<span class="rareitem">黑曜护身符</span><br /><span class="default">物品等级：</span><span class="normal">85</span><br /><span class="default">品质：</span><span class="augmented">+20%</span><br /><span class="default">受影响物品</span><br /><span class="enchanted">4圣油</span><br /><span class="enchanted">魔符孕育物品</span><br /><span class="corrupted">腐化</span>',
      flavourText: "{我无法控制自己，\n只能发出几声吱叫，\n有那么多话想对你说，\n我要能说话就好了！}",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/Matryoshka.png",
      Tags: "jewellery_divination, corrupted_divination, boss_drop_card, divination_card"
    },
    {
      name: "艾莉薇娅之雅",
      href: "https://poedb.tw/cn/Alivias_Grace",
      type: "Alivias Grace",
      explicitMod: '<span class="uniqueitem">森林之后</span>',
      flavourText: "连最粗野的兽物也要拜倒在她的纯洁与优雅之下。",
      stack: 6,
      icon: "https://poe.game.qq.com/image/divination-card/AliviasGrace.png",
      Tags: "armour_divination, unique_divination, unique_armour_divination, divination_card"
    },
    {
      name: "无根之火",
      href: "https://poedb.tw/cn/Fire_Of_Unknown_Origin",
      type: "Fire Of Unknown Origin",
      explicitMod: '<span class="uniqueitem">尼米斯</span>',
      flavourText: "{信仰点燃了烈焰，\n在风中播撒狂热；\n以热忱促我们奋勇向前。}",
      stack: 7,
      icon: "https://poe.game.qq.com/image/divination-card/FireOfUnknownOrigin.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, boss_drop_card, divination_card"
    },
    {
      name: "一股寒风",
      href: "https://poedb.tw/cn/A_Chilling_Wind",
      type: "A Chilling Wind",
      explicitMod: '<span class="gemitem">21级瓦尔：霜暴</span><br/><span class="default">品质：</span> <span class="augmented">+20%</span><br/><span class="corrupted">腐化</span>',
      flavourText: "{凶猛地寒冬\n拖慢了万物——甚至是生命本身。}",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/AChillingWind.png",
      Tags: "gems_divination, unique_corrupted_divination, gems_levelled_divination, gems_quality_divination, divination_card"
    },
    {
      name: "兄弟赐福",
      href: "https://poedb.tw/cn/Brothers_Gift",
      type: "Brothers Gift",
      explicitMod: '<span class="currencyitem">5x 神圣石</span>',
      flavourText: "{尽管他的烈焰已经燃尽，\n但他永远不会消逝。}",
      stack: 1,
      icon: "https://poe.game.qq.com/image/divination-card/BrotherGift.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "毒浸信仰",
      href: "https://poedb.tw/cn/Poisoned_Faith",
      type: "Poisoned Faith",
      explicitMod: '<span class="uniqueitem">阿拉卡力之牙</span><br/><span class="corrupted">腐化</span>',
      flavourText: "即便我们的信仰无比坚定，黑暗的欲望也会潜移默化地影响我们。",
      stack: 8,
      icon: "https://poe.game.qq.com/image/divination-card/PoisonedFaith.png",
      Tags: "weapon_divination, unique_divination, corrupted_divination, unique_corrupted_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "人熊合一",
      href: "https://poedb.tw/cn/Man_With_Bear",
      type: "Man With Bear",
      explicitMod: '<span class="whiteitem">魔圣甲虫</span>',
      flavourText: "老掉牙的玩笑中也能蕴藏着最深厚的情谊。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/ManWithBear.png",
      Tags: "divination_card"
    },
    {
      name: "垂青之运",
      href: "https://poedb.tw/cn/The_Fortunate",
      type: "The Fortunate",
      explicitMod: '<span class="currencyitem">2x 神圣石</span>',
      flavourText: "{占卜所示，\n命运慷慨。}",
      stack: 12,
      icon: "https://poe.game.qq.com/image/divination-card/TheFortunate.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "古灵完满",
      href: "https://poedb.tw/cn/Eldritch_Perfection",
      type: "Eldritch Perfection",
      explicitMod: '<span class="whiteitem">物品</span><br/><span class="default">物品等级：</span> <span class="normal">100</span><br/><span class="enchanted">完美古灵基底词缀</span>',
      flavourText: "拥抱那份恐怖，\n它美丽的恩泽。",
      stack: 4,
      icon: "https://poe.game.qq.com/image/divination-card/EldritchPerfection.png",
      Tags: "armour_divination, boss_drop_card, divination_card"
    },
    {
      name: "兄弟之容",
      href: "https://poedb.tw/cn/I_See_Brothers",
      type: "I See Brothers",
      explicitMod: '<span class="currencyitem">2x 破溃宝珠</span>',
      flavourText: "{“在一片黑暗之时\n光明会身在何方？”}",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/ISeeBrothers.png",
      Tags: "currency_divination, divination_card"
    },
    {
      name: "终结一触",
      href: "https://poedb.tw/cn/The_Finishing_Touch",
      type: "The Finishing Touch",
      explicitMod: '<span class="currencyitem">1x 丰沃催化剂</span>',
      flavourText: "{奇才天成，多不压身。}",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/TheFinishingTouch.png",
      Tags: "currency_divination, currency_league_divination, divination_card"
    },
    {
      name: "变幻无定",
      href: "https://poedb.tw/cn/Ever-Changing",
      type: "Ever-Changing",
      explicitMod: '<span class="currencyitem">10x 粉碎石</span>',
      flavourText: "异界乃是我们的牢笼，也是我们最后的堡垒。她乃是我们仅存的希望，也是我们命定的终焉。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/EverChanging.png",
      Tags: "currency_divination, currency_basic_divination, divination_card"
    },
    {
      name: "尘封记忆",
      href: "https://poedb.tw/cn/A_Dusty_Memory",
      type: "A Dusty Memory",
      explicitMod: '<span class="rareitem">物品</span><br/><span class="default">物品等级：</span><span class="normal">100</span><br/><span class="fractured">分裂</span>',
      flavourText: "{在我记忆的最深处，在那罕有人至的小径之彼侧，有着我最珍贵的宝藏：那是一刹那的幸福与天真；如此纯洁，而又难以企及。}",
      stack: 5,
      icon: "https://poe.game.qq.com/image/divination-card/ADustyMemory.png",
      Tags: "divination_card"
    },
    {
      name: "硕鼠归来",
      href: "https://poedb.tw/cn/The_Return_of_the_Rat",
      type: "The Return of the Rat",
      explicitMod: '<span class="uniqueitem">圣令</span>',
      flavourText: "受巫咒之人的尖啸将昭告他的降临。",
      stack: 3,
      icon: "https://poe.game.qq.com/image/divination-card/TheReturnOfTheRat.png",
      Tags: "jewellery_divination, unique_divination, unique_jewellery_divination, divination_card"
    },
    {
      name: "新婚赠礼",
      href: "https://poedb.tw/cn/The_Wedding_Gift",
      type: "The Wedding Gift",
      explicitMod: '<span class="uniqueitem">阿拉卡力之牙</span>',
      flavourText: "侍僧们恭贺幸运的新郎与女神成为一体。",
      stack: 2,
      icon: "https://poe.game.qq.com/image/divination-card/TheWeddingGift.png",
      Tags: "weapon_divination, unique_divination, unique_weapon_divination, divination_card"
    },
    {
      name: "求取之人",
      href: "https://poedb.tw/cn/Who_Asked",
      type: "Who Asked",
      explicitMod: '<span class="magicitem">独裁者的武器</span><br/><span class="default">物品等级：</span> <span class="normal">83</span><br/><span class="fractured">分裂</span>',
      flavourText: "{人来人往之间\n索取声络绎不绝，\n熔炉火光冲天\n锤锻出变化万千。\n百舌千喉，所欲所念——\n无数神兵利器\n皆诞自求取之言。}",
      stack: 9,
      icon: "https://poe.game.qq.com/image/divination-card/WhoAsked.png",
      Tags: "weapon_divination, divination_card"
    }
  ];
  const PRICE_MESSAGE = "PRICE_MESSAGE";
  const PRICE_TIME_STAMP = "PRICE_TIME_STAMP";
  const PriceDataKey = Symbol();
  const TRADE_URL = "https://poe.game.qq.com/trade/search/S24%E8%B5%9B%E5%AD%A3/";
  const _withScopeId$1 = (n) => (vue.pushScopeId("data-v-ebb54801"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$4 = { id: "divination-wrap" };
  const _hoisted_2$4 = {
    key: 0,
    class: "divination-card--background"
  };
  const _hoisted_3$2 = ["src"];
  const _hoisted_4$2 = { class: "divination-card--name" };
  const _hoisted_5$1 = { key: 0 };
  const _hoisted_6$1 = { key: 1 };
  const _hoisted_7$1 = { class: "divination-card--wrap" };
  const _hoisted_8$1 = { class: "divination-card--reward" };
  const _hoisted_9$1 = ["innerHTML"];
  const _hoisted_10$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "divination-card--line" }, null, -1));
  const _hoisted_11 = { class: "divination-card--flavour" };
  const _hoisted_12 = {
    key: 0,
    class: "price"
  };
  const _hoisted_13 = ["href"];
  const _hoisted_14 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("span", null, " × ", -1));
  const _hoisted_15 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "chaos" }, null, -1));
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "DivinationCard",
    props: {
      type: { default: "" },
      name: { default: "" },
      quantity: { default: 1 },
      disabled: { type: Boolean, default: false },
      showPrice: { type: Boolean, default: false }
    },
    setup(__props) {
      const priceData = vue.inject(PriceDataKey);
      const props = __props;
      const current = vue.computed(() => {
        if (props.type)
          return CARD_POOL.find((item) => item.type === props.type) || null;
        if (!props.type && props.name)
          return CARD_POOL.find((item) => item.name === props.name) || null;
        return null;
      });
      const price = vue.computed(() => {
        if (!priceData || !priceData.value)
          return { calculated: 0, searchCode: "" };
        return priceData.value.find((e) => e.frameType === 6 && e.name === props.name) || { calculated: 0, searchCode: "" };
      });
      const calculated = vue.computed(() => Math.floor(price.value.calculated));
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
          vue.createElementVNode("div", {
            class: "divination-card",
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            !props.disabled ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$4, [
              !!current.value ? (vue.openBlock(), vue.createElementBlock("img", {
                src: current.value.icon,
                key: current.value.icon
              }, null, 8, _hoisted_3$2)) : vue.createCommentVNode("", true)
            ])) : vue.createCommentVNode("", true),
            !!current.value ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: vue.normalizeClass(["divination-card__exmod", { disabled: _ctx.disabled }])
            }, [
              vue.createElementVNode("div", _hoisted_4$2, vue.toDisplayString(current.value.name), 1),
              !props.disabled ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(["divination-card--stack", { single: _ctx.quantity >= current.value.stack }])
                }, [
                  current.value.stack === 1 && _ctx.quantity === 1 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$1, vue.toDisplayString(_ctx.quantity), 1)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_6$1, vue.toDisplayString(_ctx.quantity) + "/" + vue.toDisplayString(current.value.stack), 1))
                ], 2),
                vue.createElementVNode("div", _hoisted_7$1, [
                  vue.createElementVNode("div", _hoisted_8$1, [
                    vue.createElementVNode("div", {
                      innerHTML: current.value.explicitMod
                    }, null, 8, _hoisted_9$1)
                  ]),
                  _hoisted_10$1,
                  vue.createElementVNode("div", _hoisted_11, vue.toDisplayString(current.value.flavourText), 1)
                ])
              ], 64)) : vue.createCommentVNode("", true)
            ], 2)) : vue.createCommentVNode("", true)
          ]),
          price.value.calculated && _ctx.showPrice ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_12, [
            vue.createElementVNode("a", {
              href: vue.unref(TRADE_URL) + price.value.searchCode,
              target: "_blank",
              class: "trade",
              title: "点击跳转市集搜索"
            }, vue.toDisplayString(calculated.value), 9, _hoisted_13),
            _hoisted_14,
            _hoisted_15
          ])) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const DivinationCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-ebb54801"]]);
  const UNIQUE_POOL = [{ name: "艾普之怒 灵兆法杖", href: "https://poedb.tw/cn/Apeps_Rage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9BcGVwc1JhZ2UiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/074c66dadc/ApepsRage.png", baseType: "灵兆法杖" }, { name: "冥约 符文法杖", href: "https://poedb.tw/cn/Midnight_Bargain", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kVW5pcXVlMyIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/1db4fb5dbf/WandUnique3.png", baseType: "符文法杖" }, { name: "峡湾之星 贤者法杖", href: "https://poedb.tw/cn/Twyzel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kMVVuaXF1ZSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/086aeb214c/Wand1Unique.png", baseType: "贤者法杖" }, { name: "日耀之影 贤者法杖", href: "https://poedb.tw/cn/Shade_of_Solaris", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Tb2xhcmlzV2FuZCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/8f2f75ad2e/SolarisWand.png", baseType: "贤者法杖" }, { name: "无尽愤怒 富贵之斧", href: "https://poedb.tw/cn/Relentless_Fury", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9SZWxlbnRsZXNzRnVyeSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8013c33f55/RelentlessFury.png", baseType: "富贵之斧" }, { name: "一文字 海贼长刀", href: "https://poedb.tw/cn/Ichimonji", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0JsYWRlT2ZWYXN0cmkiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/a01d200e74/BladeOfVastri.png", baseType: "海贼长刀" }, { name: "希比尔的冰爪 撕裂尖爪", href: "https://poedb.tw/cn/Cybils_Paw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DeWJpbHNDbGF3IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/6da52a7519/CybilsClaw.png", baseType: "撕裂尖爪" }, { name: "暴风之钢 征战之剑", href: "https://poedb.tw/cn/The_Tempestuous_Steel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1RlbXBlc3R1b3VzU3RlZWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/72078201f9/TempestuousSteel.png", baseType: "征战之剑" }, { name: "迷茫幻符 白金波刃", href: "https://poedb.tw/cn/Mark_of_the_Doubting_Knight", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RvdWJ0aW5nS25pZ2h0IiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/a71d0de38e/DoubtingKnight.png", baseType: "白金波刃" }, { name: "伊沃幻像 古代细剑", href: "https://poedb.tw/cn/Ewars_Mirage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL0V3YXJzTWlyYWdlIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/c7b916c7f4/EwarsMirage.png", baseType: "古代细剑" }, { name: "钢铁质量 斗士长剑", href: "https://poedb.tw/cn/The_Iron_Mass", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1NrZWxldG9uU3dvcmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/f3b8e5c988/SkeletonSword.png", limit: "「夺宝奇兵」联盟限定", baseType: "斗士长剑" }, { name: "精华收割器 瓦尔战爪", href: "https://poedb.tw/cn/Essentia_Sanguis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NVVuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/8041876a9e/Claw5Unique2.png", baseType: "瓦尔战爪" }, { name: "荒野之律 魔爪刃", href: "https://poedb.tw/cn/Law_of_the_Wilds", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9Xb2xmQ2xhdyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8dd39cb98e/WolfClaw.png", limit: "「庄园化身欧莱娜」限定掉落\n「庄园」联盟限定", baseType: "魔爪刃" }, { name: "生机之记 朽木法杖", href: "https://poedb.tw/cn/Lifesprig", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9MaWZlU3ByaWciLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/8e97a1d808/LifeSprig.png", baseType: "朽木法杖" }, { name: "诗人之笔 粗纹法杖", href: "https://poedb.tw/cn/The_Poets_Pen", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Qb2V0c1BlbiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/f6f0645739/PoetsPen.png", baseType: "粗纹法杖" }, { name: "潜能魔棒 箴言法杖", href: "https://poedb.tw/cn/Void_Battery", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Wb2lkQmF0dGVyeSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/71a0fdc8db/VoidBattery.png", baseType: "箴言法杖" }, { name: "禁锢暴风 螺纹法杖", href: "https://poedb.tw/cn/Storm_Prison", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9TdG9ybVByaXNvbiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/0fc4811c94/StormPrison.png", baseType: "螺纹法杖" }, { name: "恩吉尔的叉刃【仿品】 窃者短刃", href: "https://poedb.tw/cn/Replica_Ungils_Gauche", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjN1bmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/ec0e6a82fb/Dagger3unique.png", baseType: "窃者短刃" }, { name: "峡湾之星【仿品】 贤者法杖", href: "https://poedb.tw/cn/Replica_Twyzel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kMVVuaXF1ZSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/086aeb214c/Wand1Unique.png", baseType: "贤者法杖" }, { name: "灰烬行者 粗纹法杖", href: "https://poedb.tw/cn/Ashcaller", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Bc2h3YWtlciIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/a36e60acf6/Ashwaker.png", baseType: "粗纹法杖" }, { name: "皮斯卡托的慧眼 魔性法杖", href: "https://poedb.tw/cn/Piscators_Vigil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9QaXNjYXRvcnNWaWdpbCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/332f80f7ac/PiscatorsVigil.png", baseType: "魔性法杖" }, { name: "血谑【仿品】 锐利刺匕", href: "https://poedb.tw/cn/Replica_Bloodplay", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0Jsb29kUGxheSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/3c8258f393/BloodPlay.png", baseType: "锐利刺匕" }, { name: "低伏暗光 狂风法杖", href: "https://poedb.tw/cn/Shimmeron", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9FbGRlcldhbmQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MSwiZWxkZXIiOnRydWV9XQ/cfca0aa1f1/ElderWand.png", limit: "「裂界者」限定掉落", baseType: "狂风法杖" }, { name: "裂心刃【仿品】 皇家短匕", href: "https://poedb.tw/cn/Replica_Heartbreaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlYXJ0YnJlYWtlciIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/fa73c4d5b4/Heartbreaker.png", baseType: "皇家短匕" }, { name: "血凿 剥皮刀", href: "https://poedb.tw/cn/Goredrill", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0dvcmVkcmlsbCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/e61d6f038e/Goredrill.png", baseType: "剥皮刀" }, { name: "协约的遗物 贤者法杖", href: "https://poedb.tw/cn/Relic_of_the_Pact", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9JcG9jaG90bFdhbmQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/015c140e10/IpochotlWand.png", limit: "「致命贪婪」联盟限定", baseType: "贤者法杖" }, { name: "艾贝拉斯之角 羊角法杖", href: "https://poedb.tw/cn/Abberaths_Horn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XeWNodmVyZ2UiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/ea4dd8a801/Wychverge.png", baseType: "羊角法杖" }, { name: "恩吉尔的叉刃 窃者短刃", href: "https://poedb.tw/cn/Ungils_Gauche", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjN1bmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/ec0e6a82fb/Dagger3unique.png", baseType: "窃者短刃" }, { name: "力量猎刃 残体利刃", href: "https://poedb.tw/cn/Mightflay", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjJ1bmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/831b56800f/Dagger2unique.png", baseType: "残体利刃" }, { name: "刽子手.杰克 瓦尔战斧", href: "https://poedb.tw/cn/Jack%2C_the_Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9KYWNrdGhlYXhlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f1f813fe9f/Jacktheaxe.png", baseType: "瓦尔战斧" }, { name: "鬣犬之牙 远古战爪", href: "https://poedb.tw/cn/Al_Dhih", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9BbGRoaWgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5af625fdd1/Aldhih.png", baseType: "远古战爪" }, { name: "冥犬残肢 血色短杖", href: "https://poedb.tw/cn/Cerberus_Limb", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9DZXJlYnVzIExpbWIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/abffc5b395/Cerebus%20Limb.png", limit: "「盲目者亚华托提利」限定掉落\n「地心」联盟限定", baseType: "血色短杖" }, { name: "戒律之影 帝国短匕", href: "https://poedb.tw/cn/Divinarius", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjd1bmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/3deec3773b/Dagger7unique.png", baseType: "帝国短匕" }, { name: "历史公理 铜锻短杖", href: "https://poedb.tw/cn/Axiom_Perpetuum", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9BeGlvbVBlcnBldHV1bSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/da686b937b/AxiomPerpetuum.png", baseType: "铜锻短杖" }, { name: "宇蚀 符文法杖", href: "https://poedb.tw/cn/Eclipse_Solaris", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kVW5pcXVlMSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/e1734b812d/WandUnique1.png", baseType: "符文法杖" }, { name: "寒铁刃【仿品】 艾兹麦之匕", href: "https://poedb.tw/cn/Replica_Cold_Iron_Point", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0NvbGRJcm9uUG9pbnQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/1a4002957b/ColdIronPoint.png", baseType: "艾兹麦之匕" }, { name: "混响 螺纹法杖", href: "https://poedb.tw/cn/Reverberation_Rod", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9SZXZlcmJlcmF0aW9uUm9kIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/676a395a5f/ReverberationRod.png", baseType: "螺纹法杖" }, { name: "托沃崩 灵石法杖", href: "https://poedb.tw/cn/Tulborn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9UdWxib3JuIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/7c7cf3e1f2/Tulborn.png", limit: "「托沃之域」限定掉落\n「精华」联盟限定\n使用 托沃的祝福 升级 托沃卧", baseType: "灵石法杖" }, { name: "砥砺深根 伏击刺刃", href: "https://poedb.tw/cn/Taproot", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL01hcnJvd0dhc2hlciIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/22be181636/MarrowGasher.png", baseType: "伏击刺刃" }, { name: "托沃卧【仿品】 灵石法杖", href: "https://poedb.tw/cn/Replica_Tulfall", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9UdWxib3JuVXBncmFkZWQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/575d6058a2/TulbornUpgraded.png", baseType: "灵石法杖" }, { name: "白净之风 帝国短匕", href: "https://poedb.tw/cn/White_Wind", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1doaXRlV2luZCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/48866b1c7f/WhiteWind.png", baseType: "帝国短匕" }, { name: "噬魂之牙 恐惧之爪", href: "https://poedb.tw/cn/Mortem_Morsu", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3OHVuaXF1ZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7294efb794/Claw8unique.png", baseType: "恐惧之爪" }, { name: "抹灭 魔性法杖", href: "https://poedb.tw/cn/Obliteration", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9NYWxlZGljdCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/2ddc131782/Maledict.png", baseType: "魔性法杖" }, { name: "蚕食之暗 兽血短匕", href: "https://poedb.tw/cn/The_Consuming_Dark", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0NvbnN1bWluZ3RoZURhcmsiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/71882cbd42/ConsumingtheDark.png", baseType: "兽血短匕" }, { name: "比诺的厨刀 猎者之刃", href: "https://poedb.tw/cn/Binos_Kitchen_Knife", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0Jpbm9zS2l0Y2hlbktuaWZlIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/499d39d615/BinosKitchenKnife.png", baseType: "猎者之刃" }, { name: "托沃卧 灵石法杖", href: "https://poedb.tw/cn/Tulfall", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9UdWxib3JuVXBncmFkZWQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/575d6058a2/TulbornUpgraded.png", limit: "「精华」联盟限定\n托沃崩 使用 托沃的祝福 升级", baseType: "灵石法杖" }, { name: "漆黑藤杖 皇家短杖", href: "https://poedb.tw/cn/The_Black_Cane", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9UaGVCbGFja0NhbmUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/b2aa96460e/TheBlackCane.png", limit: "「舆图战记」限定掉落", baseType: "皇家短杖" }, { name: "冥约【仿品】 符文法杖", href: "https://poedb.tw/cn/Replica_Midnight_Bargain", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kVW5pcXVlMyIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/1db4fb5dbf/WandUnique3.png", baseType: "符文法杖" }, { name: "火神锻台 魔灵短匕", href: "https://poedb.tw/cn/Vulconus", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1Z1bGNvbnVzIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/aefa0a977b/Vulconus.png", baseType: "魔灵短匕" }, { name: "黯黑贤者 影语短杖", href: "https://poedb.tw/cn/The_Dark_Seer", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9Wb2lkR2F6ZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e24a55cd27/VoidGaze.png", baseType: "影语短杖" }, { name: "罪恶吞噬者的叹息 暴君之统", href: "https://poedb.tw/cn/Sign_of_the_Sin_Eater", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9TY2VwdGVyT2ZTdWZmZXJpbmciLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/49a06d1a23/ScepterOfSuffering.png", baseType: "暴君之统" }, { name: "拉奇许之刃 贵族之剑", href: "https://poedb.tw/cn/Lakishus_Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDVVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5a5771852b/OneHandSword5Unique.png", baseType: "贵族之剑" }, { name: "多里亚尼的幻化之杖 瓦尔短杖", href: "https://poedb.tw/cn/Doryanis_Catalyst", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9Eb3J5YW5pc0NhdGFseXN0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/aa54cbb507/DoryanisCatalyst.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "瓦尔短杖" }, { name: "苍白烈火 灵石短杖", href: "https://poedb.tw/cn/Balefire", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9CYWVsZmlyZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/082c0ee423/Baelfire.png", baseType: "灵石短杖" }, { name: "龙凤吟 狱火之刃", href: "https://poedb.tw/cn/Dyadus", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9EeWFkdXMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e1b1cf2439/Dyadus.png", baseType: "狱火之刃" }, { name: "痛苦之触 帝国战爪", href: "https://poedb.tw/cn/Touch_of_Anguish", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9Ub3VjaE9mQW5ndWlzaCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/c3b67bc0c2/TouchOfAnguish.png", baseType: "帝国战爪" }, { name: "寡妇 窃者短匕", href: "https://poedb.tw/cn/Widowmaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1dpZG93bWFrZXIiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/c581a2aec4/Widowmaker.png", baseType: "窃者短匕" }, { name: "泣月 魔性法杖", href: "https://poedb.tw/cn/Moonsorrow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kVW5pcXVlMiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/7a5458ab50/WandUnique2.png", baseType: "魔性法杖" }, { name: "赤红短刃 锈剑", href: "https://poedb.tw/cn/Redbeak", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDFVbmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/a3010a69f5/OneHandSword1Unique.png", baseType: "锈剑" }, { name: "思动之手 帝国战爪", href: "https://poedb.tw/cn/Hand_of_Thought_and_Motion", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9UaG91Z2h0TW90aW9uMSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/cc443b5108/ThoughtMotion1.png", limit: "「艾许之域」限定掉落\n「精华」联盟限定\n使用 艾许的祝福 升级 智行之手", baseType: "帝国战爪" }, { name: "血谑 锐利刺匕", href: "https://poedb.tw/cn/Bloodplay", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0Jsb29kUGxheSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/3c8258f393/BloodPlay.png", baseType: "锐利刺匕" }, { name: "隐匿之刃 伏击刺刃", href: "https://poedb.tw/cn/The_Hidden_Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1NlY3JldEJsYWRlIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/a82388d924/SecretBlade.png", limit: "「夺宝奇兵」联盟限定", baseType: "伏击刺刃" }, { name: "阿克顿 屠戮之斧", href: "https://poedb.tw/cn/Actum", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9IYW5sb25zUmF6b3IiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/a81f0f6259/HanlonsRazor.png", limit: "「夺宝奇兵」联盟限定", baseType: "屠戮之斧" }, { name: "魅惑 瓦尔战爪", href: "https://poedb.tw/cn/Allure", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9BbGx1cmUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/ff5311676c/Allure.png", baseType: "瓦尔战爪" }, { name: "阿拉卡力之牙 兽血短匕", href: "https://poedb.tw/cn/Arakaalis_Fang", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0ZhbmdVbmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/de6e51652e/FangUnique.png", baseType: "兽血短匕" }, { name: "地精边缘 伏击刺刃", href: "https://poedb.tw/cn/Goblinedge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0dvYmxpbkVkZ2UiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/61d1382d07/GoblinEdge.png", baseType: "伏击刺刃" }, { name: "灾害 恐惧之牙", href: "https://poedb.tw/cn/The_Scourge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9UaGVTY291cmdlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/598a9f9893/TheScourge.png", baseType: "恐惧之牙" }, { name: "裂心刃 皇家短匕", href: "https://poedb.tw/cn/Heartbreaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlYXJ0YnJlYWtlciIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/fa73c4d5b4/Heartbreaker.png", baseType: "皇家短匕" }, { name: "野性瑞佛 皇家之斧", href: "https://poedb.tw/cn/Rigwalds_Savagery", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9SaWd3YXJsQXhlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/e2ee95737e/RigwarlAxe.png", baseType: "皇家之斧" }, { name: "鬼弑 查兰之剑", href: "https://poedb.tw/cn/Oni-Goroshi", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1RoZUdvZGRlc3NVbmxlYXNoZWQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/37ecd7541b/TheGoddessUnleashed.png", baseType: "查兰之剑" }, { name: "汉恩的力量 夜语长剑", href: "https://poedb.tw/cn/Ahns_Might", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0FobnNNaWdodCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/ee9d3b45a4/AhnsMight.png", baseType: "夜语长剑" }, { name: "幻梦飞羽【仿品】 永恒之剑", href: "https://poedb.tw/cn/Replica_Dreamfeather", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0RyZWFtZmVhdGhlciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/89a3a7588c/Dreamfeather.png", baseType: "永恒之剑" }, { name: "塑泥者 破岩锤", href: "https://poedb.tw/cn/Clayshaper", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvQ2xheVNoYXBlciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/9224ab6497/ClayShaper.png", baseType: "破岩锤" }, { name: "韧木曲刃 永恒之剑", href: "https://poedb.tw/cn/Grelwood_Shank", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1ZlcmRhbnRHdWFyZGlhblN3b3JkMSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/b085f741a5/VerdantGuardianSword1.png", baseType: "永恒之剑" }, { name: "救世者 军团长剑", href: "https://poedb.tw/cn/The_Saviour", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL01pcmFnZUJsYWRlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/c84975781c/MirageBlade.png", limit: "「诸界觉者希鲁斯」限定掉落", baseType: "军团长剑" }, { name: "芯木腰刀 永恒之剑", href: "https://poedb.tw/cn/Beltimber_Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1ZlcmRhbnRHdWFyZGlhblN3b3JkMiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/3f09536952/VerdantGuardianSword2.png", baseType: "永恒之剑" }, { name: "占星 虚影短杖", href: "https://poedb.tw/cn/Augyre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9FbGRlclNjZXB0cmUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/325c7b1591/ElderSceptre.png", baseType: "虚影短杖" }, { name: "野性狂爪 凿钉", href: "https://poedb.tw/cn/Wildslash", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9XaWxkc2xhc2giLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/9dc7260a86/Wildslash.png", baseType: "凿钉" }, { name: "舍吉的手柄 强化长杖", href: "https://poedb.tw/cn/Xirgils_Crank", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY3dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/2437d7498a/Staff7unique.png", limit: "「帝王试炼迷宫」限定掉落", baseType: "强化长杖" }, { name: "钢铁指挥 死亡之弓", href: "https://poedb.tw/cn/Iron_Commander", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0lyb25Db21tZW5kYW50IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/001ca245e3/IronCommendant.png", baseType: "死亡之弓" }, { name: "支点 艾兹麦长杖", href: "https://poedb.tw/cn/The_Fulcrum", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvRWxlbWVudGFsSGFybW9ueSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/912f60acd7/ElementalHarmony.png", limit: "「夺宝奇兵」联盟限定", baseType: "艾兹麦长杖" }, { name: "贪婪之潮 城塞战弓", href: "https://poedb.tw/cn/The_Gluttonous_Tide", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0ZyZW56aWVkVGVudGFjbGVzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/6dc3218af0/FrenziedTentacles.png", limit: "「世界吞噬者」限定掉落", baseType: "城塞战弓" }, { name: "狮眼的战弓 帝国之弓", href: "https://poedb.tw/cn/Lioneyes_Glare", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0Jvdzh1bmlxdWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/29fc966523/Bow8unique.png", baseType: "帝国之弓" }, { name: "光耀之锤 战锤", href: "https://poedb.tw/cn/Brightbeak", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U1VW5pcXVlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/d3f763cad7/OneHandMace5Unique.png", baseType: "战锤" }, { name: "索伏的爱抚 城塞战弓", href: "https://poedb.tw/cn/Xophs_Nurture", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0Jsb29kUGVyaWdyZWVCUkVBQ0giLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/c1e05d8e31/BloodPerigreeBREACH.png", limit: "「精华」联盟限定\n索伏的始源 使用 索伏的祝福 升级", baseType: "城塞战弓" }, { name: "冥使之琴 死亡之弓", href: "https://poedb.tw/cn/Deaths_Harp", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0RlYXRoc2hhcnAiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/488e5f6267/Deathsharp.png", baseType: "死亡之弓" }, { name: "夭马克的协定 瓦尔短杖", href: "https://poedb.tw/cn/Yaomacs_Accord", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9PbmF0emxpU2NlcHRyZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/49dafc0859/OnatzliSceptre.png", limit: "「试炼使者」限定掉落\n「致命贪婪」联盟限定", baseType: "瓦尔短杖" }, { name: "血裂 钝钉木棒", href: "https://poedb.tw/cn/Gorebreaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2UzVW5pcXVlIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/c3ca02cad8/OneHandMace3Unique.png", baseType: "钝钉木棒" }, { name: "内布利斯 虚影短杖", href: "https://poedb.tw/cn/Nebulis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9TY2VwdHJlT2ZNZW1vcmllcyIsInciOjIsImgiOjMsInNjYWxlIjoxLCJzeW50aGVzaXNlZCI6dHJ1ZX1d/42c37f31d6/SceptreOfMemories.png", limit: "「维纳留斯」限定掉落\n「虚空忆境」联盟限定", baseType: "虚影短杖" }, { name: "炽炎之使 武术长杖", href: "https://poedb.tw/cn/The_Searing_Touch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY0dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5c7ddd5550/Staff4unique.png", baseType: "武术长杖" }, { name: "宵晓 风暴长杖", href: "https://poedb.tw/cn/Duskdawn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU29sYXJpc0x1bmFyaXNTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/e5e9df18a4/SolarisLunarisStaff.png", limit: "「Vendor recipe system」限定掉落", baseType: "风暴长杖" }, { name: "遗孀之雹 粗制弓", href: "https://poedb.tw/cn/Widowhail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1dpZG93aGFpbEJvdyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/1f31742277/WidowhailBow.png", baseType: "粗制弓" }, { name: "寒铁刃 艾兹麦之匕", href: "https://poedb.tw/cn/Cold_Iron_Point", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0NvbGRJcm9uUG9pbnQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/1a4002957b/ColdIronPoint.png", baseType: "艾兹麦之匕" }, { name: "纯净之神的祭品 贵族长杖", href: "https://poedb.tw/cn/Martyr_of_Innocence", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvTWFydHlySW5ub2NlbmNlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/6fd4eee9df/MartyrInnocence.png", baseType: "贵族长杖" }, { name: "恐惧之镰 切割者", href: "https://poedb.tw/cn/Dreadarc", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9EcmVhZGFyYyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/fd1e188ee3/Dreadarc.png", baseType: "切割者" }, { name: "魅惑【仿品】 瓦尔战爪", href: "https://poedb.tw/cn/Replica_Allure", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9BbGx1cmUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/ff5311676c/Allure.png", baseType: "瓦尔战爪" }, { name: "苦梦 影语短杖", href: "https://poedb.tw/cn/Bitterdream", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyOHVuaXF1ZTIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/085f7726de/scepter8unique2.png", baseType: "影语短杖" }, { name: "超越壁垒 裂脏钩", href: "https://poedb.tw/cn/Advancing_Fortress", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3c2hpZWxkMyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/a04190ca2b/Clawshield3.png", baseType: "裂脏钩" }, { name: "食蚜 斗士长剑", href: "https://poedb.tw/cn/Scaeva", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1NjYWV2YSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/320c7247e3/Scaeva.png", baseType: "斗士长剑" }, { name: "尼布洛克 梦魇之锤", href: "https://poedb.tw/cn/Nebuloch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvRWxkZXJNYWNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsImVsZGVyIjp0cnVlfV0/84e6532c8a/ElderMace.png", limit: "「裂界者」限定掉落", baseType: "梦魇之锤" }, { name: "乱矢之弦 暗影弓", href: "https://poedb.tw/cn/Chin_Sol", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzV1bmlxdWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/199f28ea8d/Bow5unique.png", baseType: "暗影弓" }, { name: "嗜血之爪 魔爪刃", href: "https://poedb.tw/cn/Bloodseeker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9CbG9vZHNlZWtlciIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0b888c4189/Bloodseeker.png", baseType: "魔爪刃" }, { name: "黑钢 瓦尔短杖", href: "https://poedb.tw/cn/Doon_Cuebiyari", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvRG9vbkN1ZWJpeWFyaSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8a4a0ccb6b/DoonCuebiyari.png", baseType: "瓦尔短杖" }, { name: "凋灵魔爪 虚影短杖", href: "https://poedb.tw/cn/Montreguls_Grasp", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9Nb250cmVndWxzR3Jhc3AiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c94034110b/MontregulsGrasp.png", baseType: "虚影短杖" }, { name: "乱世之翼【仿品】 艾兹麦巨斧", href: "https://poedb.tw/cn/Replica_Wings_of_Entropy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9FbnRyb3B5d2luZ3MiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/86e128789a/Entropywings.png", baseType: "艾兹麦巨斧" }, { name: "裂风【仿品】 帝国之弓", href: "https://poedb.tw/cn/Replica_Windripper", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0VhZ2xlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/01fdf37ac0/Eagle.png", baseType: "帝国之弓" }, { name: "嗜血黑兹玛娜 瓦尔巨斧", href: "https://poedb.tw/cn/Hezmanas_Bloodlust", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9IZXptYW5hc0Jsb29kbHVzdCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/fdbd48147f/HezmanasBloodlust.png", baseType: "瓦尔巨斧" }, { name: "议会之触 脊弓", href: "https://poedb.tw/cn/Reach_of_the_Council", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0Jvd09mVGhlQ291bmNpbCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/55dc65893e/BowOfTheCouncil.png", limit: "「预言」联盟限定", baseType: "脊弓" }, { name: "颤抖之杖 军用长杖", href: "https://poedb.tw/cn/Tremor_Rod", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvTWluZVN0YWZmIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/51a69e0959/MineStaff.png", baseType: "军用长杖" }, { name: "The Burden of Shadows 史典长杖", href: "https://poedb.tw/cn/The_Burden_of_Shadows", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvVm9vZG9vS2luZ1N0YWZmIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/295f49d20f/VoodooKingStaff.png", limit: "「禁咒荒林」限定掉落", baseType: "史典长杖" }, { name: "英斯贝理之极 智者长剑", href: "https://poedb.tw/cn/Innsbury_Edge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0VsZGVyU3dvcmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2bd26d4bf6/ElderSword.png", baseType: "智者长剑" }, { name: "阐释之杖 艾兹麦长杖", href: "https://poedb.tw/cn/Cane_of_Unravelling", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvQ2FuZU9mVW5yYXZlbGxpbmciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/99b4e7e44e/CaneOfUnravelling.png", baseType: "艾兹麦长杖" }, { name: "奈可妲之灯 水晶短杖", href: "https://poedb.tw/cn/Nyctas_Lantern", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9MeWNobnVzbHlhZWkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c69b77ef8a/Lychnuslyaei.png", baseType: "水晶短杖" }, { name: "女神的灵缚 鲸骨细刃", href: "https://poedb.tw/cn/The_Goddess_Bound", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1VuaXF1ZVJhcGllcjYiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/b9f0cc5e60/UniqueRapier6.png", baseType: "鲸骨细刃" }, { name: "英斯贝理之极【仿品】 智者长剑", href: "https://poedb.tw/cn/Replica_Innsbury_Edge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0VsZGVyU3dvcmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2bd26d4bf6/ElderSword.png", baseType: "智者长剑" }, { name: "卡美利亚之贪婪 坚锤", href: "https://poedb.tw/cn/Camerias_Avarice", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvQW1lcmljc01hdWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjN9XQ/74305cb6de/AmericsMaul.png", baseType: "坚锤" }, { name: "冈姆的霸业 卡鲁巨斧", href: "https://poedb.tw/cn/Kaoms_Primacy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlMTFVbmlxdWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/544409d7f6/TwoHandAxe11Unique.png", baseType: "卡鲁巨斧" }, { name: "萝丝之触 反曲弓", href: "https://poedb.tw/cn/Roths_Reach", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1NhcmtoYW1zUmVhY2giLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/89bf0cff0b/SarkhamsReach.png", baseType: "反曲弓" }, { name: "重击之锤 狼牙重锤", href: "https://poedb.tw/cn/Quecholli", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U1VW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/9361b8eb61/TwoHandMace5Unique.png", baseType: "狼牙重锤" }, { name: "女神的怒炎 贵族之剑", href: "https://poedb.tw/cn/The_Goddess_Scorned", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1RoZUdvZGRlc3NzY29ybmVkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/65470d38e9/TheGoddessscorned.png", limit: "「Vendor recipe system」限定掉落", baseType: "贵族之剑" }, { name: "幻银之弦 粗制弓", href: "https://poedb.tw/cn/Silverbranch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzFVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/73d6f96075/Bow1Unique.png", baseType: "粗制弓" }, { name: "费德利塔斯之锋 锯状薄刃", href: "https://poedb.tw/cn/Fidelitas_Spike", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0ZpZGVsaXRhc1NwaWtlIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/de1d15ceb1/FidelitasSpike.png", baseType: "锯状薄刃" }, { name: "虚无之倾 游侠弓", href: "https://poedb.tw/cn/Nulls_Inclination", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL051bGxCb3ciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/067d0e5884/NullBow.png", baseType: "游侠弓" }, { name: "黑鲨 瓦尔军刃", href: "https://poedb.tw/cn/Varunastra", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1ZhcnVuYXN0cmEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/ce779b1e41/Varunastra.png", baseType: "瓦尔军刃" }, { name: "裂颅【仿品】 刚猛巨锤", href: "https://poedb.tw/cn/Replica_Trypanon", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHJ5cGFub24iLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/3152ab4124/Trypanon.png", baseType: "刚猛巨锤" }, { name: "议会之息 禁礼短杖", href: "https://poedb.tw/cn/Breath_of_the_Council", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9QbGFndWVicmluZ2VyIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/c22a70dd6e/Plaguebringer.png", limit: "「预言」联盟限定", baseType: "禁礼短杖" }, { name: "逝空之锤 威权巨锤", href: "https://poedb.tw/cn/Voidhome", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVm9pZGhvbWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/0122c9dcf4/Voidhome.png", baseType: "威权巨锤" }, { name: "暴风之钢【仿品】 征战之剑", href: "https://poedb.tw/cn/Replica_Tempestuous_Steel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1RlbXBlc3R1b3VzU3RlZWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/72078201f9/TempestuousSteel.png", baseType: "征战之剑" }, { name: "灾祸之礁 鱼竿", href: "https://poedb.tw/cn/Reefbane", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9GaXNoaW5nUm9kcy9SZWVmYmFuZSIsInciOjEsImgiOjQsInNjYWxlIjoxfV0/fb59feb3cd/Reefbane.png", baseType: "鱼竿" }, { name: "死神之手 卡鲁短杖", href: "https://poedb.tw/cn/Deaths_Hand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9FbmRPZkVyYSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/fbfd20f658/EndOfEra.png", baseType: "卡鲁短杖" }, { name: "忠诚之锤 刚猛巨锤", href: "https://poedb.tw/cn/Chober_Chaber", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvQ2hvYmVyQ2hhYmVyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/77d9d3e30a/ChoberChaber.png", baseType: "刚猛巨锤" }, { name: "穿云【仿品】 猎魂之弓", href: "https://poedb.tw/cn/Replica_Infractem", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0luZnJhY3RlbSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ea06e13fb8/Infractem.png", baseType: "猎魂之弓" }, { name: "提图库斯的坚盾 强化塔盾", href: "https://poedb.tw/cn/Titucius_Span", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0clVuaXF1ZTciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8dd443976b/ShieldStrUnique7.png", baseType: "强化塔盾" }, { name: "乔赫黑钢 沉钢重锤", href: "https://poedb.tw/cn/Jorrhasts_Blacksteel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvSm9ycmhhc3RzQmxhY2tzdGVlbCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/a1ee3a6a3c/JorrhastsBlacksteel.png", limit: "「风暴」联盟限定", baseType: "沉钢重锤" }, { name: "摧残之光 细柄长杖", href: "https://poedb.tw/cn/The_Annihilating_Light", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSW50cmVwaWR1c0RvbG9yZW0iLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8244c5f079/IntrepidusDolorem.png", limit: "「灼督」限定掉落", baseType: "细柄长杖" }, { name: "圣恶之喻 帝国长杖", href: "https://poedb.tw/cn/The_Enmity_Divine", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvUmFnZSBTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/7c95713fe7/Rage%20Staff.png", limit: "「降临之地」限定掉落\n「先驱」联盟限定\n使用 焚血卷轴 升级 死亡屈服", baseType: "帝国长杖" }, { name: "红刃旗帜 彩绘塔盾", href: "https://poedb.tw/cn/Redblade_Banner", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1JlZGJsYWRlQmFubmVyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/33221fb3e1/RedbladeBanner.png", limit: "「孤岛灯塔」限定掉落\n「战团」联盟限定", baseType: "彩绘塔盾" }, { name: "裂风 帝国之弓", href: "https://poedb.tw/cn/Windripper", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0VhZ2xlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/01fdf37ac0/Eagle.png", baseType: "帝国之弓" }, { name: "暴雨之弦 长弓", href: "https://poedb.tw/cn/Storm_Cloud", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1N0b3JtY2xvdWQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/003957da0c/Stormcloud.png", baseType: "长弓" }, { name: "尔奇的巨灵之锤 卡鲁重锤", href: "https://poedb.tw/cn/Marohi_Erqi", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2UydW5pcXVlMiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/6ae0a56923/TwoHandMace2unique2.png", baseType: "卡鲁重锤" }, { name: "骤雨之弦 短弓", href: "https://poedb.tw/cn/Quill_Rain", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzJ1bmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5c5cad82e8/Bow2unique.png", baseType: "短弓" }, { name: "局势逆转者 帝国重锤", href: "https://poedb.tw/cn/Tidebreaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVGlkZWJyZWFrZXIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/25b69a132f/Tidebreaker.png", baseType: "帝国重锤" }, { name: "塔林的颤栗之语 风暴长杖", href: "https://poedb.tw/cn/Taryns_Shiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvVGFyeW5zc2hpdmVyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/b11b3dffb7/Tarynsshiver.png", baseType: "风暴长杖" }, { name: "乌尔尼多的拥抱 瓦尔巨斧", href: "https://poedb.tw/cn/Uul-Netols_Embrace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9VdWxOZXRvbHNLaXNzVXBncmFkZWQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MSwicmVsaWMiOjF9XQ/3a59e1526b/UulNetolsKissUpgraded.png", limit: "「精华」联盟限定\n乌尔尼多之吻 使用 乌尔尼多的祝福 升级", baseType: "瓦尔巨斧" }, { name: "五芒屏障 乌木塔盾", href: "https://poedb.tw/cn/Chernobogs_Pillar", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0NoZXJub2JvZ3NwaWxsYXIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8868d6add1/Chernobogspillar.png", baseType: "乌木塔盾" }, { name: "破碎传承者 蛇纹长杖", href: "https://poedb.tw/cn/Sire_of_Shards", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvUmFkaWVuY2UiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/229388b736/Radience.png", baseType: "蛇纹长杖" }, { name: "囚神杵 铁锻长杖", href: "https://poedb.tw/cn/Pillar_of_the_Caged_God", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvUGlsbGFyb2Z0aGVDYWdlZEdvZCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/0451281624/PillaroftheCagedGod.png", baseType: "铁锻长杖" }, { name: "超越壁垒【仿品】 裂脏钩", href: "https://poedb.tw/cn/Replica_Advancing_Fortress", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3c2hpZWxkMyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/a04190ca2b/Clawshield3.png", baseType: "裂脏钩" }, { name: "努罗的竖琴 先驱者之弓", href: "https://poedb.tw/cn/Nuros_Harp", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL051cm9zUHVyaWZ5aW5nSGFycCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/36ac89806c/NurosPurifyingHarp.png", baseType: "先驱者之弓" }, { name: "合流梦寐 军用长刃", href: "https://poedb.tw/cn/United_in_Dream", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0V0ZXJuYWxTbGVlcDIiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/8d706ed435/EternalSleep2.png", limit: "「精华」联盟限定\n离异梦寐 使用 夏乌拉的祝福 升级", baseType: "军用长刃" }, { name: "狼蛛 生皮塔盾", href: "https://poedb.tw/cn/Lycosidae", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0x5Y29zaWRhZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ec38e32a56/Lycosidae.png", baseType: "生皮塔盾" }, { name: "瓦尔传说 宝石之剑", href: "https://poedb.tw/cn/Story_of_the_Vaal", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1N0b3J5T2ZUaGVWYWFsIiwidyI6MSwiaCI6Mywic2NhbGUiOjEsInJlbGljIjo1fV0/7aa8285d7d/StoryOfTheVaal.png", limit: "「烈焰坩埚」限定掉落\n「穿越」联盟限定\n使用 命运魔瓶 升级 瓦尔命运", baseType: "宝石之剑" }, { name: "悖论【仿品】 瓦尔细剑", href: "https://poedb.tw/cn/Replica_Paradoxica", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL0Fzc2Fzc2luYXRpb25VbmlxdWUyIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/b84147fcbd/AssassinationUnique2.png", baseType: "瓦尔细剑" }, { name: "普兰德斯之徽 松木轻盾", href: "https://poedb.tw/cn/Crest_of_Perandus", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleFVuaXF1ZTUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e85f672678/ShieldDexUnique5.png", baseType: "松木轻盾" }, { name: "开膛斧 破城斧", href: "https://poedb.tw/cn/Soul_Taker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9BbGV4YXhlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/647bb8bb63/Alexaxe.png", baseType: "破城斧" }, { name: "血棘【仿品】 朽木之干", href: "https://poedb.tw/cn/Replica_Blood_Thorn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvVGhlQmxvb2RUaG9ybiIsInciOjEsImgiOjQsInNjYWxlIjoxfV0/3dac5ee34b/TheBloodThorn.png", baseType: "朽木之干" }, { name: "鹰啸 碎玉斧", href: "https://poedb.tw/cn/The_Screaming_Eagle", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9TY3JlYW1pbmdlYWdsZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/1fd02e9312/Screamingeagle.png", baseType: "碎玉斧" }, { name: "西方雷霆圣杖 帝国长杖", href: "https://poedb.tw/cn/Agnerod_West", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8b60f5a033/Staff6unique.png", baseType: "帝国长杖" }, { name: "图克哈玛堡垒 乌木塔盾", href: "https://poedb.tw/cn/Tukohamas_Fortress", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1R1a29oYW1hc0ZvcnRyZXNzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/e502c4bcf2/TukohamasFortress.png", baseType: "乌木塔盾" }, { name: "影殒 暮色之刃", href: "https://poedb.tw/cn/Ephemeral_Edge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDhVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d2fdb4e56e/OneHandSword8Unique.png", baseType: "暮色之刃" }, { name: "瓦尔命运 宝石之剑", href: "https://poedb.tw/cn/Fate_of_the_Vaal", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0ZhdGVPZlRoZVZhYWwiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/0a4128aace/FateOfTheVaal.png", limit: "「穿越」联盟限定\n瓦尔传说 使用 命运魔瓶 升级", baseType: "宝石之剑" }, { name: "绿藤 朽木之干", href: "https://poedb.tw/cn/Fencoil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmYxdW5pcXVlIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/cff9022931/Staff1unique.png", baseType: "朽木之干" }, { name: "东方雷霆圣杖 帝国长杖", href: "https://poedb.tw/cn/Agnerod_East", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8b60f5a033/Staff6unique.png", baseType: "帝国长杖" }, { name: "宵晓【仿品】 风暴长杖", href: "https://poedb.tw/cn/Replica_Duskdawn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU29sYXJpc0x1bmFyaXNTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/e5e9df18a4/SolarisLunarisStaff.png", baseType: "风暴长杖" }, { name: "卡斯普里怨恨 宝饰细剑", href: "https://poedb.tw/cn/Cospris_Malice", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0Nvc3ByaXNNYWxpY2UiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/e9e517220b/CosprisMalice.png", baseType: "宝饰细剑" }, { name: "瓦尔战刃 瓦尔军刃", href: "https://poedb.tw/cn/Rebuke_of_the_Vaal", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDdVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/90312b1e4a/OneHandSword7Unique.png", baseType: "瓦尔军刃" }, { name: "竭血之镰 行刑巨斧", href: "https://poedb.tw/cn/The_Blood_Reaper", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlVW5pcXVlMiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/3f8b59ec70/TwoHandAxeUnique2.png", baseType: "行刑巨斧" }, { name: "冰点低语 毒牙长杖", href: "https://poedb.tw/cn/The_Whispering_Ice", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY4dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/04e7459f43/Staff8unique.png", baseType: "毒牙长杖" }, { name: "断罪 柴斧", href: "https://poedb.tw/cn/Limbsplit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlX3NwYXJlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/6cc29798f1/TwoHandAxe_spare.png", baseType: "柴斧" }, { name: "智行之手 帝国战爪", href: "https://poedb.tw/cn/Hand_of_Wisdom_and_Action", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9UaG91Z2h0TW90aW9uMiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/69f2b430d0/ThoughtMotion2.png", limit: "「精华」联盟限定\n思动之手 使用 艾许的祝福 升级", baseType: "帝国战爪" }, { name: "悖论 瓦尔细剑", href: "https://poedb.tw/cn/Paradoxica", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL0Fzc2Fzc2luYXRpb25VbmlxdWUyIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/b84147fcbd/AssassinationUnique2.png", limit: "「背叛者」联盟限定", baseType: "瓦尔细剑" }, { name: "战歌 霸主巨斧", href: "https://poedb.tw/cn/Debeons_Dirge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9TdHJpbmdBeGUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/c3289a678a/StringAxe.png", baseType: "霸主巨斧" }, { name: "玛塔之指教 卡鲁短杖", href: "https://poedb.tw/cn/Maatas_Teaching", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9NYWF0YVNjZXB0cmUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/27dd9da5a6/MaataSceptre.png", baseType: "卡鲁短杖" }, { name: "誓约 审判长杖", href: "https://poedb.tw/cn/Pledge_of_Hands", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvUGxlZGdlb2ZIYW5kcyIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/1da7239060/PledgeofHands.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "审判长杖" }, { name: "东之饰 裂脏钩", href: "https://poedb.tw/cn/Ornament_of_the_East", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9Pcm5hbWVudE9mVGhlRWFzdCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/5bea7643a2/OrnamentOfTheEast.png", baseType: "裂脏钩" }, { name: "哑风尖旗 釉彩轻盾", href: "https://poedb.tw/cn/Mutewind_Pennant", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL011dGV3aW5kUGVubmFudCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/a3efaf0921/MutewindPennant.png", limit: "「极寒冰原」限定掉落\n「战团」联盟限定", baseType: "釉彩轻盾" }, { name: "穿云 猎魂之弓", href: "https://poedb.tw/cn/Infractem", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0luZnJhY3RlbSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ea06e13fb8/Infractem.png", baseType: "猎魂之弓" }, { name: "破灭之希 游侠弓", href: "https://poedb.tw/cn/Hopeshredder", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0VsZGVyQm93IiwidyI6MiwiaCI6NCwic2NhbGUiOjEsImVsZGVyIjp0cnVlfV0/0dcd0422ae/ElderBow.png", limit: "「裂界者」限定掉落", baseType: "游侠弓" }, { name: "迷雾之墙 漆彩轻盾", href: "https://poedb.tw/cn/Mistwall", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01pc3R3YWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/d81f034c2d/Mistwall.png", baseType: "漆彩轻盾" }, { name: "勇气之魄 艾兹麦巨斧", href: "https://poedb.tw/cn/Sinvictas_Mettle", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9TaW52aWN0YXNNZXR0bGUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/f1eaf2346b/SinvictasMettle.png", baseType: "艾兹麦巨斧" }, { name: "风暴之眼 皇家长杖", href: "https://poedb.tw/cn/The_Stormheart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY4dW5pcXVlWCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/fa0b46bc0c/Staff8uniqueX.png", baseType: "皇家长杖" }, { name: "七日锋 夜语长剑", href: "https://poedb.tw/cn/Razor_of_the_Seventh_Sun", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1Jhem9yT2ZUaGVTZXZlbnRoU3VuIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/ef21dd7f97/RazorOfTheSeventhSun.png", baseType: "夜语长剑" }, { name: "夜吟 暗影弓", href: "https://poedb.tw/cn/Darkscorn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0RhcmtzY29ybiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/5145b7feef/Darkscorn.png", baseType: "暗影弓" }, { name: "布琳洛特之旗 环形魔盾", href: "https://poedb.tw/cn/Brinerot_Flag", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0JyaW5lcm90RmxhZyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/4645154405/BrinerotFlag.png", limit: "「炽炎船坞」限定掉落\n「战团」联盟限定", baseType: "环形魔盾" }, { name: "幻梦飞羽 永恒之剑", href: "https://poedb.tw/cn/Dreamfeather", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0RyZWFtZmVhdGhlciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/89a3a7588c/Dreamfeather.png", baseType: "永恒之剑" }, { name: "卡美利亚之锤 坚锤", href: "https://poedb.tw/cn/Camerias_Maul", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvQW1lcmljc01hdWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e1b9d35ca3/AmericsMaul.png", baseType: "坚锤" }, { name: "秘法君临 军团长剑", href: "https://poedb.tw/cn/The_Rippling_Thoughts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0hhcmJpbmdlckxlYWd1ZVN3b3JkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/e8a974a73b/HarbingerLeagueSword.png", limit: "「降临之地」限定掉落\n「先驱」联盟限定\n使用 电击卷轴 升级 思想奔流", baseType: "军团长剑" }, { name: "霜息 华丽之锤", href: "https://poedb.tw/cn/Frostbreath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvRnJvc3RCcmVhdGgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8a6b305388/FrostBreath.png", baseType: "华丽之锤" }, { name: "基洛瓦之风暴 钢木轻盾", href: "https://poedb.tw/cn/Kiloavas_Bluster", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0tpbG9hdmFTaGllbGQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/b1ec2a922a/KiloavaShield.png", baseType: "钢木轻盾" }, { name: "努葛玛呼之耀 深渊巨斧", href: "https://poedb.tw/cn/Ngamahus_Flame", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvUmlyaVRlTmdhbWFodSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/55c2a170af/RiriTeNgamahu.png", baseType: "深渊巨斧" }, { name: "无上箴言 水晶短杖", href: "https://poedb.tw/cn/The_Supreme_Truth", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9UaGVzdXByZW1ldHJ1dGgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/1f03434324/Thesupremetruth.png", baseType: "水晶短杖" }, { name: "虹耀之月 暮光长剑", href: "https://poedb.tw/cn/Prismatic_Eclipse", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1ByaXNtYXRpY0VjbGlwc2UiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d6243ca476/PrismaticEclipse.png", baseType: "暮光长剑" }, { name: "灵护 练武者细剑", href: "https://poedb.tw/cn/Aurumvorax", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL0F1cnVtdm9yYXgiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/64b63c7413/Aurumvorax.png", baseType: "练武者细剑" }, { name: "月影之耀 灵相魔盾", href: "https://poedb.tw/cn/Light_of_Lunaris", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0x1bmFyaXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/a684af2793/Lunaris.png", baseType: "灵相魔盾" }, { name: "瑞佛统帅 夜语长剑", href: "https://poedb.tw/cn/Rigwalds_Command", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1JpZ3dhcmxTd29yZCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/90114046a7/RigwarlSword.png", baseType: "夜语长剑" }, { name: "脑乱者 戮魂重锤", href: "https://poedb.tw/cn/Brain_Rattler", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvQnJhaW5TY3JhbWJsZXIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/0749c07fa6/BrainScrambler.png", baseType: "戮魂重锤" }, { name: "蜂巢涌动 刺喉刃", href: "https://poedb.tw/cn/The_Wasp_Nest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9MZXZpYXRoYW5pdm9yeSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8d31776c34/Leviathanivory.png", baseType: "刺喉刃" }, { name: "钢铁指挥【仿品】 死亡之弓", href: "https://poedb.tw/cn/Replica_Iron_Commander", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0lyb25Db21tZW5kYW50IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/001ca245e3/IronCommendant.png", baseType: "死亡之弓" }, { name: "拉维安加的智慧 战锤", href: "https://poedb.tw/cn/Laviangas_Wisdom", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2UzYSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/3c0044c7be/OneHandMace3a.png", baseType: "战锤" }, { name: "圣徒胫骨 史典长杖", href: "https://poedb.tw/cn/Femurs_of_the_Saints", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvRmVtdXJzb2Z0aGVTYWludHMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/e275f87366/FemursoftheSaints.png", baseType: "史典长杖" }, { name: "血肉之嗜 梦境之锤", href: "https://poedb.tw/cn/Flesh-Eater", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U2VW5pcXVlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/2db8b10771/OneHandMace6Unique.png", baseType: "梦境之锤" }, { name: "永恒苹果 魂相魔盾", href: "https://poedb.tw/cn/The_Eternal_Apple", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1RoZUV0ZXJuYWxBcHBsZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0f1033587d/TheEternalApple.png", baseType: "魂相魔盾" }, { name: "正义之鳞 魂相魔盾", href: "https://poedb.tw/cn/The_Scales_of_Justice", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0dvZGRlc3NTY2FsZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e4ddbd93f5/GoddessScales.png", limit: "「帝王试炼迷宫」限定掉落", baseType: "魂相魔盾" }, { name: "阿伯瑞斯 暗影弓", href: "https://poedb.tw/cn/Arborix", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1ZlcmRhbnRHdWFyZGlhbkJvdyIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/9008310cc7/VerdantGuardianBow.png", limit: "「Vendor recipe system」限定掉落", baseType: "暗影弓" }, { name: "离异梦寐 军用长刃", href: "https://poedb.tw/cn/Severed_in_Sleep", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0V0ZXJuYWxTbGVlcDEiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/60deeaccc5/EternalSleep1.png", limit: "「夏乌拉之域」限定掉落\n「精华」联盟限定\n使用 夏乌拉的祝福 升级 合流梦寐", baseType: "军用长刃" }, { name: "骤雨之弦【仿品】 短弓", href: "https://poedb.tw/cn/Replica_Quill_Rain", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzJ1bmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5c5cad82e8/Bow2unique.png", baseType: "短弓" }, { name: "Nametaker 权贵之剑", href: "https://poedb.tw/cn/Nametaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0FmZmxpY3Rpb25Td29yZCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/7b5d4f7c22/AfflictionSword.png", limit: "「禁咒荒林」限定掉落", baseType: "权贵之剑" }, { name: "女爵 旧军刀", href: "https://poedb.tw/cn/The_Princess", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDNVbmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/2ffa300730/OneHandSword3Unique.png", baseType: "旧军刀" }, { name: "思想奔流 军团长剑", href: "https://poedb.tw/cn/The_Surging_Thoughts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0hhcmJpbmdlclN3b3JkVXBncmFkZWQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/bf1d1647f5/HarbingerSwordUpgraded.png", limit: "「灌注的降临之地」限定掉落\n「庄园」联盟限定\n秘法君临 使用 电击卷轴 升级", baseType: "军团长剑" }, { name: "艾普之梦 瓦尔魔盾", href: "https://poedb.tw/cn/Apeps_Slumber", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0FwZXBzU2x1bWJlciIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/334298da3d/ApepsSlumber.png", limit: "「毒林」限定掉落\n「穿越」联盟限定\n使用 觉醒魔瓶 升级 艾普的霸权", baseType: "瓦尔魔盾" }, { name: "阔斩 巨战斧", href: "https://poedb.tw/cn/Wideswing", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9XaWRlc3dpbmciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/e9dfcf58df/Wideswing.png", baseType: "巨战斧" }, { name: "迷雾之墙【仿品】 漆彩轻盾", href: "https://poedb.tw/cn/Replica_Mistwall", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01pc3R3YWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/d81f034c2d/Mistwall.png", baseType: "漆彩轻盾" }, { name: "献祭之心 巨人魔盾", href: "https://poedb.tw/cn/Rathpith_Globe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDZ1bmlxdWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5f2434a635/ShieldInt6unique.png", baseType: "巨人魔盾" }, { name: "德瑞索的热情 穿甲刺剑", href: "https://poedb.tw/cn/Daressos_Passion", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL0RhcmVzc29zIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/d698c36c19/Daressos.png", baseType: "穿甲刺剑" }, { name: "魔力风暴 软橡魔盾", href: "https://poedb.tw/cn/Manastorm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hbmFzdG9ybSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/d816fe3053/Manastorm.png", limit: "「舆图战记」限定掉落", baseType: "软橡魔盾" }, { name: "暴雨之舵 朽木圆盾", href: "https://poedb.tw/cn/Wheel_of_the_Stormsail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1doZWVsb2Z0aGVzdG9ybXNhaWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9ff4153db8/Wheelofthestormsail.png", baseType: "朽木圆盾" }, { name: "霜息【仿品】 华丽之锤", href: "https://poedb.tw/cn/Replica_Frostbreath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvRnJvc3RCcmVhdGgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8a6b305388/FrostBreath.png", baseType: "华丽之锤" }, { name: "幽魂之息 铁锻长杖", href: "https://poedb.tw/cn/Dying_Breath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvRHlpbmdCcmVhdGgiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/3b7be0c935/DyingBreath.png", baseType: "铁锻长杖" }, { name: "魔暴之痕 脊弓", href: "https://poedb.tw/cn/Voltaxic_Rift", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1ZvaWRzaGFmdCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/aaa5cfdba1/Voidshaft.png", baseType: "脊弓" }, { name: "图克哈玛堡垒【仿品】 乌木塔盾", href: "https://poedb.tw/cn/Replica_Tukohamas_Fortress", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1R1a29oYW1hc0ZvcnRyZXNzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/e502c4bcf2/TukohamasFortress.png", baseType: "乌木塔盾" }, { name: "苦痛之处 巨人魔盾", href: "https://poedb.tw/cn/Bitterbind_Point", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hc3RlcnNGb2N1cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/1b2e5df5a6/MastersFocus.png", limit: "「亡灵大师卡塔莉娜」限定掉落\n「背叛者」联盟限定", baseType: "巨人魔盾" }, { name: "沉默之雷 坚锤", href: "https://poedb.tw/cn/Mj%C3%B6lner", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvTWpvbG5lciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/3e6fc15b26/Mjolner.png", baseType: "坚锤" }, { name: "月岚 征战之斧", href: "https://poedb.tw/cn/Moonbenders_Wing", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9Nb29uYmVuZGVyc1dpbmciLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/68a04ccc3f/MoonbendersWing.png", baseType: "征战之斧" }, { name: "白银之舌 先驱者之弓", href: "https://poedb.tw/cn/Slivertongue", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1NpbHZlclRvbmd1ZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/15c7237f48/SilverTongue.png", baseType: "先驱者之弓" }, { name: "侍从 权贵圆盾", href: "https://poedb.tw/cn/The_Squire", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0Nhc3Bpcm9zUmVzb25hbmNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/94531d2461/CaspirosResonance.png", baseType: "权贵圆盾" }, { name: "内布利斯【仿品】 虚影短杖", href: "https://poedb.tw/cn/Replica_Nebulis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9TY2VwdHJlT2ZNZW1vcmllcyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/a627a19fc4/SceptreOfMemories.png", baseType: "虚影短杖" }, { name: "终息【仿品】 拳钉", href: "https://poedb.tw/cn/Replica_Last_Resort", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9OZXJhc0xhc3RSZXNvcnQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5f5a6bd205/NerasLastResort.png", baseType: "拳钉" }, { name: "破裂碎片 绯红圆盾", href: "https://poedb.tw/cn/Shattershard", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0V2ZXJnbGFzc0JhcnJpZXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/179a505595/EverglassBarrier.png", limit: "「夺宝奇兵」联盟限定", baseType: "绯红圆盾" }, { name: "裂隙 恐惧之牙", href: "https://poedb.tw/cn/Rive", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9CbGVlZENsYXciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/085844fb05/BleedClaw.png", baseType: "恐惧之牙" }, { name: "深渊绝壁 铆钉圆盾", href: "https://poedb.tw/cn/The_Deep_Ones_Hide", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0NoaXRpbmh1bGwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/90921c2a19/Chitinhull.png", baseType: "铆钉圆盾" }, { name: "库勒马克藤杖 蛇纹长杖", href: "https://poedb.tw/cn/Cane_of_Kulemak", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvQ2F0YXJpbmFTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/9e79ed63e5/CatarinaStaff.png", limit: "「亡灵大师卡塔莉娜」限定掉落", baseType: "蛇纹长杖" }, { name: "血棘 朽木之干", href: "https://poedb.tw/cn/The_Blood_Thorn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvVGhlQmxvb2RUaG9ybiIsInciOjEsImgiOjQsInNjYWxlIjoxfV0/3dac5ee34b/TheBloodThorn.png", baseType: "朽木之干" }, { name: "裂世轮回 风暴长杖", href: "https://poedb.tw/cn/Disintegrator", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvRWxkZXJTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxLCJlbGRlciI6dHJ1ZSwic2hhcGVyIjp0cnVlfV0/d2d11cc5cc/ElderStaff.png", limit: "「裂界者」限定掉落", baseType: "风暴长杖" }, { name: "惊悸剧院 柚木圆盾", href: "https://poedb.tw/cn/The_Ghastly_Theatre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1Ntb2tlQW5kTWlycm9ycyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/95eb622489/SmokeAndMirrors.png", baseType: "柚木圆盾" }, { name: "邪神庇护 波纹轻盾", href: "https://poedb.tw/cn/Great_Old_Ones_Ward", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0dyZWF0T2xkT25lc1dhcmQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3c0efbf6be/GreatOldOnesWard.png", baseType: "波纹轻盾" }, { name: "死亡屈服 帝国长杖", href: "https://poedb.tw/cn/The_Yielding_Mortality", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGFyYmluZ2VyU3RhZmZVcGdyYWRlZCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/76cf7c8cb7/HarbingerStaffUpgraded.png", limit: "「灌注的降临之地」限定掉落\n「庄园」联盟限定\n圣恶之喻 使用 焚血卷轴 升级", baseType: "帝国长杖" }, { name: "千齿 瓦尔轻盾", href: "https://poedb.tw/cn/Thousand_Teeth_Temu", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleFVuaXF1ZTEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c466a1eb2a/ShieldDexUnique1.png", baseType: "瓦尔轻盾" }, { name: "幻芒圣盾 斗士鸢盾", href: "https://poedb.tw/cn/Aegis_Aurora", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludFVuaXF1ZTd1bmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/ae1ec0f5d1/ShieldStrIntUnique7unique.png", baseType: "斗士鸢盾" }, { name: "灰色尖椎 审判长杖", href: "https://poedb.tw/cn/The_Grey_Spire", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvVGhlR3JleVNwaXJlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/6e3a1c2c79/TheGreySpire.png", baseType: "审判长杖" }, { name: "维多里奥的贡献 合板鸢盾", href: "https://poedb.tw/cn/Victarios_Charity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1ZpY3Rhcm9zQ2hhcml0eSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/baf0e57fb2/VictarosCharity.png", baseType: "合板鸢盾" }, { name: "汉恩的遗产 巨型塔盾", href: "https://poedb.tw/cn/Ahns_Heritage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0FobnNIZXJpdGFnZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/5a4ca9d54a/AhnsHeritage.png", baseType: "巨型塔盾" }, { name: "压迫者 权贵圆盾", href: "https://poedb.tw/cn/The_Oppressor", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1RoZVN1cHByZXNzb3IiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c8dcd744a2/TheSuppressor.png", baseType: "权贵圆盾" }, { name: "海妖魅曲 鱼竿", href: "https://poedb.tw/cn/Song_of_the_Sirens", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9GaXNoaW5nUm9kcy9VbmlxdWVGaXNoaW5nUm9kMSIsInciOjEsImgiOjQsInNjYWxlIjoxfV0/4e9d67b927/UniqueFishingRod1.png", baseType: "鱼竿" }, { name: "灭世 皇家猎弓", href: "https://poedb.tw/cn/Doomfletch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0Rvb21GbGV0Y2giLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/a284f1cdab/DoomFletch.png", baseType: "皇家猎弓" }, { name: "赤红风暴 钢木之弓", href: "https://poedb.tw/cn/The_Crimson_Storm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0ZvcnRpZmljYXRpb25zVW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/b95b104d3e/FortificationsUnique.png", limit: "「背叛者」联盟限定", baseType: "钢木之弓" }, { name: "维多里奥的贡献【仿品】 合板鸢盾", href: "https://poedb.tw/cn/Replica_Victarios_Charity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1ZpY3Rhcm9zQ2hhcml0eSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/baf0e57fb2/VictarosCharity.png", baseType: "合板鸢盾" }, { name: "阿兹里的反击 金阳轻盾", href: "https://poedb.tw/cn/Atziris_Reflection", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleDVVbmlxdWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/78fb81c375/ShieldDex5Unique.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "金阳轻盾" }, { name: "收割者 灵玉巨斧", href: "https://poedb.tw/cn/The_Harvest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9UaGVFeHRyYWN0b3IiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8452349a24/TheExtractor.png", baseType: "灵玉巨斧" }, { name: "坚定之刃 圣约之锤", href: "https://poedb.tw/cn/Callinellus_Malleus", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvQ2FsbGluZWxsdXNNYWxsZXVzIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/54da9946c9/CallinellusMalleus.png", baseType: "圣约之锤" }, { name: "奇异 白金短杖", href: "https://poedb.tw/cn/Singularity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9HbG9vbWV5ZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/12d7027e18/Gloomeye.png", baseType: "白金短杖" }, { name: "不屈烈焰 威能鸢盾", href: "https://poedb.tw/cn/Unyielding_Flame", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0RhbW5hdGlvQWV0ZXJuYSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/755ec1c5d8/DamnatioAeterna.png", baseType: "威能鸢盾" }, { name: "瑞佛的奋战长剑 高山重刃", href: "https://poedb.tw/cn/Rigwalds_Charge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDVVbmlxdWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/ce7492e94d/TwoHandSword5Unique.png", baseType: "高山重刃" }, { name: "布鲁特斯的刑具 祭仪短杖", href: "https://poedb.tw/cn/Brutus_Lead_Sprinkler", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvVGhlTGVhZFNwcmlua2xlciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/9a9217f832/TheLeadSprinkler.png", limit: "「苦痛」联盟限定", baseType: "祭仪短杖" }, { name: "寒光剑 重剑", href: "https://poedb.tw/cn/Shiversting", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDZVbmlxdWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/084a248453/TwoHandSword6Unique.png", baseType: "重剑" }, { name: "奇塔弗之盛宴 虚影巨斧", href: "https://poedb.tw/cn/Kitavas_Feast", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9LaXRhdmFzSHVuZ2VyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/7e0b7ac41a/KitavasHunger.png", baseType: "虚影巨斧" }, { name: "萨费尔的智慧 圣记鸢盾", href: "https://poedb.tw/cn/Saffells_Frame", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludFVuaXF1ZTYiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/89281a7dc3/ShieldStrIntUnique6.png", baseType: "圣记鸢盾" }, { name: "远祖之颅 环形魔盾", href: "https://poedb.tw/cn/Matua_Tupuna", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hdHVhdHVwdW5hIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/db1b66f81d/Matuatupuna.png", baseType: "环形魔盾" }, { name: "山特立的回应 铜锻魔盾", href: "https://poedb.tw/cn/Sentaris_Answer", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NhbnRhcmlzQW5zd2VyIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/f4438d618f/SantarisAnswer.png", baseType: "铜锻魔盾" }, { name: "命运之风 恶灵长杖", href: "https://poedb.tw/cn/The_Winds_of_Fate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvQW53ZW5zU3RhZmYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/e26a5d3c65/AnwensStaff.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "恶灵长杖" }, { name: "峰回路转 艾兹麦刺盾", href: "https://poedb.tw/cn/Perepiteia", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0xpZ2h0bmluZ1NoaWVsZCIsInciOjIsImgiOjIsInNjYWxlIjoxLCJzeW50aGVzaXNlZCI6dHJ1ZX1d/05aa542efd/LightningShield.png", limit: "「虚空忆境」联盟限定", baseType: "艾兹麦刺盾" }, { name: "回声锻炉 狱炎重剑", href: "https://poedb.tw/cn/Echoforge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0Nvc21pY0ZvcmdlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/df82c06267/CosmicForge.png", limit: "「贤主」限定掉落", baseType: "狱炎重剑" }, { name: "阿兹里的统治 审判长杖", href: "https://poedb.tw/cn/Atziris_Rule", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvUG9ydGVudE9mQUZhbHNlR29kIiwidyI6MiwiaCI6NCwic2NhbGUiOjEsInJlbGljIjo1fV0/3de8220276/PortentOfAFalseGod.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "审判长杖" }, { name: "艾许之面 瓦尔魔盾", href: "https://poedb.tw/cn/Eshs_Visage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0VzaHNNaXJyb3JVcGdyYWRlZCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/f965a13213/EshsMirrorUpgraded.png", limit: "「精华」联盟限定\n艾许之镜 使用 艾许的祝福 升级", baseType: "瓦尔魔盾" }, { name: "创域 铁锻长杖", href: "https://poedb.tw/cn/Realmshaper", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY1dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/33929e1979/Staff5unique.png", baseType: "铁锻长杖" }, { name: "行刑之刃 虎牙巨剑", href: "https://poedb.tw/cn/Terminus_Est", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZFVuaXF1ZTIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/c5d5843861/TwoHandSwordUnique2.png", baseType: "虎牙巨剑" }, { name: "马雷格罗的染血透镜 复合刺盾", href: "https://poedb.tw/cn/Maligaros_Lens", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hbGlnYXJvc0xlbnMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/514791cb42/MaligarosLens.png", baseType: "复合刺盾" }, { name: "绿藤【仿品】 朽木之干", href: "https://poedb.tw/cn/Replica_Fencoil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmYxdW5pcXVlIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/cff9022931/Staff1unique.png", baseType: "朽木之干" }, { name: "苦梦【仿品】 影语短杖", href: "https://poedb.tw/cn/Replica_Bitterdream", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyOHVuaXF1ZTIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/085f7726de/scepter8unique2.png", baseType: "影语短杖" }, { name: "泽尔的放大器 光辉刺盾", href: "https://poedb.tw/cn/Zeels_Amplifier", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1plYWxzQW1wbGlmaWVyIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/d1e9af3da7/ZealsAmplifier.png", baseType: "光辉刺盾" }, { name: "汉恩的蔑视 领主战冠", href: "https://poedb.tw/cn/Ahns_Contempt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0FobnNDb250ZW1wdCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/a946d28e48/AhnsContempt.png", baseType: "领主战冠" }, { name: "艾普的霸权 瓦尔魔盾", href: "https://poedb.tw/cn/Apeps_Supremacy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0FwZXBzU3VwcmVtYWN5IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/e97426b026/ApepsSupremacy.png", limit: "「穿越」联盟限定\n艾普之梦 使用 觉醒魔瓶 升级", baseType: "瓦尔魔盾" }, { name: "欧罗的贡品【仿品】 狱炎重剑", href: "https://poedb.tw/cn/Replica_Oros_Sacrifice", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL09yb3NTYWNyaWZpY2UiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/82b813f27d/OrosSacrifice.png", baseType: "狱炎重剑" }, { name: "扭魂者 艾兹麦长杖", href: "https://poedb.tw/cn/Soulwrest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvVG9wRG93blN0YXZlSWNvbiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/f62cfea775/TopDownStaveIcon.png", baseType: "艾兹麦长杖" }, { name: "乌尔尼多之吻 瓦尔巨斧", href: "https://poedb.tw/cn/Uul-Netols_Kiss", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9VdWxOZXRvbHNLaXNzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/300d5ffe23/UulNetolsKiss.png", limit: "「乌尔尼多之域」限定掉落\n「精华」联盟限定\n使用 乌尔尼多的祝福 升级 乌尔尼多的拥抱", baseType: "瓦尔巨斧" }, { name: "巫木 松木塔盾", href: "https://poedb.tw/cn/Trolltimber_Spire", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0clVuaXF1ZTMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/062f3d11c8/ShieldStrUnique3.png", limit: "「风暴」联盟限定", baseType: "松木塔盾" }, { name: "终末之始 狮爪巨剑", href: "https://poedb.tw/cn/Doomsower", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0Rvb21Tb3dlciIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/7d9d914b75/DoomSower.png", baseType: "狮爪巨剑" }, { name: "深渊之唤 艾兹麦坚盔", href: "https://poedb.tw/cn/Abyssus", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0FieXNzdXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/a12f5424c8/Abyssus.png", baseType: "艾兹麦坚盔" }, { name: "孔明的神算 远古魔盾", href: "https://poedb.tw/cn/Kongmings_Stratagem", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0tvbmdtaW5nc1N0cmF0YWdlbSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/b7f1e57399/KongmingsStratagem.png", baseType: "远古魔盾" }, { name: "降伏 艾兹麦塔盾", href: "https://poedb.tw/cn/The_Surrender", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0xvbmdpbmcyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/c97882a68e/Longing2.png", limit: "「精华」联盟限定\n悬念 使用 乌尔尼多的祝福 升级", baseType: "艾兹麦塔盾" }, { name: "雷姆诺的豪情 萨姆尼盔", href: "https://poedb.tw/cn/Hrimnors_Resolve", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hyaW1ub3JzUmVzb2x2ZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/cb3ab90132/HrimnorsResolve.png", baseType: "萨姆尼盔" }, { name: "康戈的战炎 惧灵重锤", href: "https://poedb.tw/cn/Kongors_Undying_Rage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvS29uZ29yc1VuZHlpbmdSYWdlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5fa26110bc/KongorsUndyingRage.png", baseType: "惧灵重锤" }, { name: "烈炎之翼 厚装鸢盾", href: "https://poedb.tw/cn/Rise_of_the_Phoenix", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1Jpc2VvZnRoZXBob2VuaXgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/965404630a/Riseofthephoenix.png", baseType: "厚装鸢盾" }, { name: "恐惧之缶 战争轻盾", href: "https://poedb.tw/cn/Chalice_of_Horrors", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0NoYWxpY2VvZmhvcnJvcnMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/532f7ec81c/Chaliceofhorrors.png", baseType: "战争轻盾" }, { name: "霸权时代 审判长杖", href: "https://poedb.tw/cn/Hegemonys_Era", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVnZW1vbnlzRXJhIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/85929506ae/HegemonysEra.png", baseType: "审判长杖" }, { name: "费尔之帽 三角帽", href: "https://poedb.tw/cn/Fairgraves_Tricorne", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0ZhaXJncmF2ZXNUcmljb3JuZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/6a828c8150/FairgravesTricorne.png", baseType: "三角帽" }, { name: "艾兹麦的荣光 粗铁盔", href: "https://poedb.tw/cn/Ezomyte_Peak", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V6b215dGVQZWFrIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/058b75e4e0/EzomytePeak.png", baseType: "粗铁盔" }, { name: "阿兹里的刑刃 瓦尔巨斧", href: "https://poedb.tw/cn/Atziris_Disfavour", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9BdHppcmlzRGlzZmF2b3VyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/1ffab716f8/AtzirisDisfavour.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "瓦尔巨斧" }, { name: "猎巫人的审判 贵族长杖", href: "https://poedb.tw/cn/Witchhunters_Judgment", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvQnJhbmREZXRvbmF0ZVN0YWZmIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/07d64ef02c/BrandDetonateStaff.png", limit: "「庄园化身欧莱娜」限定掉落\n「庄园」联盟限定", baseType: "贵族长杖" }, { name: "王者之刃 霸主巨斧", href: "https://poedb.tw/cn/Kingmaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9BbGV4YXhlYW5kaGVhcnRicmVha2VyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/fb47351eee/Alexaxeandheartbreaker.png", baseType: "霸主巨斧" }, { name: "无形炼狱 皇室坚盔", href: "https://poedb.tw/cn/The_Formless_Inferno", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Zvcm1sZXNzSW5GbGFtZXNVUEdSQURFIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/3ac12068fd/FormlessInFlamesUPGRADE.png", limit: "「精华」联盟限定\n无形火炬 使用 索伏的祝福 升级", baseType: "皇室坚盔" }, { name: "葛尔贡的凝视 弑君之面", href: "https://poedb.tw/cn/Gorgons_Gaze", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1BpbGxhcnNPZkFydW4iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/49ec219fc5/PillarsOfArun.png", limit: "「阿尔伦神柱」限定掉落", baseType: "弑君之面" }, { name: "德瑞索的勇者之盾 古代圆盾", href: "https://poedb.tw/cn/Daressos_Courage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleFVuaXF1ZTEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/320f1e78fa/ShieldStrDexUnique1.png", baseType: "古代圆盾" }, { name: "科塔拉的调节器 王权刺盾", href: "https://poedb.tw/cn/Qotras_Regulator", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0Fnb255T2ZEZWNheSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/025ae438c5/AgonyOfDecay.png", limit: "「驱灵仪式」联盟限定", baseType: "王权刺盾" }, { name: "不朽意志 威能鸢盾", href: "https://poedb.tw/cn/The_Immortal_Will", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0hhcmJpbmdlclNoaWVsZFVwZ3JhZGVkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/a259d55fe1/HarbingerShieldUpgraded.png", limit: "「灌注的降临之地」限定掉落\n「庄园」联盟限定\n不屈之志 使用 光棱卷轴 升级", baseType: "威能鸢盾" }, { name: "威严之刃 名贵巨剑", href: "https://poedb.tw/cn/Queens_Decree", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZFVuaXF1ZTMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/a79e04039c/TwoHandSwordUnique3.png", baseType: "名贵巨剑" }, { name: "艾尔弗雷 狼首皮盔", href: "https://poedb.tw/cn/Elevore", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dpbGRjYWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/bf0a462a3a/Wildcall.png", baseType: "狼首皮盔" }, { name: "寒焰 革兜", href: "https://poedb.tw/cn/Heatshiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlYXRzaGl2ZXIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/b1860c890e/Heatshiver.png", baseType: "革兜" }, { name: "鼠巢 熊首皮盔", href: "https://poedb.tw/cn/Rats_Nest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1JhdHNOZXN0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/857976167e/RatsNest.png", baseType: "熊首皮盔" }, { name: "裂颅 刚猛巨锤", href: "https://poedb.tw/cn/Trypanon", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHJ5cGFub24iLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/3152ab4124/Trypanon.png", baseType: "刚猛巨锤" }, { name: "苍空之翎 绸缎之兜", href: "https://poedb.tw/cn/Saqawals_Flock", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0F2aWFuSGVsbWV0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/29e7c95170/AvianHelmet.png", limit: "「苍空初子 萨奇沃」限定掉落\n「猎魔」联盟限定", baseType: "绸缎之兜" }, { name: "玛拉凯的远见 领主战冠", href: "https://poedb.tw/cn/Malachais_Vision", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hbGFjaGFpc1Zpc2lvbiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/bbdd9c241f/MalachaisVision.png", limit: "福尔的远见 使用 瓦尔宝珠 升级", baseType: "领主战冠" }, { name: "无击 残暴巨剑", href: "https://poedb.tw/cn/Hiltless", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0hpbHRsZXNzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/04689b7d41/Hiltless.png", baseType: "残暴巨剑" }, { name: "极地之眼 罪者之帽", href: "https://poedb.tw/cn/Alphas_Howl", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dvbGZoZWFkIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/2acc10e593/Wolfhead.png", baseType: "罪者之帽" }, { name: "吉尔菲的净罪之锤 铜影巨锤", href: "https://poedb.tw/cn/Geofris_Baptism", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U3VW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/378419527e/TwoHandMace7Unique.png", baseType: "铜影巨锤" }, { name: "禅意苦行僧 残暴巨剑", href: "https://poedb.tw/cn/The_Dancing_Dervish", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1JoeXNibGFkZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/3ed974e708/Rhysblade.png", baseType: "残暴巨剑" }, { name: "厌食者 狮首皮盔", href: "https://poedb.tw/cn/Obscurantis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL09ic2N1cmFudGlzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/95ebfbbef1/Obscurantis.png", baseType: "狮首皮盔" }, { name: "无形火炬 皇室坚盔", href: "https://poedb.tw/cn/The_Formless_Flame", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Zvcm1sZXNzSW5GbGFtZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/baa0d0009b/FormlessInFlames.png", limit: "「索伏之域」限定掉落\n「精华」联盟限定\n使用 索伏的祝福 升级 无形炼狱", baseType: "皇室坚盔" }, { name: "乱世之翼 艾兹麦巨斧", href: "https://poedb.tw/cn/Wings_of_Entropy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9FbnRyb3B5d2luZ3MiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/86e128789a/Entropywings.png", baseType: "艾兹麦巨斧" }, { name: "刺棘之冠 藤蔓之冠", href: "https://poedb.tw/cn/Crown_of_Thorns", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Nyb3dub2ZUaG9ybnMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/23054b0443/CrownofThorns.png", baseType: "藤蔓之冠" }, { name: "安赛娜丝的迅敏之冠 铁锻之冠", href: "https://poedb.tw/cn/Asenaths_Mark", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0h5cnJpc01hcmsiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4e0f1cc6a8/HyrrisMark.png", baseType: "铁锻之冠" }, { name: "极地之眼【仿品】 罪者之帽", href: "https://poedb.tw/cn/Replica_Alphas_Howl", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dvbGZoZWFkIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/2acc10e593/Wolfhead.png", baseType: "罪者之帽" }, { name: "金缕帽 皮帽", href: "https://poedb.tw/cn/Goldrim", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleFVuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/7f4908ef2f/HelmetDexUnique2.png", baseType: "皮帽" }, { name: "雷鸣洗礼 钢镜刺盾", href: "https://poedb.tw/cn/Font_of_Thunder", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0ZvbnRPZlRodW5kZXIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/dec53fec0c/FontOfThunder.png", limit: "「夺宝奇兵」联盟限定", baseType: "钢镜刺盾" }, { name: "疯狂边界 术雕巨剑", href: "https://poedb.tw/cn/Edge_of_Madness", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0VkZ2VPZk1hZG5lc3MiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/5ab6c808b5/EdgeOfMadness.png", baseType: "术雕巨剑" }, { name: "坚毅之食 坚毅塔盾", href: "https://poedb.tw/cn/Magna_Eclipsis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hZ25pc0VjbGlwc2lzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/1e76b68e1a/MagnisEclipsis.png", limit: "「Vendor recipe system」限定掉落", baseType: "坚毅塔盾" }, { name: "血债 掠夺者之盔", href: "https://poedb.tw/cn/Blood_Price", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Jsb29kUHJpY2VIZWxtVW5pcXVlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/ae8ee271e3/BloodPriceHelmUnique.png", baseType: "掠夺者之盔" }, { name: "红契符印 祭仪之冠", href: "https://poedb.tw/cn/Mark_of_the_Red_Covenant", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1BoYW50YXNtbGFGbGFtZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0d222d092f/PhantasmlaFlame.png", baseType: "祭仪之冠" }, { name: "幽冥灵王 灵骨之冠", href: "https://poedb.tw/cn/Wraithlord", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dyYWl0aGxvcmQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/090d3d6bb3/Wraithlord.png", baseType: "灵骨之冠" }, { name: "费西亚的花环 铁锻之冠", href: "https://poedb.tw/cn/Wreath_of_Phrecia", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dyZWF0aF9vZl9QaHJlY2lhIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/7ae5bac7c5/Wreath_of_Phrecia.png", baseType: "铁锻之冠" }, { name: "裂空者 狱炎重剑", href: "https://poedb.tw/cn/Voidforge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1N0YXJmb3JnZSIsInciOjIsImgiOjQsInNjYWxlIjoxLCJlbGRlciI6dHJ1ZSwic2hhcGVyIjp0cnVlfV0/7e1bc3d425/Starforge.png", limit: "「裂界者」限定掉落", baseType: "狱炎重剑" }, { name: "狮眼的荣耀之盾 坚毅塔盾", href: "https://poedb.tw/cn/Lioneyes_Remorse", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0clVuaXF1ZTYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/dd7ee8e1a0/ShieldStrUnique6.png", baseType: "坚毅塔盾" }, { name: "德瑞的蔑视 月影之冠", href: "https://poedb.tw/cn/Doedres_Scorn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0RvZWRyZXNTY29ybiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/16c4d034ee/DoedresScorn.png", baseType: "月影之冠" }, { name: "男爵 护面盔", href: "https://poedb.tw/cn/The_Baron", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZUJhcm9uIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/7a7ba87170/TheBaron.png", baseType: "护面盔" }, { name: "索伏的始源 城塞战弓", href: "https://poedb.tw/cn/Xophs_Inception", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0Jsb29kUGVyaWdyZWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/7856c171f7/BloodPerigree.png", limit: "「索伏之域」限定掉落\n「精华」联盟限定\n使用 索伏的祝福 升级 索伏的爱抚", baseType: "城塞战弓" }, { name: "追逐之羽 灵骨之冠", href: "https://poedb.tw/cn/Plume_of_Pursuit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1JhdmVuc0Nyb3duIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/dc40362912/RavensCrown.png", limit: "「凶兆贾纳尔」限定掉落\n「庄园」联盟限定", baseType: "灵骨之冠" }, { name: "新生之徽 朽木鸢盾", href: "https://poedb.tw/cn/Springleaf", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludFVuaXF1ZTIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/def84c6e93/ShieldStrIntUnique2.png", baseType: "朽木鸢盾" }, { name: "切特斯的威权 操灵者之冠", href: "https://poedb.tw/cn/Chitus_Apex", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0NoaXR1c0FwZXgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/65697b1d09/ChitusApex.png", baseType: "操灵者之冠" }, { name: "创造回声 皇室坚盔", href: "https://poedb.tw/cn/Echoes_of_Creation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZVR3aXN0aW5nU2NyZWFtIiwidyI6MiwiaCI6Miwic2NhbGUiOjEsInNoYXBlciI6dHJ1ZX1d/a52bc6cab0/TheTwistingScream.png", limit: "「塑界者」限定掉落", baseType: "皇室坚盔" }, { name: "苦痛狂鲨 霸者刺盾", href: "https://poedb.tw/cn/Jaws_of_Agony", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0JlYXJUcmFwU2hpZWxkMiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/4d66593647/BearTrapShield2.png", baseType: "霸者刺盾" }, { name: "元素的庇护 威能鸢盾", href: "https://poedb.tw/cn/Prism_Guardian", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1RoZUNvcnVuZHVtIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f9ca50a663/TheCorundum.png", baseType: "威能鸢盾" }, { name: "叶兰德尔的拥抱 远古之祭", href: "https://poedb.tw/cn/Earendels_Embrace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9FYXJlbmRlbHNFbWJyYWNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/7fbecdb2b3/EarendelsEmbrace.png", baseType: "远古之祭" }, { name: "暗夜毒牙 操灵者之冠", href: "https://poedb.tw/cn/Fenumus_Toxins", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1NwaWRlckFybW91ckhlbG1ldCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/da7582cbf6/SpiderArmourHelmet.png", limit: "「暗夜初子 费努姆斯」限定掉落\n「猎魔」联盟限定", baseType: "操灵者之冠" }, { name: "禁域面容 操灵者之冠", href: "https://poedb.tw/cn/Sandstorm_Visage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Fud2Vuc1RpYXJhIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/db74af1ed2/AnwensTiara.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "操灵者之冠" }, { name: "威尔玛的报偿 日耀之冠", href: "https://poedb.tw/cn/Wilmas_Requital", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dpbG1hc1JlcXVpdGFsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/32cf26ca5b/WilmasRequital.png", baseType: "日耀之冠" }, { name: "欧罗的贡品 狱炎重剑", href: "https://poedb.tw/cn/Oros_Sacrifice", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL09yb3NTYWNyaWZpY2UiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/82b813f27d/OrosSacrifice.png", baseType: "狱炎重剑" }, { name: "嗜雷之冠 日耀之冠", href: "https://poedb.tw/cn/Cowl_of_the_Ceraunophile", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1N1cHBvcnRlcjFoZWxtZXRDIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/9455b25c23/Supporter1helmetC.png", limit: "「菌潮」联盟限定", baseType: "日耀之冠" }, { name: "酷寒的凝视 灵能之笼", href: "https://poedb.tw/cn/Rime_Gaze", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludFVuaXF1ZTEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/607641b0c2/HelmetDexIntUnique1.png", baseType: "灵能之笼" }, { name: "冰霜之镜 彩绘轻盾", href: "https://poedb.tw/cn/Kaltenhalt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleFVuaXF1ZTYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/543c4a2444/ShieldDexUnique6.png", baseType: "彩绘轻盾" }, { name: "雷目 日耀之冠", href: "https://poedb.tw/cn/Thundersight", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V4cGxvcmVyc1Zpc2lvbkxpZ2h0bmluZyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/56f2f88c51/ExplorersVisionLightning.png", baseType: "日耀之冠" }, { name: "破碎信念 威能鸢盾", href: "https://poedb.tw/cn/Broken_Faith", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NhbnRvbmlzRmFpdGgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/82ea2899a8/SantonisFaith.png", limit: "「强酸洞穴」限定掉落\n「战团」联盟限定", baseType: "威能鸢盾" }, { name: "临死的施舍 钢镜刺盾", href: "https://poedb.tw/cn/Lepers_Alms", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0xlcGVyc0FsbXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3f9c2a1cec/LepersAlms.png", baseType: "钢镜刺盾" }, { name: "康戈的战炎【仿品】 惧灵重锤", href: "https://poedb.tw/cn/Replica_Kongors_Undying_Rage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvS29uZ29yc1VuZHlpbmdSYWdlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5fa26110bc/KongorsUndyingRage.png", baseType: "惧灵重锤" }, { name: "禁语 灵能之笼", href: "https://poedb.tw/cn/Scolds_Bridle", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1Njb2xkc0JyaWRsZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/d8277c58aa/ScoldsBridle.png", limit: "「苦痛」联盟限定", baseType: "灵能之笼" }, { name: "轮回 和谐魔盾", href: "https://poedb.tw/cn/Malachais_Loop", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hbGFjaGFpTG9vcCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8c38fb6a4e/MalachaiLoop.png", baseType: "和谐魔盾" }, { name: "强健否决者 灵能之笼", href: "https://poedb.tw/cn/Hale_Negator", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hhbGVOZWdhdG9yIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/f1a292f713/HaleNegator.png", limit: "「墨血库高」限定掉落\n「地心」联盟限定", baseType: "灵能之笼" }, { name: "惊险刺激 轻骑盔", href: "https://poedb.tw/cn/Thrillsteel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1vZldhciIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/887e20115c/HelmofWar.png", baseType: "轻骑盔" }, { name: "终息 拳钉", href: "https://poedb.tw/cn/Last_Resort", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9OZXJhc0xhc3RSZXNvcnQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5f5a6bd205/NerasLastResort.png", baseType: "拳钉" }, { name: "伊芙班的诡计 灵主之环", href: "https://poedb.tw/cn/Ylfebans_Trickery", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1lsZmViYW4iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c40f798e46/Ylfeban.png", limit: "「风暴」联盟限定", baseType: "灵主之环" }, { name: "敲诈笑颜 清视护盔", href: "https://poedb.tw/cn/The_Tricksters_Smile", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0F6bWVyaUhlbG1ldCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8f7af19434/AzmeriHelmet.png", limit: "「禁咒荒林」限定掉落", baseType: "清视护盔" }, { name: "丧钟 金面护盔", href: "https://poedb.tw/cn/Deidbell", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0RlaWRiZWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/fd66b0b28f/Deidbell.png", baseType: "金面护盔" }, { name: "艾许之镜 瓦尔魔盾", href: "https://poedb.tw/cn/Eshs_Mirror", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0VzaHNNaXJyb3IiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/983cf91bf4/EshsMirror.png", limit: "「艾许之域」限定掉落\n「精华」联盟限定\n使用 艾许的祝福 升级 艾许之面", baseType: "瓦尔魔盾" }, { name: "黑阳之冠 漆彩之盔", href: "https://poedb.tw/cn/Black_Sun_Crest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0JsYWNrc3VuY3Jlc3QiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/d5c3617a52/Blacksuncrest.png", baseType: "漆彩之盔" }, { name: "光辉之颅 精兵之盔", href: "https://poedb.tw/cn/Skullhead", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1NrdWxsaGVhZCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/55adeb7e35/Skullhead.png", baseType: "精兵之盔" }, { name: "雏鸟 漆彩之盔", href: "https://poedb.tw/cn/The_Fledgling", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V4dHJlbWVGb2N1cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/d900d9764f/ExtremeFocus.png", limit: "「契约：荣誉之心」限定掉落\n「夺宝奇兵」联盟限定", baseType: "漆彩之盔" }, { name: "德沃托的信念之盔 梦魇战盔", href: "https://poedb.tw/cn/Devotos_Devotion", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDJ1bmlxdWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/65fa7daa88/HelmetStrDex2unique.png", baseType: "梦魇战盔" }, { name: "夜幕 巨盔", href: "https://poedb.tw/cn/Veil_of_the_Night", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1ZlaWxPZlRoZU5pZ2h0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/809ee0994f/VeilOfTheNight.png", baseType: "巨盔" }, { name: "马赫索托之诈 冷钢鸢盾", href: "https://poedb.tw/cn/Mahuxotls_Machination", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01haHV4b3RsU2hpZWxkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/b39b6fe011/MahuxotlShield.png", limit: "「致命贪婪」联盟限定", baseType: "冷钢鸢盾" }, { name: "渴望之冠 全罩战盔", href: "https://poedb.tw/cn/Crest_of_Desire", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hZ25pZmljYXRpb24iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/1c4139ef41/Magnification.png", limit: "「夺宝奇兵」联盟限定", baseType: "全罩战盔" }, { name: "叶兰德尔的拥抱【仿品】 远古之祭", href: "https://poedb.tw/cn/Replica_Earendels_Embrace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9FYXJlbmRlbHNFbWJyYWNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/7fbecdb2b3/EarendelsEmbrace.png", baseType: "远古之祭" }, { name: "私欲的光辉 士兵之盔", href: "https://poedb.tw/cn/Honourhome", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hvbm91cmhvbWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/11382c25e9/Honourhome.png", baseType: "士兵之盔" }, { name: "收割者【仿品】 灵玉巨斧", href: "https://poedb.tw/cn/Replica_Harvest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9UaGVFeHRyYWN0b3IiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8452349a24/TheExtractor.png", baseType: "灵玉巨斧" }, { name: "拉其塔之舞 符文巨剑", href: "https://poedb.tw/cn/Rakiatas_Dance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1Jha2lhdGFTd29yZCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ec593eeaa8/RakiataSword.png", baseType: "符文巨剑" }, { name: "光明偷猎者 强化巨盔", href: "https://poedb.tw/cn/Lightpoacher", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0FieXNzSGVsbWV0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/45c869b05c/AbyssHelmet.png", limit: "「Abyss Lich」限定掉落\n「深渊」联盟限定", baseType: "强化巨盔" }, { name: "深海魔角 行政者战冠", href: "https://poedb.tw/cn/Craiceanns_Chitin", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0NyYWJVbmlxdWVIZWxtZXQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/70715aae61/CrabUniqueHelmet.png", limit: "「深海初子 克林斯昂」限定掉落\n「猎魔」联盟限定", baseType: "行政者战冠" }, { name: "灵漩 战意之盔", href: "https://poedb.tw/cn/Mindspiral", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01pbmRzcGlyYWwiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e4b2c14ad7/Mindspiral.png", baseType: "战意之盔" }, { name: "夜幕【仿品】 巨盔", href: "https://poedb.tw/cn/Replica_Veil_of_the_Night", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1ZlaWxPZlRoZU5pZ2h0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/809ee0994f/VeilOfTheNight.png", baseType: "巨盔" }, { name: "暴君王冠 行政者战冠", href: "https://poedb.tw/cn/Crown_of_the_Tyrant", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZUltcG9zaW5nIENyb3duIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/e9e915daa7/TheImposing%20Crown.png", limit: "「水晶之王奥尔」限定掉落\n「地心」联盟限定", baseType: "行政者战冠" }, { name: "饮魂者面罩 行政者战冠", href: "https://poedb.tw/cn/Mask_of_the_Spirit_Drinker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hc2tvZnRoZVNwaXJpdERyaW5rZXIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/7a9bcf5886/MaskoftheSpiritDrinker.png", limit: "「不朽圣殿」限定掉落\n「穿越」联盟限定\n使用 召唤魔瓶 升级 缝合恶魔面罩", baseType: "行政者战冠" }, { name: "吉尔菲的荣光 强化巨盔", href: "https://poedb.tw/cn/Geofris_Crest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0dlb2ZyaXNDcmVzdCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/4daae52cf5/GeofrisCrest.png", baseType: "强化巨盔" }, { name: "海昂的狂怒 军团长剑", href: "https://poedb.tw/cn/Hyaons_Fury", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0h5YW9uc0Z1cnkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/1abaf6507b/HyaonsFury.png", baseType: "军团长剑" }, { name: "缺角帝冠 箴言战冠", href: "https://poedb.tw/cn/The_Broken_Crown", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Jyb2tlbkNyb3duIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/98b19a6cfb/BrokenCrown.png", baseType: "箴言战冠" }, { name: "缝合恶魔面罩 行政者战冠", href: "https://poedb.tw/cn/Mask_of_the_Stitched_Demon", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hc2tvZnRoZVN0aXRjaGVkRGVtb24iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/0e24c9f156/MaskoftheStitchedDemon.png", limit: "「穿越」联盟限定\n饮魂者面罩 使用 召唤魔瓶 升级", baseType: "行政者战冠" }, { name: "海王冠冕 箴言战冠", href: "https://poedb.tw/cn/The_Brine_Crown", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZUJyaW5lQ3Jvd24iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/785aa5f630/TheBrineCrown.png", baseType: "箴言战冠" }, { name: "祭礼之雨 梦魇战盔", href: "https://poedb.tw/cn/The_Bringer_of_Rain", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZUJyaW5nZXJvZlJhaW4iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3878572958/TheBringerofRain.png", baseType: "梦魇战盔" }, { name: "福尔的远见 领主战冠", href: "https://poedb.tw/cn/Volls_Vision", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1ZvbGxzVmlzaW9uIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c8dd3f6cf3/VollsVision.png", limit: "使用 瓦尔宝珠 升级 玛拉凯的远见", baseType: "领主战冠" }, { name: "破晓者 巨型塔盾", href: "https://poedb.tw/cn/Dawnbreaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1N1cGVyaGVhdGVkU2hpZWxkIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/59e3552a9b/SuperheatedShield.png", limit: "「灼督」限定掉落", baseType: "巨型塔盾" }, { name: "内省之冠 箴言战冠", href: "https://poedb.tw/cn/Crown_of_the_Inward_Eye", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Nyb3duT2ZUaGVJbndhcmRFeWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/fdb20856e4/CrownOfTheInwardEye.png", limit: "「诸界觉者希鲁斯」限定掉落", baseType: "箴言战冠" }, { name: "众生指引 箴言战冠", href: "https://poedb.tw/cn/Speakers_Wreath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01pbmlvbkhlbG1ldCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7cf5db368e/MinionHelmet.png", baseType: "箴言战冠" }, { name: "禁断的军帽 强化巨盔", href: "https://poedb.tw/cn/Forbidden_Shako", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZUVwaXBoYW55IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/e8e44ba854/TheEpiphany.png", limit: "「庄园化身欧莱娜」限定掉落\n「庄园」联盟限定", baseType: "强化巨盔" }, { name: "南方雷霆圣杖 帝国长杖", href: "https://poedb.tw/cn/Agnerod_South", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8b60f5a033/Staff6unique.png", baseType: "帝国长杖" }, { name: "记忆囚笼 领主战冠", href: "https://poedb.tw/cn/Memory_Vault", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0VsZGVyR3VhcmRpYW4iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/efcf4a9c86/ElderGuardian.png", baseType: "领主战冠" }, { name: "深渊之唤【仿品】 艾兹麦坚盔", href: "https://poedb.tw/cn/Replica_Abyssus", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0FieXNzdXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/a12f5424c8/Abyssus.png", baseType: "艾兹麦坚盔" }, { name: "维里迪的面纱 领主战冠", href: "https://poedb.tw/cn/Viridis_Veil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0NvbnN0cmljdGluZ0Nyb3duIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/04ee655ca5/ConstrictingCrown.png", limit: "「贤主」限定掉落", baseType: "领主战冠" }, { name: "玛拉凯的祭具 铁锻之面", href: "https://poedb.tw/cn/Malachais_Simula", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hbGFjaGFpc1NpbXVsYSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8bf83455f4/MalachaisSimula.png", baseType: "铁锻之面" }, { name: "奇塔弗之渴望 热战之盔", href: "https://poedb.tw/cn/Kitavas_Thirst", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0tpdGF2YXNUaGlyc3QiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/585034f884/KitavasThirst.png", baseType: "热战之盔" }, { name: "耀日 威能鸢盾", href: "https://poedb.tw/cn/Invictus_Solaris", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0ludmljdHVzIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/98194c56fe/Invictus.png", baseType: "威能鸢盾" }, { name: "夜幕召唤 疫灾之面", href: "https://poedb.tw/cn/Curtain_Call", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0N1cnRhaW5DYWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/5f3eb95031/CurtainCall.png", baseType: "疫灾之面" }, { name: "意志交锋 黄金之面", href: "https://poedb.tw/cn/Willclash", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01pbmRCbG9ja01hc2siLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/aeb4a78ada/MindBlockMask.png", baseType: "黄金之面" }, { name: "北方雷霆圣杖 帝国长杖", href: "https://poedb.tw/cn/Agnerod_North", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8b60f5a033/Staff6unique.png", baseType: "帝国长杖" }, { name: "共鸣之面【仿品】 节庆之面", href: "https://poedb.tw/cn/Replica_Leer_Cast", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDl4IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/6693f97fdf/HelmetDexInt9x.png", baseType: "节庆之面" }, { name: "怨恨之眼 无情之面", href: "https://poedb.tw/cn/Eye_of_Malice", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V5ZU9mRGVzaXJlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4218c3cc66/EyeOfDesire.png", baseType: "无情之面" }, { name: "嗜火之冠 艾兹麦坚盔", href: "https://poedb.tw/cn/Cowl_of_the_Thermophile", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1N1cHBvcnRlcjFoZWxtZXRCIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/3a31f05cd3/Supporter1helmetB.png", limit: "「菌潮」联盟限定", baseType: "艾兹麦坚盔" }, { name: "悬念 艾兹麦塔盾", href: "https://poedb.tw/cn/The_Anticipation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0xvbmdpbmcxIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/50fbf4d6ba/Longing1.png", limit: "「乌尔尼多之域」限定掉落\n「精华」联盟限定\n使用 乌尔尼多的祝福 升级 降伏", baseType: "艾兹麦塔盾" }, { name: "大地之牙 鹰喙之面", href: "https://poedb.tw/cn/Farruls_Bite", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RpZ2VySGVsbWV0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c056a59c62/TigerHelmet.png", limit: "「大地初子 法瑞尔」限定掉落\n「猎魔」联盟限定", baseType: "鹰喙之面" }, { name: "影月 祭者圆盾", href: "https://poedb.tw/cn/Vix_Lunaris", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleFVuaXF1ZTQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/24175c8ffb/ShieldStrDexUnique4.png", baseType: "祭者圆盾" }, { name: "风暴拘束 无情之面", href: "https://poedb.tw/cn/The_Tempests_Binding", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0NoaWxsU2hvY2tIYXJiaW5nZXJNYXNrIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/9a113d997b/ChillShockHarbingerMask.png", limit: "「降临之地」限定掉落\n「先驱」联盟限定\n使用 解除卷轴 升级 风雪释放", baseType: "无情之面" }, { name: "谜容 瓦尔之面", href: "https://poedb.tw/cn/The_Vertex", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZVZlcnRleCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/e4cca2929d/TheVertex.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "瓦尔之面" }, { name: "异教面纱 弑神之面", href: "https://poedb.tw/cn/Heretics_Veil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0ZhY2VPZkRpdmluaXR5IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/dcefc8975e/FaceOfDivinity.png", baseType: "弑神之面" }, { name: "鸥喙 祸鸦之面", href: "https://poedb.tw/cn/The_Gull", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZUd1bGwiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/ca1678efd9/TheGull.png", limit: "「支配」联盟限定", baseType: "祸鸦之面" }, { name: "裁决面罩 行政者战冠", href: "https://poedb.tw/cn/Mask_of_the_Tribunal", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldE9mRG9taW5hbmNlMiIsInciOjIsImgiOjIsInNjYWxlIjoxLCJzeW50aGVzaXNlZCI6dHJ1ZX1d/7cac104f3e/HelmetOfDominance2.png", limit: "「虚空忆境」联盟限定", baseType: "行政者战冠" }, { name: "分形思维 瓦尔之面", href: "https://poedb.tw/cn/Fractal_Thoughts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0ZyYWN0YWx0aG91Z2h0cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/64d44c7c52/Fractalthoughts.png", baseType: "瓦尔之面" }, { name: "害人之口 唤骨头盔", href: "https://poedb.tw/cn/Maw_of_Mischief", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hd09mTWlzY2hpZWYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/1e970a0f36/MawOfMischief.png", baseType: "唤骨头盔" }, { name: "风雪释放 无情之面", href: "https://poedb.tw/cn/The_Tempests_Liberation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hhcmJpbmdlckhlbG1VcGdyYWRlZCIsInciOjIsImgiOjIsInNjYWxlIjoxLCJyZWxpYyI6Nn1d/3cd51ee5dd/HarbingerHelmUpgraded.png", limit: "「灌注的降临之地」限定掉落\n「庄园」联盟限定\n风暴拘束 使用 解除卷轴 升级", baseType: "无情之面" }, { name: "混沌一瞥 瓦尔之面", href: "https://poedb.tw/cn/Glimpse_of_Chaos", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1ZhYWxDb3JydXB0aW9uSGVsbWV0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/3476e5818d/VaalCorruptionHelmet.png", limit: "「致命贪婪」联盟限定", baseType: "瓦尔之面" }, { name: "刺棘宝甲 铁制背心", href: "https://poedb.tw/cn/Bramblejack", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9CcmFtYmxlamFjayIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/d2e07d1ed8/Bramblejack.png", baseType: "铁制背心" }, { name: "卡迪甘王冠 符文王冠", href: "https://poedb.tw/cn/Cadigans_Crown", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0FkYXB0YXRpb25IZWxtZXRVbmlxdWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/693ad15174/AdaptationHelmetUnique.png", limit: "「堕落之源欧罗什」限定掉落\n「先祖秘藏」联盟限定", baseType: "符文王冠" }, { name: "信仰守卫 符文头盔", href: "https://poedb.tw/cn/Faithguard", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1NwaXJpdEhlbG1ldFVuaXF1ZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0921dc17df/SpiritHelmetUnique.png", limit: "「先祖秘藏」联盟限定", baseType: "符文头盔" }, { name: "烈阳铠 铜锻板甲", href: "https://poedb.tw/cn/Solaris_Lorica", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy90b3JuZmxlc2hvZmdvZHMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/420988ec91/tornfleshofgods.png", baseType: "铜锻板甲" }, { name: "上古之颅 唤骨头盔", href: "https://poedb.tw/cn/Ancient_Skull", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvRWZmZWN0cy9IYXRzL0NodWh1dGx1c1NrdWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/65537c5ac3/ChuhutlusSkull.png", baseType: "唤骨头盔" }, { name: "智者之秘 鹰喙之面", href: "https://poedb.tw/cn/Mind_of_the_Council", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RodW5kZXJpbmdXaGlzcGVycyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/dd96346bfc/ThunderingWhispers.png", limit: "「预言」联盟限定", baseType: "鹰喙之面" }, { name: "斯塔空加之首 绸缎之兜", href: "https://poedb.tw/cn/Starkonjas_Head", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Z1cnJ5aGVhZG9mc3RhcmtvbmphIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/ba13fa5202/Furryheadofstarkonja.png", baseType: "绸缎之兜" }, { name: "狮眼的视线 征战重铠", href: "https://poedb.tw/cn/Lioneyes_Vision", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9MaW9uZXllc0FybW91ciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/b6e10a9216/LioneyesArmour.png", baseType: "征战重铠" }, { name: "独断专行 决斗之铠", href: "https://poedb.tw/cn/Pragmatism", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9HcmVlbmV5ZXNBcm1vdXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/bef792208d/GreeneyesArmour.png", limit: "「禁咒荒林」限定掉落", baseType: "决斗之铠" }, { name: "深海魔甲 金耀之铠", href: "https://poedb.tw/cn/Craiceanns_Carapace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DcmFiVW5pcXVlIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsInJlbGljIjo0fV0/7bbc3f9ca0/CrabUnique.png", limit: "「深海初子 克林斯昂」限定掉落\n「猎魔」联盟限定", baseType: "金耀之铠" }, { name: "贪婪之拥 金耀之铠", href: "https://poedb.tw/cn/Greeds_Embrace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9HcmVlZHNFbWJyYWNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/0e8984128f/GreedsEmbrace.png", baseType: "金耀之铠" }, { name: "三龙战纪 黄金之面", href: "https://poedb.tw/cn/The_Three_Dragons", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RocmVlRHJhZ29ucyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/50afe0768b/ThreeDragons.png", baseType: "黄金之面" }, { name: "卓识 日耀之冠", href: "https://poedb.tw/cn/Flamesight", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V4cGxvcmVyc1Zpc2lvbkZpcmUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/972275807c/ExplorersVisionFire.png", baseType: "日耀之冠" }, { name: "金珏之缮 精制皮甲", href: "https://poedb.tw/cn/Kintsugi", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9LaW50c3VnaSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8fcd7ea593/Kintsugi.png", limit: "「预言」联盟限定", baseType: "精制皮甲" }, { name: "森林之后 命运皮甲", href: "https://poedb.tw/cn/Queen_of_the_Forest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9RdWVlbm9mdGhlRm9yZXN0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/bd3ec993e7/QueenoftheForest.png", baseType: "命运皮甲" }, { name: "篡夺者的救赎 永恒坚盔", href: "https://poedb.tw/cn/Usurpers_Penance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1VuYnJpZGxlZFJhZ2UiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3d6a6901bb/UnbridledRage.png", limit: "「先祖秘藏」联盟限定", baseType: "永恒坚盔" }, { name: "狐毛铠 狂野部族皮甲", href: "https://poedb.tw/cn/Foxshade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Gb3hzaGFkZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/bf15e97218/Foxshade.png", baseType: "狂野部族皮甲" }, { name: "皇帝的警戒 冷钢鸢盾", href: "https://poedb.tw/cn/Emperors_Vigilance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0hpZ2hQcmllc3RTaGllbGQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4c24c383b8/HighPriestShield.png", limit: "「庄园」联盟限定", baseType: "冷钢鸢盾" }, { name: "荒途 日光皮甲", href: "https://poedb.tw/cn/Briskwrap", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Ccmlza3dyYXAiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4a3c7d71e6/Briskwrap.png", baseType: "日光皮甲" }, { name: "布隆的影衣 死神之装", href: "https://poedb.tw/cn/Bronns_Lithe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Ccm9ubnNsaXRoZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/80b9cf6b0b/Bronnslithe.png", baseType: "死神之装" }, { name: "西里的战衣 星辰皮甲", href: "https://poedb.tw/cn/Hyrris_Ire", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4M0NVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/fb532d6c21/BodyDex3CUnique.png", baseType: "星辰皮甲" }, { name: "雪盲恩惠 星辰皮甲", href: "https://poedb.tw/cn/The_Snowblind_Grace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVTbm93YmxpbmRHcmFjZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/1f9378f004/TheSnowblindGrace.png", limit: "「托沃之域」限定掉落\n「精华」联盟限定\n使用 托沃的祝福 升级 完美姿态", baseType: "星辰皮甲" }, { name: "雷姆诺的夺命凶器 冷铁重锤", href: "https://poedb.tw/cn/Hrimnors_Hymn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U2VW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/31ad6258ac/TwoHandMace6Unique.png", baseType: "冷铁重锤" }, { name: "冈姆的壮志 荣耀战铠", href: "https://poedb.tw/cn/Kaoms_Heart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyM0NVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/1027cdf1ad/BodyStr3CUnique.png", baseType: "荣耀战铠" }, { name: "邪眼之冠 灵主之环", href: "https://poedb.tw/cn/Crown_of_Eyes", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Nyb3dub2ZFeWVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/778182e367/CrownofEyes.png", baseType: "灵主之环" }, { name: "卡斯普里意志 暗影之装", href: "https://poedb.tw/cn/Cospris_Will", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Db3NwcmlzV2lsbCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e7801b1322/CosprisWill.png", baseType: "暗影之装" }, { name: "完美姿态【仿品】 星辰皮甲", href: "https://poedb.tw/cn/Replica_Perfect_Form", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVQZXJmZWN0Rm9ybSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/b149b68ecb/ThePerfectForm.png", baseType: "星辰皮甲" }, { name: "曙光骤现 冷钢之冠", href: "https://poedb.tw/cn/Sudden_Dawn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1NvdWxsZXNzRWxlZ2FuY2UiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/9c572a99fe/SoullessElegance.png", limit: "「漆黑之星」限定掉落", baseType: "冷钢之冠" }, { name: "希伯的霸权 灵主之环", href: "https://poedb.tw/cn/Ebers_Unification", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1BhbGVDb3VuY2lsSGVsbWV0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4415fd6474/PaleCouncilHelmet.png", limit: "「苍白议会」限定掉落", baseType: "灵主之环" }, { name: "靛蓝之冠 灵主之环", href: "https://poedb.tw/cn/Indigon", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1ViZXJFbGRlckhlbG1ldCIsInciOjIsImgiOjIsInNjYWxlIjoxLCJlbGRlciI6dHJ1ZSwic2hhcGVyIjp0cnVlfV0/29ddf76107/UberElderHelmet.png", limit: "「裂界者」限定掉落", baseType: "灵主之环" }, { name: "拂烬 鹿皮外套", href: "https://poedb.tw/cn/Ashrend", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Bc2hyZW5kIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/9755e9fe99/Ashrend.png", baseType: "鹿皮外套" }, { name: "千里狙敌 罪者之帽", href: "https://poedb.tw/cn/Assailum", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RhbmdtYXp1YXJtb3VyaGVsbWV0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/6e327593b9/Tangmazuarmourhelmet.png", baseType: "罪者之帽" }, { name: "巨铜之顶 角斗重铠", href: "https://poedb.tw/cn/The_Brass_Dome", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Eb21lT2ZCcmFzcyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/41f06694f2/DomeOfBrass.png", baseType: "角斗重铠" }, { name: "冈姆的壮志【仿品】 荣耀战铠", href: "https://poedb.tw/cn/Replica_Kaoms_Heart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyM0NVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/1027cdf1ad/BodyStr3CUnique.png", baseType: "荣耀战铠" }, { name: "烈炎之袍 学者之袍", href: "https://poedb.tw/cn/Cloak_of_Flame", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUF1bmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/41c15c6511/BodyInt1Aunique.png", baseType: "学者之袍" }, { name: "千缎 简易之袍", href: "https://poedb.tw/cn/Thousand_Ribbons", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaG91c2FuZHJpYmJvbnMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/65a99640e9/Thousandribbons.png", baseType: "简易之袍" }, { name: "血誓【仿品】 蛛丝之袍", href: "https://poedb.tw/cn/Replica_Covenant", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9FbWJyYWNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/d0110e7660/Embrace.png", limit: "「夺宝奇兵」限定掉落", baseType: "蛛丝之袍" }, { name: "冥使之体 星芒战铠", href: "https://poedb.tw/cn/Deaths_Oath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9EZWF0aHNvYXRoIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f81375e335/Deathsoath.png", baseType: "星芒战铠" }, { name: "灰眼 日耀之冠", href: "https://poedb.tw/cn/Galesight", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V4cGxvcmVyc1Zpc2lvbkNvbGQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/702f0515fb/ExplorersVisionCold.png", baseType: "日耀之冠" }, { name: "薛朗的护身长袍 秘术长衣", href: "https://poedb.tw/cn/Shavronnes_Wrappings", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUNVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4f3e22a163/BodyInt1CUnique.png", baseType: "秘术长衣" }, { name: "塔温的披风 智者之袍", href: "https://poedb.tw/cn/Cloak_of_Tawmr_Isley", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Ub21PUmVpbGx5Q2xvYWsiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/595ee9c868/TomOReillyCloak.png", baseType: "智者之袍" }, { name: "无常法袍 智者之袍", href: "https://poedb.tw/cn/Garb_of_the_Ephemeral", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVUZW1wbGFyc1JvYmVzIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsInN5bnRoZXNpc2VkIjp0cnVlfV0/bd9f49e4b4/TheTemplarsRobes.png", limit: "「维纳留斯」限定掉落\n「虚空忆境」联盟限定", baseType: "智者之袍" }, { name: "灵魂甲胄 灭世法衣", href: "https://poedb.tw/cn/The_Coming_Calamity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TcGlyaXRIYXJuZXNzIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/69c0a6780d/SpiritHarness.png", baseType: "灭世法衣" }, { name: "炼狱之心 毒蛛丝之袍", href: "https://poedb.tw/cn/Infernal_Mantle", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9JbmZlcm5hbG1hbnRsZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/ea1b86d7f9/Infernalmantle.png", baseType: "毒蛛丝之袍" }, { name: "欺诈獠牙 龙鳞战甲", href: "https://poedb.tw/cn/Gruthkuls_Pelt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9XaWxlZmFuZ3NQZWx0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/e393dbd9af/WilefangsPelt.png", baseType: "龙鳞战甲" }, { name: "德瑞之肤 毒蛛丝之袍", href: "https://poedb.tw/cn/Doedres_Skin", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Eb2VkcmVzU2tpbiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/a04f3c7a0a/DoedresSkin.png", baseType: "毒蛛丝之袍" }, { name: "暗夜弑衣 毒蛛丝之袍", href: "https://poedb.tw/cn/Fenumus_Shroud", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TcGlkZXJBcm1vdXJCb2R5IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f48eff23e8/SpiderArmourBody.png", limit: "「暗夜初子 费努姆斯」限定掉落\n「猎魔」联盟限定", baseType: "毒蛛丝之袍" }, { name: "塑血巨匠 操灵者背心", href: "https://poedb.tw/cn/Fleshcrafter", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Fc3NlbmNlR2lmdGVyIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/3b3446e019/EssenceGifter.png", baseType: "操灵者背心" }, { name: "疫鼠囚笼 鲨皮之衣", href: "https://poedb.tw/cn/The_Rat_Cage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVSYXRDYWdlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/585313cc27/TheRatCage.png", limit: "「苦痛」联盟限定", baseType: "鲨皮之衣" }, { name: "兽毛披肩 瓦尔法衣", href: "https://poedb.tw/cn/The_Beast_Fur_Shawl", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9CZWFzdEZ1clNoYXdsIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f2a30a7f0c/BeastFurShawl.png", baseType: "瓦尔法衣" }, { name: "共鸣之面 节庆之面", href: "https://poedb.tw/cn/Leer_Cast", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDl4IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/6693f97fdf/HelmetDexInt9x.png", baseType: "节庆之面" }, { name: "大地之护【仿品】 胜利盔甲", href: "https://poedb.tw/cn/Replica_Farruls_Fur", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaWdlckJvZHlBcm1vdXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/1cfa248b9b/TigerBodyArmour.png", baseType: "胜利盔甲" }, { name: "薛鲁宾的恶作剧 胜利盔甲", href: "https://poedb.tw/cn/Cherrubims_Maleficence", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DaGVycnViaW1zQ3JhdmUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/90d81e1e5b/CherrubimsCrave.png", baseType: "胜利盔甲" }, { name: "兽腹 连身龙鳞战甲", href: "https://poedb.tw/cn/Belly_of_the_Beast", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9iZWxseW9mdGhlYmVhc3QiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d38723f8b9/bellyofthebeast.png", baseType: "连身龙鳞战甲" }, { name: "大地之护 胜利盔甲", href: "https://poedb.tw/cn/Farruls_Fur", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaWdlckJvZHlBcm1vdXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjV9XQ/5030cf2889/TigerBodyArmour.png", limit: "「大地初子 法瑞尔」限定掉落\n「猎魔」联盟限定", baseType: "胜利盔甲" }, { name: "鼠疫之源 暗影者长靴", href: "https://poedb.tw/cn/Bubonic_Trail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BYnlzc0Jvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/61dd23f86c/AbyssBoots.png", limit: "「Abyss Lich」限定掉落\n「深渊」联盟限定", baseType: "暗影者长靴" }, { name: "升华之风 远古护手", href: "https://poedb.tw/cn/Winds_of_Change", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyNiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/d66854dd65/GlovesStr6.png", limit: "「帝王试炼迷宫」限定掉落", baseType: "远古护手" }, { name: "帝国之掌 巨灵护手", href: "https://poedb.tw/cn/Empires_Grasp", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvSGl0aGVyIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c23bccbc39/Hither.png", baseType: "巨灵护手" }, { name: "欧罗什的指控 符文护腿", href: "https://poedb.tw/cn/Olroths_Charge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BZGFwdGF0aW9uQm9vdHNVbmlxdWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/a0b7d6e35c/AdaptationBootsUnique.png", limit: "「先祖秘藏」联盟限定", baseType: "符文护腿" }, { name: "君主之肤 简易之袍", href: "https://poedb.tw/cn/Skin_of_the_Lords", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9NeXJpYWRHcmFzcEdyYW5kIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/a4525f8d94/MyriadGraspGrand.png", limit: "「精华」联盟限定\n忠诚之肤 使用 夏乌拉的祝福 升级", baseType: "简易之袍" }, { name: "阿寇亚之凝视 弑君之面", href: "https://poedb.tw/cn/Akoyas_Gaze", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Frb3lhTWFzayIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/bee9827a02/AkoyaMask.png", baseType: "弑君之面" }, { name: "女王的饥饿 瓦尔法衣", href: "https://poedb.tw/cn/The_Queens_Hunger", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVRdWVlbnNIdW5nZXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9dd0ea5e00/TheQueensHunger.png", limit: "「亡灵大师卡塔莉娜」限定掉落\n「背叛者」联盟限定", baseType: "瓦尔法衣" }, { name: "第四誓言 虔诚链甲", href: "https://poedb.tw/cn/The_Fourth_Vow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DbGVyaWNzU2FuY3R1YXJ5IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/447f6b17b1/ClericsSanctuary.png", baseType: "虔诚链甲" }, { name: "德瑞索的卫衣 连身龙鳞铠", href: "https://poedb.tw/cn/Daressos_Defiance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9EYXJlc3Nvc0RlZmlhbmNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/2e5802be5f/DaressosDefiance.png", baseType: "连身龙鳞铠" }, { name: "征服之口 冷钢之冠", href: "https://poedb.tw/cn/Maw_of_Conquest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hd09mQ29ucXVlc3QiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4d335be1c6/MawOfConquest.png", baseType: "冷钢之冠" }, { name: "皇家卫甲 征战锁甲", href: "https://poedb.tw/cn/Kingsguard", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9LaW5nc2d1YXJkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/28d6e7ff11/Kingsguard.png", baseType: "征战锁甲" }, { name: "孢囊守卫 圣者链甲", href: "https://poedb.tw/cn/Sporeguard", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TdXBwb3J0ZXIxYm9keUEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2eeb350e76/Supporter1bodyA.png", limit: "「菌潮」联盟限定", baseType: "圣者链甲" }, { name: "安姆布的战甲【仿品】 圣战锁甲", href: "https://poedb.tw/cn/Replica_Ambus_Charge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TdHJJbnQzQVVuaXF1ZTIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9928614b24/StrInt3AUnique2.png", baseType: "圣战锁甲" }, { name: "魔道之衣 华丽环甲", href: "https://poedb.tw/cn/Lightbane_Raiment", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9MaWdodGJhbmVyYWlubWVudCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/016757db31/Lightbanerainment.png", baseType: "华丽环甲" }, { name: "满溢之甲 权贵环甲", href: "https://poedb.tw/cn/Loreweave", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Mb3Jld2VhdmUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/fd11495220/Loreweave.png", limit: "「Vendor recipe system」限定掉落", baseType: "权贵环甲" }, { name: "安姆布的战甲 圣战锁甲", href: "https://poedb.tw/cn/Ambus_Charge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TdHJJbnQzQVVuaXF1ZTIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9928614b24/StrInt3AUnique2.png", baseType: "圣战锁甲" }, { name: "吉尔菲的圣殿 权贵环甲", href: "https://poedb.tw/cn/Geofris_Sanctuary", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9HZW9mcmlTYW5jdHVhcnkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/6f94f74244/GeofriSanctuary.png", baseType: "权贵环甲" }, { name: "象牙之塔 圣者链甲", href: "https://poedb.tw/cn/The_Ivory_Tower", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVJdm9yeVRvd2VyIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/26d71eb965/TheIvoryTower.png", limit: "「舆图战记」限定掉落", baseType: "圣者链甲" }, { name: "尤图拉之贪噬 庄严之铠", href: "https://poedb.tw/cn/Utulas_Hunger", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9VdGFsYUJvZHlBcm1vdXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4a4891f3f3/UtalaBodyArmour.png", baseType: "庄严之铠" }, { name: "满溢之甲【仿品】 权贵环甲", href: "https://poedb.tw/cn/Replica_Loreweave", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Mb3Jld2VhdmUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/fd11495220/Loreweave.png", baseType: "权贵环甲" }, { name: "卫道之袍 漆彩束衣", href: "https://poedb.tw/cn/Cloak_of_Defiance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DbG9ha09mRGVmaWFuY2UiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/87997e3b8a/CloakOfDefiance.png", baseType: "漆彩束衣" }, { name: "多里亚尼的试作甲 圣者链甲", href: "https://poedb.tw/cn/Doryanis_Prototype", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TaG9ja0Nsb2FrIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/44e73cc73c/ShockCloak.png", baseType: "圣者链甲" }, { name: "血脉相连 骨制战甲", href: "https://poedb.tw/cn/Bloodbond", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Db21tdW5hbEZsZXNoIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/ad6a787fcf/CommunalFlesh.png", baseType: "骨制战甲" }, { name: "箭丽毒蛙 哨兵之衣", href: "https://poedb.tw/cn/Dendrobate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9EZW5kcm9iYXRpcyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/7c2d6dd5ce/Dendrobatis.png", baseType: "哨兵之衣" }, { name: "速度之力 狂虐者束衣", href: "https://poedb.tw/cn/Inpulsas_Broken_Heart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9PblNob2NrZWQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/ce499f7b0b/OnShocked.png", baseType: "狂虐者束衣" }, { name: "苍空之巢 血色之衣", href: "https://poedb.tw/cn/Saqawals_Nest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9BdmlhbkJvZHlBcm1vdXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/260410472f/AvianBodyArmour.png", limit: "「苍空初子 萨奇沃」限定掉落\n「猎魔」联盟限定", baseType: "血色之衣" }, { name: "永恒幽影【仿品】 血色之衣", href: "https://poedb.tw/cn/Replica_Eternity_Shroud", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9NYW50bGVPZkRpc21hbnRsaW5nIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsImVsZGVyIjp0cnVlLCJzaGFwZXIiOnRydWV9XQ/802dd6d751/MantleOfDismantling.png", baseType: "血色之衣" }, { name: "兀鸣 操灵者背心", href: "https://poedb.tw/cn/Vis_Mortis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9WaXNNb3J0aXMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/771efa547e/VisMortis.png", baseType: "操灵者背心" }, { name: "永恒幽影 血色之衣", href: "https://poedb.tw/cn/The_Eternity_Shroud", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9NYW50bGVPZkRpc21hbnRsaW5nIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsImVsZGVyIjp0cnVlLCJzaGFwZXIiOnRydWV9XQ/802dd6d751/MantleOfDismantling.png", limit: "「裂界者」限定掉落", baseType: "血色之衣" }, { name: "海军上将 映彩外套", href: "https://poedb.tw/cn/The_Admiral", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9IZWFydG9mdGhlRWxlbWVudHMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/f211c99b10/HeartoftheElements.png", limit: "「契约：达诺的覆灭」限定掉落\n「夺宝奇兵」联盟限定", baseType: "映彩外套" }, { name: "致命之体 映彩外套", href: "https://poedb.tw/cn/Carcass_Jack", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DYXJjYXNzSmFjayIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e496ea8e6e/CarcassJack.png", baseType: "映彩外套" }, { name: "无尽之卫 禁礼之甲", href: "https://poedb.tw/cn/The_Restless_Ward", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVSZXN0bGVzc1dhcmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2508832517/TheRestlessWard.png", baseType: "禁礼之甲" }, { name: "烈炎之心 圣洁锁甲", href: "https://poedb.tw/cn/Incandescent_Heart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9JbGx1bWluYXRpcyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/da0dbbc10a/Illuminatis.png", baseType: "圣洁锁甲" }, { name: "变形者外衣 狂虐者束衣", href: "https://poedb.tw/cn/Doppelg%C3%A4nger_Guise", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Db2xsZWN0b3JzR2FyYkRpZmYiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/eb8a6d36ef/CollectorsGarbDiff.png", limit: "「贤主」限定掉落", baseType: "狂虐者束衣" }, { name: "维多里奥之绝响 漆彩束衣", href: "https://poedb.tw/cn/Victarios_Influence", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9WaWN0YXJpb3NKYWNrZXQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/b50998d963/VictariosJacket.png", baseType: "漆彩束衣" }, { name: "钢铁要塞 征战重铠", href: "https://poedb.tw/cn/The_Iron_Fortress", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Jcm9uSGVhcnQgRmluYWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/113c4e83b6/IronHeart%20Final.png", baseType: "征战重铠" }, { name: "远征尽头 哨兵之衣", href: "https://poedb.tw/cn/Expeditions_End", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9BZG1pcmFsc0phY2tldCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8c204b4c87/AdmiralsJacket.png", limit: "「夺宝奇兵」联盟限定", baseType: "哨兵之衣" }, { name: "泯光寿衣 禁礼之甲", href: "https://poedb.tw/cn/Shroud_of_the_Lightless", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9BYnlzc0JvZHkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/cd67f9b5d3/AbyssBody.png", limit: "「Abyss Lich」限定掉落\n「深渊」联盟限定", baseType: "禁礼之甲" }, { name: "禁锢监狱 禁礼之甲", href: "https://poedb.tw/cn/Stasis_Prison", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DaHJvbm9tYW5jZXJBcm1vdXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjF9XQ/00838a0893/ChronomancerArmour.png", limit: "「Uber Timeless Conflict」限定掉落", baseType: "禁礼之甲" }, { name: "风暴骑士 坚铁胫甲", href: "https://poedb.tw/cn/Stormcharger", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TdG9ybWNoYXJnZXIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4f1fe9a640/Stormcharger.png", baseType: "坚铁胫甲" }, { name: "阿兹里的威权 祭礼束衣", href: "https://poedb.tw/cn/Atziris_Splendour", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9BdHppcmlzU3BsZW5kb3VyIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/24c910e168/AtzirisSplendour.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "祭礼束衣" }, { name: "卡胡图罗阿之确信 远古胫甲", href: "https://poedb.tw/cn/Kahuturoas_Certainty", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9LYWh1dHVyb2FCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/1453ec94bb/KahuturoaBoots.png", baseType: "远古胫甲" }, { name: "火柳胫甲 古钢胫甲", href: "https://poedb.tw/cn/Torchoak_Step", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy84NTQ4MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/5d406f4285/85483.png", baseType: "古钢胫甲" }, { name: "深海魔足 巨灵胫甲", href: "https://poedb.tw/cn/Craiceanns_Tracks", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9DcmFiVW5pcXVlQm9vdHMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/65740a31fd/CrabUniqueBoots.png", limit: "「深海初子 克林斯昂」限定掉落\n「猎魔」联盟限定", baseType: "巨灵胫甲" }, { name: "殒皇之冠 弑君之面", href: "https://poedb.tw/cn/Crown_of_the_Pale_King", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Nyb3dub2Z0aGVQYWxlS2luZyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/a2cd2b0900/CrownofthePaleKing.png", limit: "「苍白议会」限定掉落\n「风暴」联盟限定", baseType: "弑君之面" }, { name: "恶风足迹 强化胫甲", href: "https://poedb.tw/cn/Windscream", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9XaW5kc2NyZWFtIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/7cc293769c/Windscream.png", baseType: "强化胫甲" }, { name: "红刃蹂躏靴 远古胫甲", href: "https://poedb.tw/cn/Redblade_Tramplers", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SdW1ibGVzdGVwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/7ebd8e4a3e/Rumblestep.png", limit: "「孤岛灯塔」限定掉落\n「战团」联盟限定", baseType: "远古胫甲" }, { name: "赤红踪迹 巨人胫甲", href: "https://poedb.tw/cn/The_Red_Trail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9UaGVJbmZpbml0ZVB1cnN1aXQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/518d10f12f/TheInfinitePursuit.png", limit: "「精华」联盟限定\n无尽之距 使用 乌尔尼多的祝福 升级", baseType: "巨人胫甲" }, { name: "黎明行者 瓦尔胫甲", href: "https://poedb.tw/cn/Dawnstrider", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9JbmZlY3Rpb3VzQ29uc3RydWN0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/bf1cb0a5b4/InfectiousConstruct.png", limit: "「灼督」限定掉落", baseType: "瓦尔胫甲" }, { name: "伊瑞的精通 精制皮甲", href: "https://poedb.tw/cn/Yriels_Fostering", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9QYWxlQ291bmNpbEFybW91ciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/f3c31cf6b4/PaleCouncilArmour.png", limit: "「苍白议会」限定掉落", baseType: "精制皮甲" }, { name: "蹒跚巨兽 星芒战铠", href: "https://poedb.tw/cn/Blunderbore", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9CbHVuZGVyYm9yZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/4b34ebf3fe/Blunderbore.png", baseType: "星芒战铠" }, { name: "维多里奥的飞升 羊皮短靴", href: "https://poedb.tw/cn/Victarios_Flight", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludFVuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/11ab397d3d/BootsDexIntUnique2.png", baseType: "羊皮短靴" }, { name: "无尽之距 巨人胫甲", href: "https://poedb.tw/cn/The_Infinite_Pursuit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Ud29Ub25lZEJvb3RzQUxUMyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ce68366000/TwoTonedBootsALT3.png", limit: "「乌尔尼多之域」限定掉落\n「精华」联盟限定\n使用 乌尔尼多的祝福 升级 赤红踪迹", baseType: "巨人胫甲" }, { name: "龙炎足迹 砂影短靴", href: "https://poedb.tw/cn/Goldwyrm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleFVuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/548228175c/BootsDexUnique2.png", baseType: "砂影短靴" }, { name: "多利亚尼的幻想 巨人胫甲", href: "https://poedb.tw/cn/Doryanis_Delusion", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Eb3JpeWFuaXNCbHVlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/0288b52fee/DoriyanisBlue.png", limit: "「多利亚尼的迷城」限定掉落", baseType: "巨人胫甲" }, { name: "赤红踪迹【仿品】 巨人胫甲", href: "https://poedb.tw/cn/Replica_Red_Trail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9UaGVJbmZpbml0ZVB1cnN1aXQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/518d10f12f/TheInfinitePursuit.png", baseType: "巨人胫甲" }, { name: "暗影缝合 祭礼束衣", href: "https://poedb.tw/cn/Shadowstitch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TaGFkb3dTdGl0Y2giLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2f847b36bd/ShadowStitch.png", limit: "「腐化蝗群」限定掉落\n「穿越」联盟限定", baseType: "祭礼束衣" }, { name: "背信弃义 荣耀战铠", href: "https://poedb.tw/cn/Perfidy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UYW5nbWF6dWFybW91cmJvZHlhcm1vdXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2170370e8f/Tangmazuarmourbodyarmour.png", baseType: "荣耀战铠" }, { name: "神行靴 生皮短靴", href: "https://poedb.tw/cn/Seven-League_Step", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleFVuaXF1ZTMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/23e4614336/BootsDexUnique3.png", baseType: "生皮短靴" }, { name: "忠诚之肤 简易之袍", href: "https://poedb.tw/cn/Skin_of_the_Loyal", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9NeXJpYWRHcmFzcCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/03d7746f71/MyriadGrasp.png", limit: "「夏乌拉之域」限定掉落\n「精华」联盟限定\n使用 夏乌拉的祝福 升级 君主之肤", baseType: "简易之袍" }, { name: "猎踪 鹿皮短靴", href: "https://poedb.tw/cn/Deerstalker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleFVuaXF1ZTEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/8d8725b395/BootsDexUnique1.png", baseType: "鹿皮短靴" }, { name: "欧巴拉的坚守 鳗皮短靴", href: "https://poedb.tw/cn/Orbalas_Stand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SdWdnZWRTdGVwQm9vdHMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/d3af99e8fe/RuggedStepBoots.png", baseType: "鳗皮短靴" }, { name: "强袭者【仿品】 粗革短靴", href: "https://poedb.tw/cn/Replica_Three-step_Assault", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9UaHJlZVN0ZXBBc3NhdWx0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/56daf8a36a/ThreeStepAssault.png", baseType: "粗革短靴" }, { name: "血影 鲨皮短靴", href: "https://poedb.tw/cn/The_Blood_Dance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Hb3JlRnJlbnp5IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/db5eeb8b01/GoreFrenzy.png", baseType: "鲨皮短靴" }, { name: "无悔之爱 贤者之袍", href: "https://poedb.tw/cn/Diallas_Malefaction", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9EaWFsbGFzTWFsZWZhY3Rpb24iLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/842ace4d64/DiallasMalefaction.png", baseType: "贤者之袍" }, { name: "吞噬者王冠 操灵者之冠", href: "https://poedb.tw/cn/The_Devouring_Diadem", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZURldm91cmluZ0RpYWRlbSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8bc93d2104/TheDevouringDiadem.png", limit: "「亡灵大师卡塔莉娜」限定掉落\n「背叛者」联盟限定", baseType: "操灵者之冠" }, { name: "强袭者 粗革短靴", href: "https://poedb.tw/cn/Three-step_Assault", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9UaHJlZVN0ZXBBc3NhdWx0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/56daf8a36a/ThreeStepAssault.png", baseType: "粗革短靴" }, { name: "阿兹里的金履 迷踪短靴", href: "https://poedb.tw/cn/Atziris_Step", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BdHppcmlzU3RlcCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ec85575514/AtzirisStep.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "迷踪短靴" }, { name: "苦行之履 羊毛之鞋", href: "https://poedb.tw/cn/Wanderlust", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9XYW5kZXJsdXN0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c83c1c3bdc/Wanderlust.png", baseType: "羊毛之鞋" }, { name: "敏锐思维 匿踪短靴", href: "https://poedb.tw/cn/Sin_Trek", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TaW5UcmVrIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/84281e0f84/SinTrek.png", baseType: "匿踪短靴" }, { name: "薛朗的秘术长靴 学者长靴", href: "https://poedb.tw/cn/Shavronnes_Pace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TaGF2cm9ubmVzUGFjZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/065a61276a/ShavronnesPace.png", baseType: "学者长靴" }, { name: "盖卢坎的飞升 匿踪短靴", href: "https://poedb.tw/cn/Garukhans_Flight", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Ud29Ub25lZEJvb3RzQUxUIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4e0bb109ae/TwoTonedBootsALT.png", baseType: "匿踪短靴" }, { name: "诱惑阶梯 粗革短靴", href: "https://poedb.tw/cn/Temptation_Step", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BdGFpdG9sQm9vdHMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/dd0d386124/AtaitolBoots.png", limit: "「致命贪婪」联盟限定", baseType: "粗革短靴" }, { name: "回光之迹 丝绒便鞋", href: "https://poedb.tw/cn/Wondertrap", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Xb25kZXJ0cmFwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/6af24f543f/Wondertrap.png", baseType: "丝绒便鞋" }, { name: "大地之痕 迷踪短靴", href: "https://poedb.tw/cn/Farruls_Chase", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9UaWdlckJvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/640a42e82a/TigerBoots.png", limit: "「大地初子 法瑞尔」限定掉落\n「猎魔」联盟限定", baseType: "迷踪短靴" }, { name: "茵雅的启蒙 秘术便鞋", href: "https://poedb.tw/cn/Inyas_Epiphany", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9QYWxlQ291bmNpbEJvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/78e277875f/PaleCouncilBoots.png", limit: "「苍白议会」限定掉落", baseType: "秘术便鞋" }, { name: "血誓 蛛丝之袍", href: "https://poedb.tw/cn/The_Covenant", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9FbWJyYWNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/d0110e7660/Embrace.png", baseType: "蛛丝之袍" }, { name: "灵骸之履【仿品】 丝绸便鞋", href: "https://poedb.tw/cn/Replica_Bones_of_Ullr", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9ib290dW5pcXVlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/1dfabe3358/bootunique.png", baseType: "丝绸便鞋" }, { name: "灵骸之履 丝绸便鞋", href: "https://poedb.tw/cn/Bones_of_Ullr", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9ib290dW5pcXVlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/1dfabe3358/bootunique.png", baseType: "丝绸便鞋" }, { name: "茵雅的启蒙【仿品】 秘术便鞋", href: "https://poedb.tw/cn/Replica_Inyas_Epiphany", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9QYWxlQ291bmNpbEJvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/78e277875f/PaleCouncilBoots.png", baseType: "秘术便鞋" }, { name: "塑星者 狱炎重剑", href: "https://poedb.tw/cn/Starforge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1N0YXJmb3JnZSIsInciOjIsImgiOjQsInNjYWxlIjoxLCJyZWxpYyI6MSwic2hhcGVyIjp0cnVlfV0/7407e2c748/Starforge.png", limit: "「塑界者」限定掉落", baseType: "狱炎重剑" }, { name: "虹幕 咒者长靴", href: "https://poedb.tw/cn/Rainbowstride", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9yYWluYm93c3RyaWRlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/bf663baf47/rainbowstride.png", baseType: "咒者长靴" }, { name: "绝地魔履 术士长靴", href: "https://poedb.tw/cn/Steppan_Eard", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Bc3NlZGFpc2ZlcnZvciIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/6758b977d2/Assedaisfervor.png", limit: "「强酸洞穴」限定掉落\n「战团」联盟限定", baseType: "术士长靴" }, { name: "狮眼的斗志【仿品】 铜影长靴", href: "https://poedb.tw/cn/Replica_Lioneyes_Paws", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9MaW9uZXllc1Bhd3MiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/550a8f59d4/LioneyesPaws.png", baseType: "铜影长靴" }, { name: "迎暮 铁影长靴", href: "https://poedb.tw/cn/Dusktoe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckRleFVuaXF1ZTMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/39b842cf85/BootsStrDexUnique3.png", baseType: "铁影长靴" }, { name: "哑风轻步 蛇鳞长靴", href: "https://poedb.tw/cn/Mutewind_Whispersteps", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9UYXJnZW10YWJpIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/fb8815a6bd/Targemtabi.png", limit: "「极寒冰原」限定掉落\n「战团」联盟限定", baseType: "蛇鳞长靴" }, { name: "狮眼的斗志 铜影长靴", href: "https://poedb.tw/cn/Lioneyes_Paws", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9MaW9uZXllc1Bhd3MiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/550a8f59d4/LioneyesPaws.png", baseType: "铜影长靴" }, { name: "覆灭之兆 网眼长靴", href: "https://poedb.tw/cn/Wake_of_Destruction", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9XYWtlT2ZEZXN0cnVjdGlvbiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/5964f215f5/WakeOfDestruction.png", baseType: "网眼长靴" }, { name: "代笔人 绸缎背心", href: "https://poedb.tw/cn/Ghostwrithe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9HaG9zdHdlYXZlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/95d1911033/Ghostweave.png", baseType: "绸缎背心" }, { name: "阿尔贝隆的征途 战士之靴", href: "https://poedb.tw/cn/Alberons_Warpath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BbGJlcm9uc3dhcnBhdGgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/be7b089ef3/Alberonswarpath.png", baseType: "战士之靴" }, { name: "愤恨遗产 地蝮鳞长靴", href: "https://poedb.tw/cn/Legacy_of_Fury", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TY29yY2hlZEVhcnRoIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/fda63f7588/ScorchedEarth.png", limit: "「贤主」限定掉落", baseType: "地蝮鳞长靴" }, { name: "拉克斯的渴望 仪式短靴", href: "https://poedb.tw/cn/Ralakeshs_Impatience", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SYWxha2VzaHNJbXBhdGllbmNlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/54540f0f3d/RalakeshsImpatience.png", baseType: "仪式短靴" }, { name: "地动 羊皮短靴", href: "https://poedb.tw/cn/Abberaths_Hooves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BYmJlcmF0aHNIb292ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/445b84d83c/AbberathsHooves.png", baseType: "羊皮短靴" }, { name: "冈姆的稳重之靴 巨人胫甲", href: "https://poedb.tw/cn/Kaoms_Roots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9LYW9tc1Jvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/23b569d35e/KaomsRoots.png", baseType: "巨人胫甲" }, { name: "毁灭的逼近 龙鳞长靴", href: "https://poedb.tw/cn/Annihilations_Approach", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9VYmVyU2VhcmluZ0V4YXJjaEJvb3QiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/705e9f657f/UberSearingExarchBoot.png", limit: "「Uber Searing Exarch」限定掉落", baseType: "龙鳞长靴" }, { name: "暗雷 龙鳞长靴", href: "https://poedb.tw/cn/Darkray_Vectors", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9EYXJrcmF5VmVjdG9ycyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/e96f134d02/DarkrayVectors.png", baseType: "龙鳞长靴" }, { name: "苍空之爪 火蝮鳞长靴", href: "https://poedb.tw/cn/Saqawals_Talons", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BdmlhbkJvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4ea544616e/AvianBoots.png", limit: "「苍空初子 萨奇沃」限定掉落\n「猎魔」联盟限定", baseType: "火蝮鳞长靴" }, { name: "阿尔贝隆的征途【仿品】 战士之靴", href: "https://poedb.tw/cn/Replica_Alberons_Warpath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BbGJlcm9uc3dhcnBhdGgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/be7b089ef3/Alberonswarpath.png", baseType: "战士之靴" }, { name: "雷语 荒野锁铠", href: "https://poedb.tw/cn/Lightning_Coil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9MaWdodG5pbmdDb2lsIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/1b36c39f5a/LightningCoil.png", baseType: "荒野锁铠" }, { name: "刚勇 军团长靴", href: "https://poedb.tw/cn/Gangs_Momentum", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9HYW5nc0Jvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4443459d14/GangsBoots.png", baseType: "军团长靴" }, { name: "军团的进击 军团长靴", href: "https://poedb.tw/cn/March_of_the_Legion", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BdXJhQm9vdHMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/736eee69a4/AuraBoots.png", baseType: "军团长靴" }, { name: "死亡大门 圣战长靴", href: "https://poedb.tw/cn/Deaths_Door", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9EZWF0aHNkb29yIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/49384091d3/Deathsdoor.png", limit: "「帝王试炼迷宫」限定掉落", baseType: "圣战长靴" }, { name: "灵柩行者 禁礼之靴", href: "https://poedb.tw/cn/Corpsewalker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9EaXN0dXJiVGhlRGVhZCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/fabb05d84e/DisturbTheDead.png", limit: "「夺宝奇兵」联盟限定", baseType: "禁礼之靴" }, { name: "日耀 环带长靴", href: "https://poedb.tw/cn/Sundance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TdW5kYW5jZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/b3a611197c/Sundance.png", baseType: "环带长靴" }, { name: "溃败【仿品】 暗影之靴", href: "https://poedb.tw/cn/Replica_Stampede", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TdXBwb3J0ZXIxYm9vdEEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f0b4c611d1/Supporter1bootA.png", baseType: "暗影之靴" }, { name: "诺米克的风暴 扣环短靴", href: "https://poedb.tw/cn/Nomics_Storm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Ob21pY3NTdG9ybSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/33fedc8e3d/NomicsStorm.png", baseType: "扣环短靴" }, { name: "至高天堂 禁礼之靴", href: "https://poedb.tw/cn/Omeyocan", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9PbWV5b2NhbiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/f72f6a000d/Omeyocan.png", limit: "「穿越」联盟限定\n献祭舞鞋 使用 仪祭魔瓶 升级", baseType: "禁礼之靴" }, { name: "布琳洛特岸行者 猎人之靴", href: "https://poedb.tw/cn/Brinerot_Whalers", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SZWVmc2NvdXJnZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/6f72714c8f/Reefscourge.png", limit: "「炽炎船坞」限定掉落\n「战团」联盟限定", baseType: "猎人之靴" }, { name: "暗夜刺足 暗影之靴", href: "https://poedb.tw/cn/Fenumus_Spinnerets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TcGlkZXJBcm1vdXJCb290cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ba3f1e4f2a/SpiderArmourBoots.png", limit: "「暗夜初子 费努姆斯」限定掉落\n「猎魔」联盟限定", baseType: "暗影之靴" }, { name: "献祭舞鞋 禁礼之靴", href: "https://poedb.tw/cn/Dance_of_the_Offered", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9EYW5jZU9mVGhlT2ZmZXJlZCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ca6a0319e6/DanceOfTheOffered.png", limit: "「闪电通道」限定掉落\n「穿越」联盟限定\n使用 仪祭魔瓶 升级 至高天堂", baseType: "禁礼之靴" }, { name: "溃败 暗影之靴", href: "https://poedb.tw/cn/The_Stampede", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TdXBwb3J0ZXIxYm9vdEEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/f0b4c611d1/Supporter1bootA.png", limit: "「菌潮」联盟限定", baseType: "暗影之靴" }, { name: "祖灵之约 蛛丝之袍", href: "https://poedb.tw/cn/Soul_Mantle", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Tb3VsTWFudGxlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/19bb017ce4/SoulMantle.png", baseType: "蛛丝之袍" }, { name: "虚空行者 暗影者长靴", href: "https://poedb.tw/cn/Voidwalker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Dcm9zc2luZ1RoZVZvaWQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwic2hhcGVyIjp0cnVlfV0/97df35ca87/CrossingTheVoid.png", limit: "「塑界者」限定掉落", baseType: "暗影者长靴" }, { name: "疯狂的象征 异色鞋(冰闪)", href: "https://poedb.tw/cn/Beacon_of_Madness", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9UYW5nbWF6dWFybW91cmJvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/664521517c/Tangmazuarmourboots.png", baseType: "异色鞋 (火闪)" }, { name: "宿命 逃亡之靴", href: "https://poedb.tw/cn/Inextricable_Fate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9WaW5lZ3Jhc3BCb290c1VuaXF1ZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/4f56e4bdb0/VinegraspBootsUnique.png", limit: "「世界吞噬者」限定掉落", baseType: "逃亡之靴" }, { name: "虚空行者【仿品】 暗影者长靴", href: "https://poedb.tw/cn/Replica_Voidwalker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Dcm9zc2luZ1RoZVZvaWQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwic2hhcGVyIjp0cnVlfV0/97df35ca87/CrossingTheVoid.png", baseType: "暗影者长靴" }, { name: "将军的复生 圣洁锁甲", href: "https://poedb.tw/cn/Chains_of_Command", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DaGFpbnNPZkNvbW1hbmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/3919d27d1b/ChainsOfCommand.png", baseType: "圣洁锁甲" }, { name: "空向 术士长靴", href: "https://poedb.tw/cn/Skyforth", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Ta3lmb3J0aCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/56fee4545a/Skyforth.png", baseType: "术士长靴" }, { name: "福尔的战铠 圣语锁甲", href: "https://poedb.tw/cn/Volls_Protector", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TdHJJbnQzQVVuaXF1ZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/d79c6d5644/StrInt3AUnique.png", baseType: "圣语锁甲" }, { name: "完美姿态 星辰皮甲", href: "https://poedb.tw/cn/The_Perfect_Form", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVQZXJmZWN0Rm9ybSIsInciOjIsImgiOjMsInNjYWxlIjoxLCJyZWxpYyI6MX1d/11c2598c82/ThePerfectForm.png", limit: "「精华」联盟限定\n雪盲恩惠 使用 托沃的祝福 升级", baseType: "星辰皮甲" }, { name: "不屈之志 威能鸢盾", href: "https://poedb.tw/cn/The_Unshattered_Will", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0NoYW5uZWxpbmcgU2hpZWxkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/95b237ca78/Channeling%20Shield.png", limit: "「降临之地」限定掉落\n「先驱」联盟限定\n使用 光棱卷轴 升级 不朽意志", baseType: "威能鸢盾" }, { name: "嗜寒之冠 绸缎之兜", href: "https://poedb.tw/cn/Cowl_of_the_Cryophile", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1N1cHBvcnRlcjFoZWxtZXRBIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/5283e1920d/Supporter1helmetA.png", limit: "「菌潮」联盟限定", baseType: "绸缎之兜" }, { name: "刚多的虚荣 艾兹麦巨剑", href: "https://poedb.tw/cn/Kondos_Pride", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0tvbmRvc1ByaWRlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/59f41a868c/KondosPride.png", baseType: "艾兹麦巨剑" }, { name: "无尽之卫【仿品】 禁礼之甲", href: "https://poedb.tw/cn/Replica_Restless_Ward", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVSZXN0bGVzc1dhcmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2508832517/TheRestlessWard.png", baseType: "禁礼之甲" }, { name: "沃拉娜的征途 符文战靴", href: "https://poedb.tw/cn/Voranas_March", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TcGlyaXRCb290c1VuaXF1ZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/90177dcbec/SpiritBootsUnique.png", limit: "「堕落之源欧罗什」限定掉落\n「先祖秘藏」联盟限定", baseType: "符文战靴" }, { name: "意识之缘 铁锻护手", href: "https://poedb.tw/cn/Lochtonial_Caress", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTG9jaHRvbmlhbENhcmVzcyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/4609116291/LochtonialCaress.png", baseType: "铁锻护手" }, { name: "梅吉诺德的巨力腕甲 冷钢护手", href: "https://poedb.tw/cn/Meginords_Vise", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyNSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/2aaf87839e/GlovesStr5.png", baseType: "冷钢护手" }, { name: "巨灵灾星 青铜护手", href: "https://poedb.tw/cn/Giantsbane", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRGVhdGhmb3JnZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/88c0b6908a/Deathforge.png", baseType: "青铜护手" }, { name: "乌扎萨的山谷 蓝玉戒指", href: "https://poedb.tw/cn/Uzazas_Valley", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvR3JlZW5Db21wb25lbnQzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/7e3d39e9a7/GreenComponent3.png", limit: "「水晶之王奥尔」限定掉落\n「地心」联盟限定", baseType: "蓝玉戒指" }, { name: "泯光寿衣【仿品】 禁礼之甲", href: "https://poedb.tw/cn/Replica_Shroud_of_the_Lightless", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9BYnlzc0JvZHkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/cd67f9b5d3/AbyssBody.png", baseType: "禁礼之甲" }, { name: "深海魔钳 巨人护手", href: "https://poedb.tw/cn/Craiceanns_Pincers", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQ3JhYlVuaXF1ZUdsb3ZlcyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/c5811ae4bd/CrabUniqueGloves.png", limit: "「深海初子 克林斯昂」限定掉落\n「猎魔」联盟限定", baseType: "巨人护手" }, { name: "阿兹里的捷思【仿品】 瓦尔护手", href: "https://poedb.tw/cn/Replica_Atziris_Acuity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQXR6aXJpc0FjdWl0eSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/2c0f04ae47/AtzirisAcuity.png", baseType: "瓦尔护手" }, { name: "钟表匠的华服 狂虐者束衣", href: "https://poedb.tw/cn/Tinkerskin", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UcmFwcGVyQXJtb3VyIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/3e6bd8eefe/TrapperArmour.png", baseType: "狂虐者束衣" }, { name: "仇恨熔炉 远古护手", href: "https://poedb.tw/cn/Hateforge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVmFhbFJhZ2VHbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwicmVsaWMiOjV9XQ/551c8e896a/VaalRageGloves.png", limit: "「致命贪婪」联盟限定", baseType: "远古护手" }, { name: "札德图斯的圣衣 贤者之袍", href: "https://poedb.tw/cn/Zahndethus_Cassock", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9aYWhuZGV0aHVzY2Fzc29jayIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/6de1273e49/Zahndethuscassock.png", baseType: "贤者之袍" }, { name: "陨落之环 巨人护手", href: "https://poedb.tw/cn/Verusos_Battering_Rams", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVmVydXNvc0JhdHRlcmluZ1JhbXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e6727320e2/VerusosBatteringRams.png", baseType: "巨人护手" }, { name: "冰冷之眼 羊皮手套", href: "https://poedb.tw/cn/Hrimsorrow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvSHJpbXNvcnJvdyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/bc13b3487c/Hrimsorrow.png", baseType: "羊皮手套" }, { name: "欧斯卡姆 砂影手套", href: "https://poedb.tw/cn/Oskarm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvWmVub0dsb3ZlcyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/a0056936c7/ZenoGloves.png", baseType: "砂影手套" }, { name: "冈姆的精神 巨人护手", href: "https://poedb.tw/cn/Kaoms_Spirit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvS2FvbXNTcGlyaXQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/eefa7c48f9/KaomsSpirit.png", baseType: "巨人护手" }, { name: "马雷格罗的玫红手套 鹿皮手套", href: "https://poedb.tw/cn/Maligaros_Virtuosity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTWFsaWdhcm9zVmlydG91c2l0eSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7cdbba458f/MaligarosVirtousity.png", baseType: "鹿皮手套" }, { name: "伟大旧神之触手 鳗皮手套", href: "https://poedb.tw/cn/Great_Old_Ones_Tentacles", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvSW1wYWxlR2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/37dd8738f8/ImpaleGloves.png", baseType: "鳗皮手套" }, { name: "明恩的慧心 紫晶戒指", href: "https://poedb.tw/cn/Mings_Heart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTWluZ3NIZWFydCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/7395d98bba/MingsHeart.png", baseType: "紫晶戒指" }, { name: "苦难探寻者 粗革手套", href: "https://poedb.tw/cn/Painseeker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR3JpcE9mVW5tYWtpbmciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/9a6348dc81/GripOfUnmaking.png", baseType: "粗革手套" }, { name: "多里亚尼之拳 瓦尔护手", href: "https://poedb.tw/cn/Doryanis_Fist", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRG9yeWFuaXNGaXN0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/92cfa78e4d/DoryanisFist.png", baseType: "瓦尔护手" }, { name: "安赛娜丝的安抚之语 丝绸手套", href: "https://poedb.tw/cn/Asenaths_Gentle_Touch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQXNlbmF0aHNHZW50bGVUb3VjaCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ea6e822bbe/AsenathsGentleTouch.png", baseType: "丝绸手套" }, { name: "窃罪 三相戒指", href: "https://poedb.tw/cn/Thiefs_Torment", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGhpZWZzVG9ybWVudCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/1c182176dc/ThiefsTorment.png", baseType: "三相戒指" }, { name: "猎宝者的护手 羊毛手套", href: "https://poedb.tw/cn/Sadimas_Touch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU2FkaW1hc1RvdWNoIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/751c14cb9c/SadimasTouch.png", baseType: "羊毛手套" }, { name: "冰息 精制环甲", href: "https://poedb.tw/cn/Icetomb", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9JY2V0b21iIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/956a92a3fd/Icetomb.png", baseType: "精制环甲" }, { name: "相生相克 缎布手套", href: "https://poedb.tw/cn/Allelopathy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRW1iYWxtZXJzR2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/62148488f8/EmbalmersGloves.png", baseType: "缎布手套" }, { name: "相生相克【仿品】 缎布手套", href: "https://poedb.tw/cn/Replica_Allelopathy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRW1iYWxtZXJzR2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/62148488f8/EmbalmersGloves.png", baseType: "缎布手套" }, { name: "刁妇的圈套 刺绣手套", href: "https://poedb.tw/cn/Vixens_Entrapment", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVml4ZW5zRW50cmFwbWVudCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/e2d77223f8/VixensEntrapment.png", baseType: "刺绣手套" }, { name: "虚空之力 咒者手套", href: "https://poedb.tw/cn/Voidbringer", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvSGVsbGJyaW5nZXIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/d82eb1cc3f/Hellbringer.png", baseType: "咒者手套" }, { name: "卡莉莎的优雅之影 绣布手套", href: "https://poedb.tw/cn/Kalisas_Grace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvS2FsaXNhc0dyYWNlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/b165e39eff/KalisasGrace.png", baseType: "绣布手套" }, { name: "恶魔缝补者 缎布手套", href: "https://poedb.tw/cn/Demon_Stitcher", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRGVtb25TdGljaGVyIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/0269893a5c/DemonSticher.png", baseType: "缎布手套" }, { name: "卡莉莎的优雅之影【仿品】 绣布手套", href: "https://poedb.tw/cn/Replica_Kalisas_Grace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvS2FsaXNhc0dyYWNlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/b165e39eff/KalisasGrace.png", baseType: "绣布手套" }, { name: "议会之握 秘术手套", href: "https://poedb.tw/cn/Grip_of_the_Council", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50M1VuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/88338fac41/GlovesInt3Unique2.png", limit: "「预言」联盟限定", baseType: "秘术手套" }, { name: "议会之握【仿品】 秘术手套", href: "https://poedb.tw/cn/Replica_Grip_of_the_Council", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50M1VuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/88338fac41/GlovesInt3Unique2.png", baseType: "秘术手套" }, { name: "苍蟒之鳞 铜影手套", href: "https://poedb.tw/cn/Slitherpinch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU2xpdGhlcnBpbmNoIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/8f23a9535d/Slitherpinch.png", baseType: "铜影手套" }, { name: "肉体与魂灵 铁影手套", href: "https://poedb.tw/cn/Flesh_and_Spirit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRmxlc2hBbmRTcGlyaXQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/cff8e05a60/FleshAndSpirit.png", limit: "「暴走」联盟限定", baseType: "铁影手套" }, { name: "瓦尔的灵手 铜影手套", href: "https://poedb.tw/cn/Vaal_Caress", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVmFhbENhcmVzcyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/1caec1617d/VaalCaress.png", limit: "「伏击/侵略」联盟限定", baseType: "铜影手套" }, { name: "富贵之运 钢影护手", href: "https://poedb.tw/cn/Aurseize", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQXVyc2VpemUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4c0d010425/Aurseize.png", baseType: "钢影护手" }, { name: "扼息者 火蝮鳞手套", href: "https://poedb.tw/cn/Breathstealer", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3VwcG9ydGVyMWdsb3ZlQSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0cbf141437/Supporter1gloveA.png", limit: "「菌潮」联盟限定", baseType: "火蝮鳞手套" }, { name: "烈火送葬 蝮鳞手套", href: "https://poedb.tw/cn/Tanu_Ahi", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR29yZWZpc3RHbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4c11aafeb7/GorefistGloves.png", baseType: "蝮鳞手套" }, { name: "死神的取魂器 幽影巨斧", href: "https://poedb.tw/cn/Reapers_Pursuit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlVW5pcXVlMSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/d39a181d8d/TwoHandAxeUnique1.png", baseType: "幽影巨斧" }, { name: "龙族印记 蝮鳞手套", href: "https://poedb.tw/cn/Wyrmsign", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvV3lybXNpZ25HbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/fe7ef54102/WyrmsignGloves.png", baseType: "蝮鳞手套" }, { name: "坟场之链 火蝮鳞手套", href: "https://poedb.tw/cn/Gravebind", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRGVhdGhHcmlwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/371752d95c/DeathGrip.png", baseType: "火蝮鳞手套" }, { name: "大地之握 火蝮鳞手套", href: "https://poedb.tw/cn/Farruls_Pounce", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVGlnZXJHbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/294e636cf1/TigerGloves.png", limit: "「大地初子 法瑞尔」限定掉落\n「猎魔」联盟限定", baseType: "火蝮鳞手套" }, { name: "悲运之缚 链甲手套", href: "https://poedb.tw/cn/Shackles_of_the_Wretched", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUmVjYWxsaW5ndGhlV3JldGNoZWQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/faf70b1bf0/RecallingtheWretched.png", baseType: "链甲手套" }, { name: "巨坑之令 仪式手套", href: "https://poedb.tw/cn/Command_of_the_Pit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQ29tbWFuZG9mdGhlUGl0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/cc7772a880/CommandofthePit.png", limit: "「墨血库高」限定掉落\n「地心」联盟限定", baseType: "仪式手套" }, { name: "三重扣 网眼手套", href: "https://poedb.tw/cn/Triad_Grip", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTWluaW9uQ29udmVyc2lvbkdsb3ZlcyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/6b9b027d0f/MinionConversionGloves.png", baseType: "网眼手套" }, { name: "福库尔的手【仿品】 狂热者手套", href: "https://poedb.tw/cn/Replica_Volkuurs_Guidance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUGFsZUNvdW5jaWxHbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3271f5441a/PaleCouncilGloves.png", baseType: "狂热者手套" }, { name: "热诚之手 狂热者手套", href: "https://poedb.tw/cn/Hand_of_the_Fervent", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR3JpcG9mU2FjcmlmaWNlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/9ac4073c28/GripofSacrifice.png", limit: "「驱灵仪式」联盟限定", baseType: "狂热者手套" }, { name: "福库尔的手 狂热者手套", href: "https://poedb.tw/cn/Volkuurs_Guidance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUGFsZUNvdW5jaWxHbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3271f5441a/PaleCouncilGloves.png", limit: "「苍白议会」限定掉落", baseType: "狂热者手套" }, { name: "浪涌缚者 龙鳞手套", href: "https://poedb.tw/cn/Surgebinders", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3VyZ2VCaW5kZXJzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c0b8d5494e/SurgeBinders.png", baseType: "龙鳞手套" }, { name: "虚空 军团手套", href: "https://poedb.tw/cn/Null_and_Void", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTnVsbEFuZFZvaWQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4f851f97fc/NullAndVoid.png", limit: "「暴走」联盟限定", baseType: "军团手套" }, { name: "塑界之触 圣战手套", href: "https://poedb.tw/cn/Shapers_Touch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU2hhcGVyc0dsb3ZlcyIsInciOjIsImgiOjIsInNjYWxlIjoxLCJzaGFwZXIiOnRydWV9XQ/7f4c45d53e/ShapersGloves.png", limit: "「塑界者」限定掉落", baseType: "圣战手套" }, { name: "恩德的迅影 裹趾护手", href: "https://poedb.tw/cn/Ondars_Clasp", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvT25kYXJzQ2xhc3AiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/029ff8ad2d/OndarsClasp.png", baseType: "裹趾护手" }, { name: "悔悟之掌 圣战手套", href: "https://poedb.tw/cn/Repentance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUmVwZW50YW5jZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/20af664d44/Repentance.png", baseType: "圣战手套" }, { name: "毁面者 扣环护手", href: "https://poedb.tw/cn/Facebreaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4SW50VW5pcXVlMSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/b97dda23b0/GlovesDexIntUnique1.png", baseType: "扣环护手" }, { name: "苍空之翼 战士手套", href: "https://poedb.tw/cn/Saqawals_Winds", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQXZpYW5HbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/eff17664b9/AvianGloves.png", limit: "「苍空初子 萨奇沃」限定掉落\n「猎魔」联盟限定", baseType: "战士手套" }, { name: "水火不容 伏击护手", href: "https://poedb.tw/cn/Abhorrent_Interrogation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRGVjYXlpbmdHcmlwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/fa04f8c987/DecayingGrip.png", limit: "「庄园化身欧莱娜」限定掉落\n「庄园」联盟限定", baseType: "伏击护手" }, { name: "奥库娜的意志 环带护手", href: "https://poedb.tw/cn/Aukunas_Will", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQXVrdW5hc1dpbGwiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/b3a94fe874/AukunasWill.png", baseType: "环带护手" }, { name: "风暴觅者 伏击护手", href: "https://poedb.tw/cn/Stormseeker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3Rvcm1zZWVrZXJHbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5f70258b38/StormseekerGloves.png", baseType: "伏击护手" }, { name: "建筑师之手 伏击护手", href: "https://poedb.tw/cn/Architects_Hand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQXJjaGl0ZWN0c0hhbmQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/8f303b6f98/ArchitectsHand.png", limit: "「防御研究实验室」限定掉落\n「穿越」联盟限定\n使用 统御魔瓶 升级 奴隶贩子之手", baseType: "伏击护手" }, { name: "沙尘之影 环带护手", href: "https://poedb.tw/cn/Shadows_and_Dust", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU2hhZG93c0FuZER1c3QiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/80cb67dfe9/ShadowsAndDust.png", limit: "「暴走」联盟限定", baseType: "环带护手" }, { name: "奴隶贩子之手 伏击护手", href: "https://poedb.tw/cn/Slavedrivers_Hand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU2xhdmVkcml2ZXJzSGFuZCIsInciOjIsImgiOjIsInNjYWxlIjoxLCJyZWxpYyI6MX1d/2963ae5e20/SlavedriversHand.png", limit: "「穿越」联盟限定\n建筑师之手 使用 统御魔瓶 升级", baseType: "伏击护手" }, { name: "南方 战士手套", href: "https://poedb.tw/cn/Southbound", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTm9ydGhib3VuZCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7b4cbc713d/Northbound.png", baseType: "战士手套" }, { name: "神主之手 圣战手套", href: "https://poedb.tw/cn/Hands_of_the_High_Templar", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvSGFuZHNPZlRoZUhpZ2hUZW1wbGFyIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/239b2df5cf/HandsOfTheHighTemplar.png", limit: "「诸界觉者希鲁斯」限定掉落", baseType: "圣战手套" }, { name: "入殓师 禁礼护手", href: "https://poedb.tw/cn/The_Embalmer", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQWxsZWxvcGF0aHkiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/bcf128d770/Allelopathy.png", baseType: "禁礼护手" }, { name: "风暴赐福 暗影护手", href: "https://poedb.tw/cn/Storms_Gift", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3Rvcm1HbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwic3ludGhlc2lzZWQiOnRydWV9XQ/11d9bac786/StormGloves.png", limit: "「虚空忆境」联盟限定", baseType: "暗影护手" }, { name: "蝮吻 暗影护手", href: "https://poedb.tw/cn/Snakebite", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvZnJlbnp5Z2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/2d25853f41/frenzygloves.png", baseType: "暗影护手" }, { name: "熵能毁灭 暗影护手", href: "https://poedb.tw/cn/Entropic_Devastation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVWJlclNoYXBlckdsb3ZlcyIsInciOjIsImgiOjIsInNjYWxlIjoxLCJzaGFwZXIiOnRydWV9XQ/2f48b97b16/UberShaperGloves.png", limit: "「Uber The Shaper」限定掉落", baseType: "暗影护手" }, { name: "灵魂飞升 禁礼护手", href: "https://poedb.tw/cn/Soul_Ascension", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU291bEFzY2Vuc2lvbiIsInciOjIsImgiOjIsInNjYWxlIjoxLCJlbGRlciI6dHJ1ZX1d/261dad7419/SoulAscension.png", limit: "「Uber Uber Elder」限定掉落", baseType: "禁礼护手" }, { name: "亵渎者之握 暗影护手", href: "https://poedb.tw/cn/Blasphemers_Grasp", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRWxkZXJHbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwiZWxkZXIiOnRydWV9XQ/b07fd0eac2/ElderGloves.png", limit: "「裂界者」限定掉落", baseType: "暗影护手" }, { name: "尸僵 禁礼护手", href: "https://poedb.tw/cn/Algor_Mortis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVGFuZ21henVhcm1vdXJnbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/fff14c8039/Tangmazuarmourgloves.png", baseType: "禁礼护手" }, { name: "轰天雷 暗影者护手", href: "https://poedb.tw/cn/Thunderfist", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvdGh1bmRlcmNsYXciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c566a6b7aa/thunderclaw.png", baseType: "暗影者护手" }, { name: "无尽盛宴 扣钉手套", href: "https://poedb.tw/cn/Ceaseless_Feast", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVG91Y2hPZlJ1c3QiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/a9b7f33bdf/TouchOfRust.png", limit: "「无限饥渴」限定掉落", baseType: "扣钉手套" }, { name: "英灵宝环 锻铁戒指", href: "https://poedb.tw/cn/Le_Heup_of_All", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTGVoZXVwb2ZhbGwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6ea73cc7e4/Leheupofall.png", baseType: "锻铁戒指" }, { name: "漆黑天顶 丝绸手套", href: "https://poedb.tw/cn/Black_Zenith", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRWJiQW5kRmxvdyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/3e5e1a62ea/EbbAndFlow.png", limit: "「无限饥渴」限定掉落", baseType: "丝绸手套" }, { name: "马奇纳护手 暗影者护手", href: "https://poedb.tw/cn/Machina_Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvODU0NzkiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/360a5df732/85479.png", limit: "「菌潮」联盟限定", baseType: "暗影者护手" }, { name: "幽暗之语 锻铁戒指", href: "https://poedb.tw/cn/Blackheart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzFVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/40666e2827/Ring1Unique.png", baseType: "锻铁戒指" }, { name: "暗夜之握 符文笼手", href: "https://poedb.tw/cn/Nightgrip", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3Bpcml0R2xvdmVzVW5pcXVlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c40058de12/SpiritGlovesUnique.png", limit: "「先祖秘藏」联盟限定", baseType: "符文笼手" }, { name: "罪恶之环 锻铁戒指", href: "https://poedb.tw/cn/Circle_of_Guilt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU3ludGhlc2lzUGh5c2ljYWwyIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInN5bnRoZXNpc2VkIjp0cnVlfV0/9345ce30d7/SynthesisPhysical2.png", limit: "「虚空忆境」联盟限定", baseType: "锻铁戒指" }, { name: "马拉凯之记 暗影者护手", href: "https://poedb.tw/cn/Malachais_Mark", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTWFsYWNoYWlzTWFyayIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/2f2a8c0dff/MalachaisMark.png", baseType: "暗影者护手" }, { name: "冬日之织 珊瑚戒指", href: "https://poedb.tw/cn/Winterweave", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmxvb2RCb2lsIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/8335c22285/BloodBoil.png", baseType: "珊瑚戒指" }, { name: "静脉穿刺 锻铁戒指", href: "https://poedb.tw/cn/Venopuncture", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmxvb2RmcmVlemUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8873778384/Bloodfreeze.png", limit: "「菌潮」联盟限定", baseType: "锻铁戒指" }, { name: "冰牙指环 锻铁戒指", href: "https://poedb.tw/cn/Icefang_Orbit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvSWNlZmFuZ09yYml0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/da6e5eb5aa/IcefangOrbit.png", limit: "「菌潮」联盟限定", baseType: "锻铁戒指" }, { name: "守卫之铭 锻铁戒指", href: "https://poedb.tw/cn/The_Wardens_Brand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGhlV2FyZGVuc0JhbmQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/5d3830d11d/TheWardensBand.png", baseType: "锻铁戒指" }, { name: "希比尔之叹 珊瑚戒指", href: "https://poedb.tw/cn/Sibyls_Lament", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU2lieWxzTGFtZW50IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/73ccf7d7c4/SibylsLament.png", baseType: "珊瑚戒指" }, { name: "普拉克斯 海灵戒指", href: "https://poedb.tw/cn/Praxis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUHJheGlzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/5098474fb7/Praxis.png", baseType: "海灵戒指" }, { name: "命中注定 海灵戒指", href: "https://poedb.tw/cn/Fated_End", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvRm9yYmlkZGVuU2VhbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/f402209b8f/ForbiddenSeal.png", limit: "「夺宝奇兵」联盟限定", baseType: "海灵戒指" }, { name: "德瑞的魔具【仿品】 海灵戒指", href: "https://poedb.tw/cn/Replica_Doedres_Damning", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzNVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d06b386d73/Ring3Unique.png", baseType: "海灵戒指" }, { name: "灵魂绑定 海灵戒指", href: "https://poedb.tw/cn/Soulbound", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQm9uZGVkTGlmZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/2ee06d14a2/BondedLife.png", baseType: "海灵戒指" }, { name: "尊贵的同盟 珊瑚戒指", href: "https://poedb.tw/cn/Honoured_Alliance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvSGluZWtvcmFSaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/c4fd7ccffe/HinekoraRing.png", limit: "「Ancestor Tournament」限定掉落", baseType: "珊瑚戒指" }, { name: "陵拳 钢影护手", href: "https://poedb.tw/cn/Tombfist", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQWJ5c3NHbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/d0d174823c/AbyssGloves.png", limit: "「Abyss Lich」限定掉落\n「深渊」联盟限定", baseType: "钢影护手" }, { name: "赌神芬多 金光戒指", href: "https://poedb.tw/cn/Ventors_Gamble", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvRGllT2ZEZXN0aW55IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/1470dfcdce/DieOfDestiny.png", baseType: "金光戒指" }, { name: "贪欲之记 金光戒指", href: "https://poedb.tw/cn/Andvarius", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzRVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/eea4645cf2/Ring4Unique.png", baseType: "金光戒指" }, { name: "瓦拉库之印 黄玉戒指", href: "https://poedb.tw/cn/Valakos_Sign", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVmFsYWtvc1NpZ24iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/cd646c8c54/ValakosSign.png", limit: "「血族」联盟限定", baseType: "黄玉戒指" }, { name: "伊克切尔的诱惑 金光戒指", href: "https://poedb.tw/cn/Ixchels_Temptation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQWx0QnJlYWNoIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/b2c5201c70/AltBreach.png", limit: "「致命贪婪」限定掉落", baseType: "金光戒指" }, { name: "普藤博的山谷 黄玉戒指", href: "https://poedb.tw/cn/Putembos_Valley", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmx1ZUNvbXBvbmVudDMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/cd1b931996/BlueComponent3.png", limit: "「盲目者亚华托提利」限定掉落\n「地心」联盟限定", baseType: "黄玉戒指" }, { name: "基加萨鲁 黄玉戒指", href: "https://poedb.tw/cn/Kikazaru", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvS2lrYXphcnUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/911affa06b/Kikazaru.png", baseType: "黄玉戒指" }, { name: "冈姆的远见 珊瑚戒指", href: "https://poedb.tw/cn/Kaoms_Sign", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzJVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/15ce180809/Ring2Unique.png", baseType: "珊瑚戒指" }, { name: "普藤博的高山 黄玉戒指", href: "https://poedb.tw/cn/Putembos_Mountain", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmx1ZUNvbXBvbmVudCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/086886e893/BlueComponent.png", limit: "「水晶之王奥尔」限定掉落\n「地心」联盟限定", baseType: "黄玉戒指" }, { name: "星界投影 黄玉戒指", href: "https://poedb.tw/cn/Astral_Projector", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQXN0cmFsUHJvamVjdG9yIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/92eca463f2/AstralProjector.png", limit: "「灾变」联盟限定", baseType: "黄玉戒指" }, { name: "梦语之痕 蓝玉戒指", href: "https://poedb.tw/cn/Dream_Fragments", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzZVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/0c74ddd77c/Ring6Unique.png", baseType: "蓝玉戒指" }, { name: "尼米斯 黄玉戒指", href: "https://poedb.tw/cn/Nimis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVWJlckVhdGVyb2ZXb3JsZHMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6dbfb1baea/UberEaterofWorlds.png", limit: "「Uber The Eater of Worlds」限定掉落", baseType: "黄玉戒指" }, { name: "风暴之秘 黄玉戒指", href: "https://poedb.tw/cn/Storm_Secret", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGh1bmRlckxvb3AiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/1322cee671/ThunderLoop.png", limit: "「庄园」联盟限定", baseType: "黄玉戒指" }, { name: "血友病 蛇鳞手套", href: "https://poedb.tw/cn/Haemophilia", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvYmxlZWRnbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/005045bec7/bleedgloves.png", baseType: "蛇鳞手套" }, { name: "恐惧之环 蓝玉戒指", href: "https://poedb.tw/cn/Circle_of_Fear", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU3ludGhlc2lzQ29sZCIsInciOjEsImgiOjEsInNjYWxlIjoxLCJzeW50aGVzaXNlZCI6dHJ1ZX1d/f2a949365a/SynthesisCold.png", limit: "「虚空忆境」联盟限定", baseType: "蓝玉戒指" }, { name: "蛇穴 蓝玉戒指", href: "https://poedb.tw/cn/Snakepit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU2VycGVudHNlZWQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/634a5c8913/Serpentseed.png", baseType: "蓝玉戒指" }, { name: "乌扎萨的高山 蓝玉戒指", href: "https://poedb.tw/cn/Uzazas_Mountain", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvR3JlZW5Db21wb25lbnQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/f6e55e6800/GreenComponent.png", limit: "「墨血库高」限定掉落\n「地心」联盟限定", baseType: "蓝玉戒指" }, { name: "乌扎萨的草原 蓝玉戒指", href: "https://poedb.tw/cn/Uzazas_Meadow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvR3JlZW5Db21wb25lbnQyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/c5f02c50a6/GreenComponent2.png", limit: "「盲目者亚华托提利」限定掉落\n「地心」联盟限定", baseType: "蓝玉戒指" }, { name: "燃焰 蓝玉戒指", href: "https://poedb.tw/cn/Pyre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQ2hlcnVmZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/08c38718a4/Cherufe.png", baseType: "蓝玉戒指" }, { name: "塔萨里奥之印【仿品】 蓝玉戒指", href: "https://poedb.tw/cn/Replica_Tasalios_Sign", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGFzYWxpb3NTaWduIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/1e73f81099/TasaliosSign.png", baseType: "蓝玉戒指" }, { name: "阿克莱的高山 红玉戒指", href: "https://poedb.tw/cn/Ahkelis_Mountain", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmVkQ29tcG9uZW50IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/4c8c42f98b/RedComponent.png", limit: "「盲目者亚华托提利」限定掉落\n「地心」联盟限定", baseType: "红玉戒指" }, { name: "阿兹里的捷思 瓦尔护手", href: "https://poedb.tw/cn/Atziris_Acuity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQXR6aXJpc0FjdWl0eSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/2c0f04ae47/AtzirisAcuity.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "瓦尔护手" }, { name: "苦痛之环 红玉戒指", href: "https://poedb.tw/cn/Circle_of_Anguish", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU3ludGhlc2lzRmlyZSIsInciOjEsImgiOjEsInNjYWxlIjoxLCJzeW50aGVzaXNlZCI6dHJ1ZX1d/f64b382150/SynthesisFire.png", limit: "「虚空忆境」联盟限定", baseType: "红玉戒指" }, { name: "莫考之拥 红玉戒指", href: "https://poedb.tw/cn/Mokous_Embrace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTW9rb3VzRW1icmFjZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/b3bd556d83/MokousEmbrace.png", baseType: "红玉戒指" }, { name: "战士的遗产 红玉戒指", href: "https://poedb.tw/cn/Warriors_Legacy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvV2FycmlvcnNMZWdhY3kiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/80c16ee4e7/WarriorsLegacy.png", limit: "「灾变」联盟限定", baseType: "红玉戒指" }, { name: "罗里的幸运之灯 三相戒指", href: "https://poedb.tw/cn/Loris_Lantern", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTG9yaXNMYW50ZXJuIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/7abe3ca54f/LorisLantern.png", baseType: "三相戒指" }, { name: "阿克莱的山谷 红玉戒指", href: "https://poedb.tw/cn/Ahkelis_Valley", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmVkQ29tcG9uZW50MyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/fe1c0d1513/RedComponent3.png", limit: "「墨血库高」限定掉落\n「地心」联盟限定", baseType: "红玉戒指" }, { name: "元素之章 三相戒指", href: "https://poedb.tw/cn/The_Taming", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGhlVGFtaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/17c5d3d74b/TheTaming.png", limit: "「Vendor recipe system」限定掉落\n「支配/复仇」联盟限定", baseType: "三相戒指" }, { name: "暗夜织礼 禁礼护手", href: "https://poedb.tw/cn/Fenumus_Weave", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3BpZGVyQXJtb3VyIEdsb3ZlcyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/cb4ae94f6d/SpiderArmour%20Gloves.png", limit: "「暗夜初子 费努姆斯」限定掉落\n「猎魔」联盟限定", baseType: "禁礼护手" }, { name: "梅德维德的挑战 符文手甲", href: "https://poedb.tw/cn/Medveds_Challenge", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQWRhcHRhdGlvbkdsb3Zlc1VuaXF1ZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/865b871153/AdaptationGlovesUnique.png", limit: "「先祖秘藏」联盟限定", baseType: "符文手甲" }, { name: "先驱的纹章 黄玉戒指", href: "https://poedb.tw/cn/Precursors_Emblem", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQ29tYmluZWRSZWRSaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlbGljIjo0fV0/1a9f93301c/CombinedRedRing.png", limit: "「Vendor recipe system」限定掉落", baseType: "红玉戒指" }, { name: "薛朗的启示之环 月光石戒指", href: "https://poedb.tw/cn/Shavronnes_Revelation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTW9vbnN0b25lUmluZ1VuaXF1ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/d8c1823da5/MoonstoneRingUnique.png", limit: "「混乱/猛攻」联盟限定", baseType: "月光石戒指" }, { name: "咒逐 月光石戒指", href: "https://poedb.tw/cn/Anathema", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVW5pcXVlQ3Vyc2VSaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/db99b5c4d2/UniqueCurseRing.png", baseType: "月光石戒指" }, { name: "普藤博的草原 黄玉戒指", href: "https://poedb.tw/cn/Putembos_Meadow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmx1ZUNvbXBvbmVudDIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e8d0f426fe/BlueComponent2.png", limit: "「墨血库高」限定掉落\n「地心」联盟限定", baseType: "黄玉戒指" }, { name: "普兰德斯之记 海灵戒指", href: "https://poedb.tw/cn/Perandus_Signet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTGFkeVJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d696be5b25/LadyRing.png", baseType: "海灵戒指" }, { name: "结魂之环 月光石戒指", href: "https://poedb.tw/cn/Heartbound_Loop", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvSGVhcnRib3VuZFJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/c214aff507/HeartboundRing.png", baseType: "月光石戒指" }, { name: "德瑞的魔具 海灵戒指", href: "https://poedb.tw/cn/Doedres_Damning", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzNVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d06b386d73/Ring3Unique.png", baseType: "海灵戒指" }, { name: "绿林豪侠 金光戒指", href: "https://poedb.tw/cn/The_Highwayman", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmFuZGl0UmluZyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/e08cd25657/BanditRing.png", baseType: "金光戒指" }, { name: "余烬之痕【仿品】 红玉戒指", href: "https://poedb.tw/cn/Replica_Emberwake", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzEwIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/55c8711fd7/Ring10.png", baseType: "红玉戒指" }, { name: "悔恨之环 黄玉戒指", href: "https://poedb.tw/cn/Circle_of_Regret", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU3ludGhlc2lzTGlnaHRuaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInN5bnRoZXNpc2VkIjp0cnVlfV0/ce810e2fcc/SynthesisLightning.png", limit: "「虚空忆境」联盟限定", baseType: "黄玉戒指" }, { name: "佣兵领地 迷踪手套", href: "https://poedb.tw/cn/Mercenarys_Lot", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3RyaWtlVHJ1ZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/4a73ba7bf5/StrikeTrue.png", baseType: "迷踪手套" }, { name: "黑焰 紫晶戒指", href: "https://poedb.tw/cn/Blackflame", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmxhY2tGbGFtZUZpcmUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d8cb90fe20/BlackFlameFire.png", limit: "「驱灵仪式」联盟限定", baseType: "紫晶戒指" }, { name: "亡者呼唤 紫晶戒指", href: "https://poedb.tw/cn/Death_Rush", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQW1ldGh5c3RSaW5nVW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/1ade97e0ac/AmethystRingUnique.png", limit: "「猛攻」联盟限定", baseType: "紫晶戒指" }, { name: "原初之罪 紫晶戒指", href: "https://poedb.tw/cn/Original_Sin", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU2FuY3R1bVNwZWNpYWxVbmlxdWVSaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/e0ff1c1c6b/SanctumSpecialUniqueRing.png", limit: "「圣地」限定掉落", baseType: "紫晶戒指" }, { name: "神赐 宝钻戒指", href: "https://poedb.tw/cn/Gifts_from_Above", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvRGlhbW9uZFJpbmdVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8edaf6655a/DiamondRingUnique.png", limit: "「混乱」联盟限定", baseType: "晶钻戒指" }, { name: "德瑞的精神手套 丝绒手套", href: "https://poedb.tw/cn/Doedres_Tenure", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRG9lZHJlc1RlbnVyZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/052a57aabd/DoedresTenure.png", baseType: "丝绒手套" }, { name: "陶哈努库之时间 月光石戒指", href: "https://poedb.tw/cn/Tawhanukus_Timing", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGF3aGFudWt1UmluZyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/024958a572/TawhanukuRing.png", baseType: "月光石戒指" }, { name: "瑞佛之冠 双玉戒指", href: "https://poedb.tw/cn/Rigwalds_Crest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmlnd2FsZHNDcmVzdCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ba5e5c58a3/RigwaldsCrest.png", baseType: "双玉戒指" }, { name: "乡愁之环 紫晶戒指", href: "https://poedb.tw/cn/Circle_of_Nostalgia", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU3ludGhlc2lzUGh5c2ljYWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwic3ludGhlc2lzZWQiOnRydWV9XQ/91f50b535b/SynthesisPhysical.png", limit: "「虚空忆境」联盟限定", baseType: "紫晶戒指" }, { name: "菁华蠕虫 潜能之戒", href: "https://poedb.tw/cn/Essence_Worm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvRXNzZW5jZVdvcm0iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/4455cc009b/EssenceWorm.png", baseType: "潜能之戒" }, { name: "虚空召唤 蓝玉戒指", href: "https://poedb.tw/cn/Call_of_the_Void", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvRnJvc3RHbGF6ZWRFeWVSaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsImVsZGVyIjp0cnVlLCJzaGFwZXIiOnRydWV9XQ/ed288bc494/FrostGlazedEyeRing.png", limit: "「裂界者」限定掉落", baseType: "蓝玉戒指" }, { name: "饥饿之环 潜能之戒", href: "https://poedb.tw/cn/The_Hungry_Loop", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGhlSHVuZ3J5TG9vcCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/2225980dc6/TheHungryLoop.png", baseType: "潜能之戒" }, { name: "塔萨里奥之印 蓝玉戒指", href: "https://poedb.tw/cn/Tasalios_Sign", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGFzYWxpb3NTaWduIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/1e73f81099/TasaliosSign.png", limit: "「血族」联盟限定", baseType: "蓝玉戒指" }, { name: "哑风封印 潜能之戒", href: "https://poedb.tw/cn/Mutewind_Seal", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTXV0ZXdpbmQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/3c7eee1d2b/Mutewind.png", limit: "「极寒冰原」限定掉落\n「战团」联盟限定", baseType: "潜能之戒" }, { name: "余烬之痕 红玉戒指", href: "https://poedb.tw/cn/Emberwake", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzEwIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/55c8711fd7/Ring10.png", baseType: "红玉戒指" }, { name: "草民 潜能之戒", href: "https://poedb.tw/cn/The_Pariah", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGhlUGFyaWFoIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/778fe35c1e/ThePariah.png", limit: "「强酸洞穴」限定掉落\n「战团」联盟限定", baseType: "潜能之戒" }, { name: "布琳洛特印记 潜能之戒", href: "https://poedb.tw/cn/Brinerot_Mark", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQnJpbmVyb3QiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/c1d39c178d/Brinerot.png", limit: "「炽炎船坞」限定掉落\n「战团」联盟限定", baseType: "潜能之戒" }, { name: "渔夫之辫 潜能之戒", href: "https://poedb.tw/cn/Anglers_Plait", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQW5nbGVyc1BsYWl0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/508979b802/AnglersPlait.png", baseType: "潜能之戒" }, { name: "玛拉凯的巧技 潜能之戒", href: "https://poedb.tw/cn/Malachais_Artifice", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTWFsYWNoYWlzQXJ0aWZpY2UiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/dfbb52ebfe/MalachaisArtifice.png", baseType: "潜能之戒" }, { name: "红刃之环 潜能之戒", href: "https://poedb.tw/cn/Redblade_Band", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmVkYmxhZGUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/cf85c48dff/Redblade.png", limit: "「孤岛灯塔」限定掉落\n「战团」联盟限定", baseType: "潜能之戒" }, { name: "狡徒束腰 重革腰带", href: "https://poedb.tw/cn/Belt_of_the_Deceiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdE9mVGhlRGVjaWV2ZXIiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/914fb37e8c/BeltOfTheDeciever.png", baseType: "重革腰带" }, { name: "奴役之索 重革腰带", href: "https://poedb.tw/cn/String_of_Servitude", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvU3RyaW5nX29mX1NlcnZpdHVkZSIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/a19be8cb67/String_of_Servitude.png", limit: "「瓦尔妖塔」限定掉落\n「穿越」联盟限定", baseType: "重革腰带" }, { name: "意志呼唤 双玉戒指", href: "https://poedb.tw/cn/Call_of_the_Brotherhood", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQnJvdGhlcmhvb2QiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/956d645be0/Brotherhood.png", baseType: "双玉戒指" }, { name: "暴君之握 军团手套", href: "https://poedb.tw/cn/Offering_to_the_Serpent", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR3JpcE9mVGhlQ29icmEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwic3ludGhlc2lzZWQiOnRydWV9XQ/f77051c363/GripOfTheCobra.png", limit: "「维纳留斯」限定掉落\n「虚空忆境」联盟限定", baseType: "军团手套" }, { name: "虚空慧眼 潜能之戒", href: "https://poedb.tw/cn/Voideye", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvdW51c2VkNCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/6f0e76fbbb/unused4.png", limit: "「伏击/侵略」联盟限定", baseType: "潜能之戒" }, { name: "贝雷克的火与雷之乐 双玉戒指", href: "https://poedb.tw/cn/Bereks_Respite", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmVyZWtzUmVzcGl0ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/82b228798a/BereksRespite.png", limit: "「支配/复仇」联盟限定", baseType: "双玉戒指" }, { name: "贝雷克的冰与雷之曲 双玉戒指", href: "https://poedb.tw/cn/Bereks_Grip", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmVyZWtzR3JpcCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/7abb06d839/BereksGrip.png", limit: "「支配/复仇」联盟限定", baseType: "双玉戒指" }, { name: "渎神代理 潜能之戒", href: "https://poedb.tw/cn/Profane_Proxy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU2tpdHRlcmJvdFJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/20b7d215dd/SkitterbotRing.png", baseType: "潜能之戒" }, { name: "贝雷克的冰与火之歌 双玉戒指", href: "https://poedb.tw/cn/Bereks_Pass", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmVyZWtzUGFzcyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/efb7743eeb/BereksPass.png", limit: "「支配/复仇」联盟限定", baseType: "双玉戒指" }, { name: "阿克莱的草原 红玉戒指", href: "https://poedb.tw/cn/Ahkelis_Meadow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmVkQ29tcG9uZW50MiIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/0c950dc560/RedComponent2.png", limit: "「水晶之王奥尔」限定掉落\n「地心」联盟限定", baseType: "红玉戒指" }, { name: "三头威仪 潜能之戒", href: "https://poedb.tw/cn/Triumvirate_Authority", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVmFhbFVuc2V0UmluZyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/21c7f71af2/VaalUnsetRing.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "潜能之戒" }, { name: "风暴之炎 蛋白石戒指", href: "https://poedb.tw/cn/Stormfire", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU3Rvcm1GaXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/6b3db4e8df/StormFire.png", baseType: "蛋白石戒指" }, { name: "罗米拉的潜力之环 宝钻戒指", href: "https://poedb.tw/cn/Romiras_Banquet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUm9taXJhc0JhbnF1ZXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/aa054b3ccd/RomirasBanquet.png", baseType: "晶钻戒指" }, { name: "裂界之印 合金戒指", href: "https://poedb.tw/cn/Mark_of_the_Elder", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVWJlckVsZGVyUmluZyIsInciOjEsImgiOjEsInNjYWxlIjoxLCJlbGRlciI6dHJ1ZX1d/02f45acdfb/UberElderRing.png", limit: "「裂界者」限定掉落", baseType: "合金戒指" }, { name: "阿兹里圣徽 海灵护身符", href: "https://poedb.tw/cn/Atziris_Foible", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9RdWlkIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/00c2b3a588/Quid.png", baseType: "海灵护身符" }, { name: "毁灭激波 蛋白石戒指", href: "https://poedb.tw/cn/Polaric_Devastation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQXNoQW5kRnJvc3QiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/70630a6e17/AshAndFrost.png", limit: "「漆黑之星」限定掉落", baseType: "蛋白石戒指" }, { name: "魔灵之符 海灵护身符", href: "https://poedb.tw/cn/Sidhebreath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQxVW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/2a0f1c86cc/Amulet1Unique.png", baseType: "海灵护身符" }, { name: "时光之握 月光石戒指", href: "https://poedb.tw/cn/Timeclasp", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGltZWNsYXNwIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/b0c1b94ad1/Timeclasp.png", baseType: "月光石戒指" }, { name: "腐血的承诺 潜能之戒", href: "https://poedb.tw/cn/Rotblood_Promise", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQ3Vyc2VkRXllIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/6f6b42ce7e/CursedEye.png", limit: "「驱灵仪式」联盟限定", baseType: "潜能之戒" }, { name: "卡兰德之触 戒指", href: "https://poedb.tw/cn/Kalandras_Touch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTWlycm9yUmluZyIsInciOjEsImgiOjEsInNjYWxlIjoxLCJkdXBsaWNhdGVkIjp0cnVlfV0/2cbd02eced/MirrorRing.png", baseType: "戒指" }, { name: "玛拉凯的巧技【仿品】 潜能之戒", href: "https://poedb.tw/cn/Replica_Malachais_Artifice", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTWFsYWNoYWlzQXJ0aWZpY2UiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/dfbb52ebfe/MalachaisArtifice.png", baseType: "潜能之戒" }, { name: "祭祀之心 海灵护身符", href: "https://poedb.tw/cn/Sacrificial_Heart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TYWNyaWZpY2lhbF9IZWFydCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/e3daa4cd32/Sacrificial_Heart.png", limit: "「瓦尔妖塔」限定掉落\n「穿越」联盟限定\n使用 献祭魔瓶 升级 泽佛伊之心", baseType: "海灵护身符" }, { name: "泽佛伊之心 海灵护身符", href: "https://poedb.tw/cn/Zerphis_Heart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9aZXJwaGlzSGVhcnQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/3e35140dfe/ZerphisHeart.png", limit: "「穿越」联盟限定\n祭祀之心 使用 献祭魔瓶 升级", baseType: "海灵护身符" }, { name: "隐灵之符 珊瑚护身符", href: "https://poedb.tw/cn/Araku_Tiki", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQyVW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/6468b95d6b/Amulet2Unique.png", baseType: "珊瑚护身符" }, { name: "阿兹里圣徽【仿品】 海灵护身符", href: "https://poedb.tw/cn/Replica_Atziris_Foible", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9RdWlkIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/00c2b3a588/Quid.png", baseType: "海灵护身符" }, { name: "活解 潜能之戒", href: "https://poedb.tw/cn/Vivinsect", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmV0cmF5YWxFeHBlcmltZW50YXRpb25SaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/0131f81491/BetrayalExperimentationRing.png", limit: "「背叛者」联盟限定", baseType: "潜能之戒" }, { name: "堕落之血 琥珀护身符", href: "https://poedb.tw/cn/Blood_of_Corruption", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9IZWFydE9mQ29ycnVwdGlvbiIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ded3d6446f/HeartOfCorruption.png", limit: "纯净之泪 使用 瓦尔宝珠 升级", baseType: "琥珀护身符" }, { name: "信念之砧 琥珀护身符", href: "https://poedb.tw/cn/The_Anvil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbnZpbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/8d05280077/Anvil.png", baseType: "琥珀护身符" }, { name: "索伏之心 琥珀护身符", href: "https://poedb.tw/cn/Xophs_Heart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9ZcGhldGhha2tzSGVhcnQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8fce3ec78f/YphethakksHeart.png", limit: "「索伏之域」限定掉落\n「精华」联盟限定\n使用 索伏的祝福 升级 索伏之血", baseType: "琥珀护身符" }, { name: "浸血徽章 琥珀护身符", href: "https://poedb.tw/cn/Bloodsoaked_Medallion", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9CbG9vZFNvYWtlZF9NZWRhbGxpb24iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/2160ca2460/BloodSoaked_Medallion.png", baseType: "琥珀护身符" }, { name: "玷污契约 珊瑚护身符", href: "https://poedb.tw/cn/Tainted_Pact", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UYWludGVkUGFjdCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/77ad55d4dd/TaintedPact.png", baseType: "珊瑚护身符" }, { name: "卡鲁的战徽 翠玉护身符", href: "https://poedb.tw/cn/Karui_Ward", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ0VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/069e4f76ea/Amulet4Unique.png", baseType: "翠玉护身符" }, { name: "塑界之印 蛋白石戒指", href: "https://poedb.tw/cn/Mark_of_the_Shaper", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVWJlclNoYXBlclJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwic2hhcGVyIjp0cnVlfV0/d856526767/UberShaperRing.png", limit: "「裂界者」限定掉落", baseType: "蛋白石戒指" }, { name: "圣令 珊瑚护身符", href: "https://poedb.tw/cn/Tavukai", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UYXZ1a2FpIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/86cc756de2/Tavukai.png", baseType: "珊瑚护身符" }, { name: "拉什卡德的耐心 翠玉护身符", href: "https://poedb.tw/cn/Rashkaldors_Patience", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9SYXNoa2FsZG9yc1BhdGllbmNlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/336e3419f4/RashkaldorsPatience.png", baseType: "翠玉护身符" }, { name: "太平 翠玉护身符", href: "https://poedb.tw/cn/The_Halcyon", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9HbGFjaWVyQ2Fjb29uIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/9bb08197c4/GlacierCacoon.png", limit: "「托沃之域」限定掉落\n「精华」联盟限定\n使用 托沃的祝福 升级 群魔殿", baseType: "翠玉护身符" }, { name: "索伏之血 琥珀护身符", href: "https://poedb.tw/cn/Xophs_Blood", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9ZcGhldGhha2tzSGVhcnRVcGdyYWRlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/259f2be84d/YphethakksHeartUpgrade.png", limit: "「精华」联盟限定\n索伏之心 使用 索伏的祝福 升级", baseType: "琥珀护身符" }, { name: "卡鲁的战徽【仿品】 翠玉护身符", href: "https://poedb.tw/cn/Replica_Karui_Ward", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ0VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/069e4f76ea/Amulet4Unique.png", baseType: "翠玉护身符" }, { name: "伊基阿霍之诺言 珊瑚护身符", href: "https://poedb.tw/cn/Ikiahos_Promise", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Ja2lhaG9BbXVsZXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/119e919299/IkiahoAmulet.png", baseType: "珊瑚护身符" }, { name: "柳树之赐 翠玉护身符", href: "https://poedb.tw/cn/Willowgift", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TdGFybGlnaHRNYXJrIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/b956123acc/StarlightMark.png", baseType: "翠玉护身符" }, { name: "西里的真相 翠玉护身符", href: "https://poedb.tw/cn/Hyrris_Truth", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TeW50aGVzaXNBY2N1cmFjeUFtdWxldCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/6062fd361e/SynthesisAccuracyAmulet.png", baseType: "翠玉护身符" }, { name: "西里的真相【仿品】 翠玉护身符", href: "https://poedb.tw/cn/Replica_Hyrris_Truth", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TeW50aGVzaXNBY2N1cmFjeUFtdWxldCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/6062fd361e/SynthesisAccuracyAmulet.png", baseType: "翠玉护身符" }, { name: "拉兹瓦的灵石 海玉护身符", href: "https://poedb.tw/cn/Stone_of_Lazhwar", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ1VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/c7c2e9bfcf/Amulet5Unique.png", baseType: "海玉护身符" }, { name: "暴风之语 海玉护身符", href: "https://poedb.tw/cn/Choir_of_the_Storm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Wb2ljZU9mVGhlU3Rvcm1VcGdyYWRlIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlbGljIjo0fV0/c04c940123/VoiceOfTheStormUpgrade.png", limit: "「精华」联盟限定\n暴风之言 使用 艾许的祝福 升级", baseType: "海玉护身符" }, { name: "烈阳徽记 帝金护身符", href: "https://poedb.tw/cn/The_Ignomon", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ2VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/41a964dea4/Amulet6Unique.png", baseType: "帝金护身符" }, { name: "暴风之言 海玉护身符", href: "https://poedb.tw/cn/Voice_of_the_Storm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Wb2ljZU9mVGhlU3Rvcm0iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/c5fb24dbbe/VoiceOfTheStorm.png", limit: "「艾许之域」限定掉落\n「精华」联盟限定\n使用 艾许的祝福 升级 暴风之语", baseType: "海玉护身符" }, { name: "群魔殿 翠玉护身符", href: "https://poedb.tw/cn/The_Pandemonius", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9HbGFjaWVyQ2Fjb29uVXBncmFkZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/f54aa988e2/GlacierCacoonUpgrade.png", limit: "「精华」联盟限定\n太平 使用 托沃的祝福 升级", baseType: "翠玉护身符" }, { name: "玛莉琳的护体之符 海玉护身符", href: "https://poedb.tw/cn/Marylenes_Fallacy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9NYXJ5bGVuZXNGYWxsYWN5IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/1665e40d51/MarylenesFallacy.png", baseType: "海玉护身符" }, { name: "比斯克的项圈 帝金护身符", href: "https://poedb.tw/cn/Biscos_Collar", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9CaXNjb3NDb2xsYXIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8aa730c40e/BiscosCollar.png", baseType: "帝金护身符" }, { name: "德瑞之舌 海玉护身符", href: "https://poedb.tw/cn/Doedres_Tongue", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Eb2VkcmVzVG9uZ3VlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/434403db05/DoedresTongue.png", baseType: "海玉护身符" }, { name: "短暂羁绊 海玉护身符", href: "https://poedb.tw/cn/The_Ephemeral_Bond", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9DaGFyZ2UgQW1wbGlmaWVyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/a285d4c77a/Charge%20Amplifier.png", baseType: "海玉护身符" }, { name: "纯净之泪 海玉护身符", href: "https://poedb.tw/cn/Tear_of_Purity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UZWFyT2ZQdXJpdHkiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8a2e6d3c61/TearOfPurity.png", limit: "使用 瓦尔宝珠 升级 堕落之血", baseType: "海玉护身符" }, { name: "不动之魂 帝金护身符", href: "https://poedb.tw/cn/The_Untouched_Soul", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TdHJpbmdPZlJpbmdzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/a79e77693d/StringOfRings.png", limit: "「禁咒荒林」限定掉落", baseType: "帝金护身符" }, { name: "均衡之符 黑曜护身符", href: "https://poedb.tw/cn/Astramentis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQzNiIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/95da0d04a4/Amulet36.png", baseType: "黑曜护身符" }, { name: "冬之心 帝金护身符", href: "https://poedb.tw/cn/Winterheart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9XaW50ZXJIZWFydEFMVCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ff8c8c67f2/WinterHeartALT.png", baseType: "帝金护身符" }, { name: "苦行 帝金护身符", href: "https://poedb.tw/cn/The_Ascetic", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQxMyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/8dd083062d/Amulet13.png", limit: "「预言」联盟限定", baseType: "帝金护身符" }, { name: "珀奎尔之趾 帝金护身符", href: "https://poedb.tw/cn/Perquils_Toe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9QZXJxdWlsc1RvZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/7509c4517f/PerquilsToe.png", baseType: "帝金护身符" }, { name: "命运之抗争 海灵护身符", href: "https://poedb.tw/cn/Defiance_of_Destiny", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9IaW5la29yYUFtdWxldCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/d26f80f9c7/HinekoraAmulet.png", baseType: "海灵护身符" }, { name: "苦难羁绊 黑曜护身符", href: "https://poedb.tw/cn/Yoke_of_Suffering", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Zb2tlT2ZTdWZmZXJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/80cc716213/YokeOfSuffering.png", baseType: "黑曜护身符" }, { name: "原始锁链 珊瑚护身符", href: "https://poedb.tw/cn/The_Primordial_Chain", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UaGVQcmltb3JkaWFsQ2hhaW4iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/cd566defdb/ThePrimordialChain.png", baseType: "珊瑚护身符" }, { name: "冬之心【仿品】 帝金护身符", href: "https://poedb.tw/cn/Replica_Winterheart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9XaW50ZXJIZWFydEFMVCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ff8c8c67f2/WinterHeartALT.png", baseType: "帝金护身符" }, { name: "夏乌拉之印 黑曜护身符", href: "https://poedb.tw/cn/Presence_of_Chayula", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9QcmVzZW5jZU9mQ2hheXVsYSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/6460da7c94/PresenceOfChayula.png", limit: "「精华」联盟限定\n寻宝者的心眼 使用 夏乌拉的祝福 升级", baseType: "黑曜护身符" }, { name: "辛格拉的凝视 黑曜护身符", href: "https://poedb.tw/cn/Hinekoras_Sight", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9IaW5la29yYXNTaWdodCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/13820d857f/HinekorasSight.png", limit: "「Ancient Rivalries IV」限定掉落\n「预言」联盟限定", baseType: "黑曜护身符" }, { name: "隐逝 黑曜护身符", href: "https://poedb.tw/cn/Impresence", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9FbGRlclBoeXNpY2FsIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsImVsZGVyIjp0cnVlfV0/1f92ee434e/ElderPhysical.png", limit: "「裂界者」限定掉落", baseType: "黑曜护身符" }, { name: "寻宝者的心眼 黑曜护身符", href: "https://poedb.tw/cn/Eye_of_Chayula", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ3VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/6b059ec15d/Amulet7Unique.png", limit: "使用 夏乌拉的祝福 升级 夏乌拉之印", baseType: "黑曜护身符" }, { name: "至日不眠 黑曜护身符", href: "https://poedb.tw/cn/Solstice_Vigil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TaGFwZXJzUHJlc2VuY2UiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwic2hhcGVyIjp0cnVlfV0/5881f1f025/ShapersPresence.png", baseType: "黑曜护身符" }, { name: "领袖的代价 黑曜护身符", href: "https://poedb.tw/cn/Leaderships_Price", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9LdXJhaXNNYXN0ZXJ5IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/bf33f8013a/KuraisMastery.png", limit: "「契约：罪恶双生」限定掉落\n「夺宝奇兵」联盟限定", baseType: "黑曜护身符" }, { name: "绞杀之息 黑曜护身符", href: "https://poedb.tw/cn/Stranglegasp", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9HaWZ0T2ZHbG9waCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/babc794c98/GiftOfGloph.png", limit: "「Blight-ravaged Map」限定掉落", baseType: "黑曜护身符" }, { name: "奥尔之兴 黑曜护身符", href: "https://poedb.tw/cn/Auls_Uprising", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BaG4gQXJ0aWZhY3QiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVsaWMiOjR9XQ/63fca28a00/Ahn%20Artifact.png", limit: "「水晶之王奥尔」限定掉落\n「地心」联盟限定", baseType: "黑曜护身符" }, { name: "结晶全知 黑曜护身符", href: "https://poedb.tw/cn/Crystallised_Omniscience", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Bc2NlbmRhbmNlQW11bGV0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/60368620d5/AscendanceAmulet.png", limit: "「灼督」限定掉落", baseType: "黑曜护身符" }, { name: "时空扭曲 青玉护身符", href: "https://poedb.tw/cn/Warped_Timepiece", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9XYXJwZWRUaW1lcGllY2UiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/abee67f17d/WarpedTimepiece.png", baseType: "青玉护身符" }, { name: "群星之灰 黑曜护身符", href: "https://poedb.tw/cn/Ashes_of_the_Stars", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9NYXN0ZXJPZkdlbXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/f6497cbdfe/MasterOfGems.png", limit: "「世界吞噬者」限定掉落", baseType: "黑曜护身符" }, { name: "恩吉尔的和谐 青玉护身符", href: "https://poedb.tw/cn/Ungils_Harmony", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9VbmdpbHNIYXJtb255IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/dfdaf30e66/UngilsHarmony.png", baseType: "青玉护身符" }, { name: "维多里奥的捷思 青玉护身符", href: "https://poedb.tw/cn/Victarios_Acuity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UdXJxdW9pc2VBbXVsZXRVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8ba340b31f/TurquoiseAmuletUnique.png", limit: "「猛攻」联盟限定", baseType: "青玉护身符" }, { name: "屠戮之心 黑曜护身符", href: "https://poedb.tw/cn/Carnage_Heart", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQzNyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/451ac32a56/Amulet37.png", baseType: "黑曜护身符" }, { name: "兄弟会徽章 青玉护身符", href: "https://poedb.tw/cn/Badge_of_the_Brotherhood", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Bc3Nhc3NpblVuaXF1ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/3616219d7d/AssassinUnique.png", limit: "「菌潮」联盟限定", baseType: "青玉护身符" }, { name: "龙牙之翔【仿品】 黑曜护身符", href: "https://poedb.tw/cn/Replica_Dragonfangs_Flight", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9NYWxhY2hhaSdzIEJyaWxsaWFuY2VBbXVsZXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/a1548914e0/Malachai%27s%20BrillianceAmulet.png", baseType: "黑曜护身符" }, { name: "福尔的忠诚之符 玛瑙护身符", href: "https://poedb.tw/cn/Volls_Devotion", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BZ2F0ZUFtdWxldFVuaXF1ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/a67e002c89/AgateAmuletUnique.png", limit: "「混乱/猛攻」联盟限定", baseType: "玛瑙护身符" }, { name: "埃拉黛丝 玛瑙护身符", href: "https://poedb.tw/cn/The_Aylardex", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9YZWRyYWx5YXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d9ae7f380f/Xedralyas.png", baseType: "玛瑙护身符" }, { name: "塑界者之籽 玛瑙护身符", href: "https://poedb.tw/cn/Shapers_Seed", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TaGFwZXJzU2VlZCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/99265d5594/ShapersSeed.png", baseType: "玛瑙护身符" }, { name: "愤怒之阀 青玉护身符", href: "https://poedb.tw/cn/Fury_Valve", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9NZXRhbW9ycGhvc2lzQW11bGV0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/f8bdb14091/MetamorphosisAmulet.png", limit: "「灾变」联盟限定", baseType: "青玉护身符" }, { name: "兄弟会徽章【仿品】 青玉护身符", href: "https://poedb.tw/cn/Replica_Badge_of_the_Brotherhood", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Bc3Nhc3NpblVuaXF1ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/3616219d7d/AssassinUnique.png", limit: "「夺宝奇兵」限定掉落", baseType: "青玉护身符" }, { name: "永恒诅咒 玛瑙护身符", href: "https://poedb.tw/cn/Eternal_Damnation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbndlbnNBbXVsZXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/1d40745e7d/AnwensAmulet.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "玛瑙护身符" }, { name: "费伯之牙 黄晶护身符", href: "https://poedb.tw/cn/The_Felbog_Fang", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TYWJlcnRvb3Roc1BlbmRhbnQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/bbb6f80324/SabertoothsPendant.png", limit: "「夜生之子囊赫利姆」限定掉落\n「庄园」联盟限定", baseType: "黄晶护身符" }, { name: "女武神 月光石戒指", href: "https://poedb.tw/cn/Valyrium", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVmFseXJpdW0iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/dd9261042f/Valyrium.png", baseType: "月光石戒指" }, { name: "心灵抽取 玛瑙护身符", href: "https://poedb.tw/cn/Extractor_Mentis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9FeHRyYWN0b3JNZW50aXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/af5684bd74/ExtractorMentis.png", baseType: "玛瑙护身符" }, { name: "德瑞索的战礼 黄晶护身符", href: "https://poedb.tw/cn/Daressos_Salute", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9DaXRyaW5lQW11bGV0VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/ea232d0123/CitrineAmuletUnique.png", limit: "「混乱」联盟限定", baseType: "黄晶护身符" }, { name: "昏暗之牙 碧珠护身符", href: "https://poedb.tw/cn/Gloomfang", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TaGFkb3dSYXkiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/9c05fb0b03/ShadowRay.png", baseType: "碧珠护身符" }, { name: "乌尔尼多之誓 潜能项链", href: "https://poedb.tw/cn/Uul-Netols_Vow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9HaWZ0b2ZVdWxOZXRvbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/6cabe4da33/GiftofUulNetol.png", limit: "「无暇裂隙石」限定掉落", baseType: "潜能项链" }, { name: "幻彩菱织 素布腰带", href: "https://poedb.tw/cn/Prismweave", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvUHJpc213ZWF2ZSIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/822582fe24/Prismweave.png", baseType: "素布腰带" }, { name: "自然组织 死羽魔符", href: "https://poedb.tw/cn/Natural_Hierarchy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UYWxpc21hblVuaXF1ZTIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/3783a100bf/TalismanUnique2.png", limit: "「魔符」联盟限定", baseType: "死羽魔符" }, { name: "巨狼之眼 狼王魔符", href: "https://poedb.tw/cn/Eyes_of_the_Greatwolf", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9SaWd3YWxkc1RhbGlzbWFuIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/4936fcad86/RigwaldsTalisman.png", limit: "「魔符」联盟限定", baseType: "狼王魔符" }, { name: "厄运护符 黄晶护身符", href: "https://poedb.tw/cn/The_Jinxed_Juju", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9KdWp1c1NvdWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6d30276e6f/JujusSoul.png", baseType: "黄晶护身符" }, { name: "复仇的魅力 黄晶护身符", href: "https://poedb.tw/cn/Retaliation_Charm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TaGFyZWRVbnNpZ2h0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d12260a7ac/SharedUnsight.png", baseType: "黄晶护身符" }, { name: "枯井 咒箍魔符", href: "https://poedb.tw/cn/Blightwell", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UYWludGVkU3ByaW5ncyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/a95bad91d3/TaintedSprings.png", limit: "「魔符」联盟限定", baseType: "咒箍魔符" }, { name: "夜守 黑牙魔符", href: "https://poedb.tw/cn/Nights_Hold", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Tb2NrZXRlZFRhbGlzbWFuIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/89ef47ed1c/SocketedTalisman.png", limit: "「魔符」联盟限定", baseType: "黑牙魔符" }, { name: "虚空慧眼【仿品】 潜能之戒", href: "https://poedb.tw/cn/Replica_Voideye", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvdW51c2VkNCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/6f0e76fbbb/unused4.png", baseType: "潜能之戒" }, { name: "饥荒之结 素布腰带", href: "https://poedb.tw/cn/Faminebind", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvRmFtaW5lYmluZCIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/a790722613/Faminebind.png", limit: "「魔符」联盟限定", baseType: "素布腰带" }, { name: "瑞佛诅咒 亡爪魔符", href: "https://poedb.tw/cn/Rigwalds_Curse", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9VbmlxdWVEaXJlQ2xhd1RhbGlzbWFuIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/e8cd3f0898/UniqueDireClawTalisman.png", limit: "「魔符」联盟限定", baseType: "亡爪魔符" }, { name: "鲜血支配 大理石护身符", href: "https://poedb.tw/cn/Bloodgrip", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9CbG9vZEFtdWxldCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/546826e52b/BloodAmulet.png", baseType: "大理石护身符" }, { name: "凝息 扣链腰带", href: "https://poedb.tw/cn/Bated_Breath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmF0ZWRCcmVhdGgiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/0a8cc4529f/BatedBreath.png", baseType: "扣链腰带" }, { name: "懦夫之链 扣链腰带", href: "https://poedb.tw/cn/Cowards_Chains", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQ293YXJkJ3MgQ2hhaW5zIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/b1cb3d3a26/Coward%27s%20Chains.png", limit: "「混化之间」限定掉落\n「穿越」联盟限定\n使用 结论魔瓶 升级 懦夫之遗", baseType: "扣链腰带" }, { name: "马雷格罗的染血之环 扣链腰带", href: "https://poedb.tw/cn/Maligaros_Restraint", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvTWFsaWdhcm9zUmVzdHJhaW50IiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/17a500cb6f/MaligarosRestraint.png", baseType: "扣链腰带" }, { name: "幻彩菱织【仿品】 素布腰带", href: "https://poedb.tw/cn/Replica_Prismweave", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvUHJpc213ZWF2ZSIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/822582fe24/Prismweave.png", baseType: "素布腰带" }, { name: "脱缚之锁 扣链腰带", href: "https://poedb.tw/cn/Chains_of_Emancipation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvU2xhdmVyc0JlbHQiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/0b8d818fbb/SlaversBelt.png", limit: "「契约：贩奴之王」限定掉落\n「夺宝奇兵」联盟限定", baseType: "扣链腰带" }, { name: "变节者 扣链腰带", href: "https://poedb.tw/cn/Ascent_From_Flesh", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvVHVybmNvYXRzZm9ydHVuZSIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/3adba0ad35/Turncoatsfortune.png", limit: "「预言」联盟限定", baseType: "扣链腰带" }, { name: "马雷格罗的残酷 青玉护身符", href: "https://poedb.tw/cn/Maligaros_Cruelty", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQxNSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/f1b938bbd1/Amulet15.png", baseType: "青玉护身符" }, { name: "坚韧之链 扣链腰带", href: "https://poedb.tw/cn/Chain_of_Endurance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvVW5oZWFsdGh5QnVyZGVuIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/d59c2c2bc9/UnhealthyBurden.png", baseType: "扣链腰带" }, { name: "瓦尔克拉斯之星 血色护身符", href: "https://poedb.tw/cn/Star_of_Wraeclast", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9EaXJnZU9mVmljdG9yeSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/e30fe7839f/DirgeOfVictory.png", limit: "「Vendor recipe system」限定掉落", baseType: "血色护身符" }, { name: "永恒之战 黑曜护身符", href: "https://poedb.tw/cn/The_Eternal_Struggle", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Wb2lkY29yZUFtdWxldCIsInciOjEsImgiOjEsInNjYWxlIjoxLCJzZWFyaW5nIjp0cnVlLCJ0YW5nbGVkIjp0cnVlfV0/3ca1f8ecb5/VoidcoreAmulet.png", limit: "「漆黑之星」限定掉落", baseType: "黑曜护身符" }, { name: "呕吐 素布腰带", href: "https://poedb.tw/cn/The_Retch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvVGhlUmV0Y2giLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/4d93673157/TheRetch.png", limit: "「Vendor recipe system」限定掉落\n「魔符」联盟限定", baseType: "素布腰带" }, { name: "懦夫之遗 扣链腰带", href: "https://poedb.tw/cn/Cowards_Legacy", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQ293YXJkJ3MgTGVnYWN5IiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/2325fc7213/Coward%27s%20Legacy.png", limit: "「穿越」联盟限定\n懦夫之链 使用 结论魔瓶 升级", baseType: "扣链腰带" }, { name: "不朽系命 皮革腰带", href: "https://poedb.tw/cn/Umbilicus_Immortalis", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvVW1iaWxpY3VzSW1tb3J0YWxpcyIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/822946a168/UmbilicusImmortalis.png", baseType: "皮革腰带" }, { name: "圣体之绳 皮革腰带", href: "https://poedb.tw/cn/Leash_of_Oblation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvTGVhc2hPZk9ibGF0aW9uIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/f865c7f643/LeashOfOblation.png", limit: "「舆图战记」限定掉落", baseType: "皮革腰带" }, { name: "熊之束腰 皮革腰带", href: "https://poedb.tw/cn/Bears_Girdle", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVhcnNDbHV0Y2giLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/31930452e4/BearsClutch.png", limit: "「荆棘之母厄稀」限定掉落\n「庄园」联盟限定", baseType: "皮革腰带" }, { name: "永生 皮革腰带", href: "https://poedb.tw/cn/Immortal_Flesh", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSW1tb3J0YWxGbGVzaCIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/fceb1b8f8c/ImmortalFlesh.png", baseType: "皮革腰带" }, { name: "火爆之拥 皮革腰带", href: "https://poedb.tw/cn/Pyroshock_Clasp", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvUHlyb3Nob2NrQ2xhc3AiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/42b1bcc3c8/PyroshockClasp.png", baseType: "皮革腰带" }, { name: "暴食 皮革腰带", href: "https://poedb.tw/cn/Gluttony", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvR2x1dHRvbnkiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/850a3a646d/Gluttony.png", baseType: "皮革腰带" }, { name: "猎首 皮革腰带", href: "https://poedb.tw/cn/Headhunter", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSGVhZGh1bnRlciIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/e9542ec6ee/Headhunter.png", baseType: "皮革腰带" }, { name: "无罪之眼 黄晶护身符", href: "https://poedb.tw/cn/Eye_of_Innocence", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9FeWVPZklubm9jZW5jZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/9544014b69/EyeOfInnocence.png", baseType: "黄晶护身符" }, { name: "极北 皮革腰带", href: "https://poedb.tw/cn/Hyperboreus", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmV0cmF5YWxfVW5pcXVlX1RyYW5zcG9ydF9CZWx0IiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/52b9b09a12/Betrayal_Unique_Transport_Belt.png", limit: "「背叛者」联盟限定", baseType: "皮革腰带" }, { name: "龙蜕之带 皮革腰带", href: "https://poedb.tw/cn/Wurms_Molt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDZVbmlxdWUiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/3307668b96/Belt6Unique.png", baseType: "皮革腰带" }, { name: "巨岩指套 皮革腰带", href: "https://poedb.tw/cn/Cyclopean_Coil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvRWxkZXJCZWx0IiwidyI6MiwiaCI6MSwic2NhbGUiOjEsImVsZGVyIjp0cnVlfV0/e933baf49d/ElderBelt.png", limit: "「裂界者」限定掉落", baseType: "皮革腰带" }, { name: "屈服印记 潜能之戒", href: "https://poedb.tw/cn/Mark_of_Submission", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmVkQnJhbmRSaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/8f15300177/RedBrandRing.png", baseType: "潜能之戒" }, { name: "努葛玛呼之印 红玉戒指", href: "https://poedb.tw/cn/Ngamahus_Sign", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTmdhbWFodXNTaWduIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/4323574c5a/NgamahusSign.png", limit: "「血族」联盟限定", baseType: "红玉戒指" }, { name: "猎首【仿品】 皮革腰带", href: "https://poedb.tw/cn/Replica_Headhunter", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSGVhZGh1bnRlciIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/e9542ec6ee/Headhunter.png", baseType: "皮革腰带" }, { name: "戴亚迪安的晨曦 重革腰带", href: "https://poedb.tw/cn/Dyadian_Dawn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvTW90aGVyRHlhZHVzIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/ca299e5015/MotherDyadus.png", baseType: "重革腰带" }, { name: "多里亚尼之约 重革腰带", href: "https://poedb.tw/cn/Doryanis_Invitation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvRG9yeWFuaXNJbnZpdGF0aW9uIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/d0085639cc/DoryanisInvitation.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "重革腰带" }, { name: "突围者 重革腰带", href: "https://poedb.tw/cn/Siegebreaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvODU0ODIiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/ee893f3cb8/85482.png", baseType: "重革腰带" }, { name: "母亲的拥抱 重革腰带", href: "https://poedb.tw/cn/Mothers_Embrace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvTW90aGVyc0VtYnJhY2UiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/e576fccc3e/MothersEmbrace.png", limit: "「灾变」联盟限定", baseType: "重革腰带" }, { name: "比斯克的缰绳 重革腰带", href: "https://poedb.tw/cn/Biscos_Leash", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmlzY29zTGVhc2giLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/87b17c98e7/BiscosLeash.png", baseType: "重革腰带" }, { name: "突围者【仿品】 重革腰带", href: "https://poedb.tw/cn/Replica_Siegebreaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvODU0ODIiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/ee893f3cb8/85482.png", baseType: "重革腰带" }, { name: "冈姆之束缚 重革腰带", href: "https://poedb.tw/cn/Kaoms_Binding", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvS2FvbUJlbHQiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/94edbfb12d/KaomBelt.png", baseType: "重革腰带" }, { name: "盛宴之结 素布腰带", href: "https://poedb.tw/cn/Feastbind", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvRmVhc3RiaW5kIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/f5d1f232d6/Feastbind.png", limit: "「魔符」联盟限定", baseType: "素布腰带" }, { name: "法师之血 重革腰带", href: "https://poedb.tw/cn/Mageblood", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSW5qZWN0b3JCZWx0IiwidyI6MiwiaCI6MSwic2NhbGUiOjEsInJlbGljIjozfV0/804570c5af/InjectorBelt.png", baseType: "重革腰带" }, { name: "普兰德斯之印 饰布腰带", href: "https://poedb.tw/cn/Perandus_Blazon", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQnVja2xlZEJlbHRVbmlxdWUyIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/b67e6fa4a9/BuckledBeltUnique2.png", baseType: "饰布腰带" }, { name: "幸存者的愧疚 重革腰带", href: "https://poedb.tw/cn/Survivors_Guilt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSW1iYWxhbmNlZENvcmQiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/0560075a4c/ImbalancedCord.png", limit: "「驱灵仪式」联盟限定", baseType: "重革腰带" }, { name: "日炎 饰布腰带", href: "https://poedb.tw/cn/Sunblast", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDgiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/c50a807f09/Belt8.png", baseType: "饰布腰带" }, { name: "嗜魂 饰布腰带", href: "https://poedb.tw/cn/Soulthirst", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvU291bHRoaXJzdCIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/ee53d9c1ef/Soulthirst.png", baseType: "饰布腰带" }, { name: "复苏之药 饰布腰带", href: "https://poedb.tw/cn/The_Druggery", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvVGhlRHJ1Z2dlcnkiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/136b59f839/TheDruggery.png", baseType: "饰布腰带" }, { name: "仁德腰带 饰布腰带", href: "https://poedb.tw/cn/Ceinture_of_Benevolence", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvTGlua21hc3RlcnNDb2lsIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/19af94314e/LinkmastersCoil.png", baseType: "饰布腰带" }, { name: "奥莱西亚的喜悦 饰布腰带", href: "https://poedb.tw/cn/Olesyas_Delight", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQWx0Q2hhcmdlRGV4IiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/caa418edee/AltChargeDex.png", limit: "「贤主」限定掉落", baseType: "饰布腰带" }, { name: "灵魂羁绊 饰布腰带", href: "https://poedb.tw/cn/Soul_Tether", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDMiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/93af17affd/Belt3.png", baseType: "饰布腰带" }, { name: "既定命途 饰布腰带", href: "https://poedb.tw/cn/Bound_Fate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSGluZWtvcmFCZWx0IiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/0ffa60853d/HinekoraBelt.png", baseType: "饰布腰带" }, { name: "葛拉文的秘宝 饰布腰带", href: "https://poedb.tw/cn/Gravens_Secret", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQWx0Q2hhcmdlSW50IiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/1300aed2ac/AltChargeInt.png", limit: "「贤主」限定掉落", baseType: "饰布腰带" }, { name: "流逝之时 饰布腰带", href: "https://poedb.tw/cn/The_Flow_Untethered", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSGFyYmluZ2VyQmVsdCIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/805aeb48f1/HarbingerBelt.png", limit: "「降临之地」限定掉落\n「先驱」联盟限定\n使用 时光卷轴 升级 沧海桑田", baseType: "饰布腰带" }, { name: "瑞斯拉萨的线圈 扣钉腰带", href: "https://poedb.tw/cn/Ryslathas_Coil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvUnl1c2xhdGhhc0NsdXRjaGVzIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/5b990decd3/RyuslathasClutches.png", baseType: "扣钉腰带" }, { name: "阿恩的痛苦 饰布腰带", href: "https://poedb.tw/cn/Arns_Anguish", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQWx0Q2hhcmdlU3RyIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/c07eed602e/AltChargeStr.png", limit: "「贤主」限定掉落", baseType: "饰布腰带" }, { name: "坚毅之环 扣钉腰带", href: "https://poedb.tw/cn/The_Magnate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQnVja2xlZEJlbHRVbmlxdWUiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/10d87b7baf/BuckledBeltUnique.png", baseType: "扣钉腰带" }, { name: "沧海桑田 饰布腰带", href: "https://poedb.tw/cn/The_Torrents_Reclamation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSGFyYmluZ2VyQmVsdFVwZ3JhZGVkIiwidyI6MiwiaCI6MSwic2NhbGUiOjEsInJlbGljIjoyfV0/222510f201/HarbingerBeltUpgraded.png", limit: "「灌注的降临之地」限定掉落\n「庄园」联盟限定\n流逝之时 使用 时光卷轴 升级", baseType: "饰布腰带" }, { name: "德瑞的妙药 良质魔力药剂", href: "https://poedb.tw/cn/Doedres_Elixir", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MveUZsYXNrNCIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/59c415efed/yFlask4.png", baseType: "良质魔力药剂" }, { name: "泽佛伊的终息 优质魔力药剂", href: "https://poedb.tw/cn/Zerphis_Last_Breath", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvWmVycGhpc0xhc3RCcmVhdGgiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/bf8cb7b943/ZerphisLastBreath.png", baseType: "优质魔力药剂" }, { name: "拉维安加之泉 圣化魔力药剂", href: "https://poedb.tw/cn/Laviangas_Spirit", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvTGF2aWFuZ2FzT2lsIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/44f064d737/LaviangasOil.png", limit: "「支配/复仇」联盟限定", baseType: "圣化魔力药剂" }, { name: "奥术之符 水晶腰带", href: "https://poedb.tw/cn/Auxium", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQXV4aXVtIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/acf784e82e/Auxium.png", baseType: "水晶腰带" }, { name: "扭曲之罐 祝福复合药剂", href: "https://poedb.tw/cn/The_Writhing_Jar", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvV3JpdGhpbmdKYXIiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/6d3e384036/WrithingJar.png", baseType: "祝福复合药剂" }, { name: "宝视精华 大型复合药剂", href: "https://poedb.tw/cn/Divination_Distillate", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MveUZsYXNrczE3IiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/df28fc612b/yFlasks17.png", baseType: "大型复合药剂" }, { name: "克拉里多之名 宝钻药剂", href: "https://poedb.tw/cn/Coralitos_Signature", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvR29yZ29uc0ZsYXNrIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/8fa50a1974/GorgonsFlask.png", baseType: "宝钻药剂" }, { name: "逝日 红玉药剂", href: "https://poedb.tw/cn/Dying_Sun", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvU2hhcGVyc0ZsYXNrIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/c6e2f8118d/ShapersFlask.png", limit: "「塑界者」限定掉落", baseType: "红玉药剂" }, { name: "梅吉诺德的力量泉源 重革腰带", href: "https://poedb.tw/cn/Meginords_Girdle", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDdVbmlxdWUiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/59718aca01/Belt7Unique.png", baseType: "重革腰带" }, { name: "鲁米的灵药 坚岩药剂", href: "https://poedb.tw/cn/Rumis_Concoction", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQmxvY2tGbGFzayIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/3bc27f19d5/BlockFlask.png", baseType: "坚岩药剂" }, { name: "狮吼精华 坚岩药剂", href: "https://poedb.tw/cn/Lions_Roar", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MveUZsYXNrNSIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/69fe070e32/yFlask5.png", baseType: "坚岩药剂" }, { name: "伤胃酒 水银药剂", href: "https://poedb.tw/cn/Rotgut", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvUm90Z3V0IiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/80c2799242/Rotgut.png", baseType: "水银药剂" }, { name: "恨意 蓝玉药剂", href: "https://poedb.tw/cn/Taste_of_Hate", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvVGFzdGVPZkhhdGUiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/37ff43c7ff/TasteOfHate.png", baseType: "蓝玉药剂" }, { name: "鲁米的灵药【仿品】 坚岩药剂", href: "https://poedb.tw/cn/Replica_Rumis_Concoction", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQmxvY2tGbGFzayIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/3bc27f19d5/BlockFlask.png", baseType: "坚岩药剂" }, { name: "阿兹里的诺言 紫晶药剂", href: "https://poedb.tw/cn/Atziris_Promise", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQXR6aXJpc1Byb21pc2UiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/8a5f4f13b4/AtzirisPromise.png", limit: "「瓦尔女王阿兹里」限定掉落", baseType: "紫晶药剂" }, { name: "茁育助长 紫晶药剂", href: "https://poedb.tw/cn/Progenesis", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvVWJlck1hdmVuRmxhc2siLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/b82c247a54/UberMavenFlask.png", limit: "「Uber The Maven」限定掉落", baseType: "紫晶药剂" }, { name: "维克塔血器 黄玉药剂", href: "https://poedb.tw/cn/Vessel_of_Vinktar", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvVmlua3RhckZsYXNrIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/caf5220901/VinktarFlask.png", baseType: "黄玉药剂" }, { name: "禁果 石英药剂", href: "https://poedb.tw/cn/Forbidden_Taste", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvUGhhbnRvbUJsb29kIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/d04fc2ce16/PhantomBlood.png", baseType: "石英药剂" }, { name: "巫酿之水 迷雾药剂", href: "https://poedb.tw/cn/Witchfire_Brew", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvV2l0Y2hGaXJlQnJldyIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/1696a739f5/WitchFireBrew.png", baseType: "迷雾药剂" }, { name: "神圣哀悼 硫磺药剂", href: "https://poedb.tw/cn/The_Sorrow_of_the_Divine", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvU29ycm93T2ZUaGVEaXZpbmUiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/5d9eb26bd6/SorrowOfTheDivine.png", baseType: "硫磺药剂" }, { name: "裂魂者 石英药剂", href: "https://poedb.tw/cn/Soul_Ripper", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvU291bFJpcHBlciIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/f74d277e1d/SoulRipper.png", limit: "「穿越」联盟限定\n捕魂者 使用 鬼魂魔瓶 升级", baseType: "石英药剂" }, { name: "高洁圣杯 硫磺药剂", href: "https://poedb.tw/cn/The_Overflowing_Chalice", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvT3ZlcmZsb3dpbmdDaGFsaWNlIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/ff0069d957/OverflowingChalice.png", baseType: "硫磺药剂" }, { name: "灵魂羁绊【仿品】 饰布腰带", href: "https://poedb.tw/cn/Replica_Soul_Tether", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvU291bFRldGhlciIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/a2b7447a4a/SoulTether.png", baseType: "饰布腰带" }, { name: "瓶中信仰 硫磺药剂", href: "https://poedb.tw/cn/Bottled_Faith", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQm90dGxlZFB1cml0eSIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/b2ef237bf3/BottledPurity.png", limit: "「维纳留斯」限定掉落\n「虚空忆境」联盟限定", baseType: "硫磺药剂" }, { name: "奥瑞亚的尽头 灰岩药剂", href: "https://poedb.tw/cn/Oriaths_End", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvVWJlclNpcnVzRmxhc2siLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/8758d70627/UberSirusFlask.png", limit: "「Uber Sirus, Awakener of Worlds」限定掉落", baseType: "灰岩药剂" }, { name: "神圣哀悼【仿品】 硫磺药剂", href: "https://poedb.tw/cn/Replica_Sorrow_of_the_Divine", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvU29ycm93T2ZUaGVEaXZpbmUiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/5d9eb26bd6/SorrowOfTheDivine.png", baseType: "硫磺药剂" }, { name: "奇亚拉的决心 真银药剂", href: "https://poedb.tw/cn/Kiaras_Determination", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvS2lhcmFzRGV0ZXJtaW5hdGlvbiIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/591dcd7979/KiarasDetermination.png", baseType: "真银药剂" }, { name: "灰烬之瓮 真银药剂", href: "https://poedb.tw/cn/Cinderswallow_Urn", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvVmlhbG9mVW5saWZlIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/9911226887/VialofUnlife.png", limit: "「亡灵大师卡塔莉娜」限定掉落\n「背叛者」联盟限定", baseType: "真银药剂" }, { name: "不坏圣环灵药 坚铁药剂", href: "https://poedb.tw/cn/Elixir_of_the_Unbroken_Circle", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvV2FyZEZsYXNrMDMiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/d78b003b9a/WardFlask03.png", limit: "「英雄伙伴梅德维德」限定掉落\n「先祖秘藏」联盟限定", baseType: "坚铁药剂" }, { name: "卡鲁之血 圣化生命药剂", href: "https://poedb.tw/cn/Blood_of_the_Karui", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQmxvb2RPZlRoZUthcnVpIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/f70bd57e9f/BloodOfTheKarui.png", limit: "「支配/复仇」联盟限定", baseType: "圣化生命药剂" }, { name: "星光圣杯 坚铁药剂", href: "https://poedb.tw/cn/Starlight_Chalice", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQWRhcHRhdGlvbkZsYXNrMDIiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/e2a95fa6e6/AdaptationFlask02.png", limit: "「贪婪叛徒乌崔德」限定掉落\n「先祖秘藏」联盟限定", baseType: "坚铁药剂" }, { name: "马洛尼的技巧 华美箭袋", href: "https://poedb.tw/cn/Maloneys_Mechanism", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9UcmlnZ2VyUXVpdmVyQmFzZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/1f3958bdb3/TriggerQuiverBase.png", baseType: "华美箭袋" }, { name: "欧罗什的决心 坚铁药剂", href: "https://poedb.tw/cn/Olroths_Resolve", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvV2FyZEZsYXNrMDIiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/b6f390075a/WardFlask02.png", limit: "「堕落之源欧罗什」限定掉落\n「先祖秘藏」联盟限定", baseType: "坚铁药剂" }, { name: "真相之担 水晶腰带", href: "https://poedb.tw/cn/The_Burden_of_Truth", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvU2lydXNCZWx0IiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/757f213691/SirusBelt.png", limit: "「诸界觉者希鲁斯」限定掉落", baseType: "水晶腰带" }, { name: "捕魂者 石英药剂", href: "https://poedb.tw/cn/Soul_Catcher", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvU291bENhdGNoZXIiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/00e2d0f2b5/SoulCatcher.png", limit: "「瓦尔妖塔」限定掉落\n「穿越」联盟限定\n使用 鬼魂魔瓶 升级 裂魂者", baseType: "石英药剂" }, { name: "凝息【仿品】 扣链腰带", href: "https://poedb.tw/cn/Replica_Bated_Breath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmF0ZWRCcmVhdGgiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/0a8cc4529f/BatedBreath.png", baseType: "扣链腰带" }, { name: "拉维安加之泉【仿品】 圣化魔力药剂", href: "https://poedb.tw/cn/Replica_Laviangas_Spirit", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvTGF2aWFuZ2FzT2lsIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/44f064d737/LaviangasOil.png", baseType: "圣化魔力药剂" }, { name: "马洛尼的技巧【仿品】 华美箭袋", href: "https://poedb.tw/cn/Replica_Maloneys_Mechanism", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9UcmlnZ2VyUXVpdmVyQmFzZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/1f3958bdb3/TriggerQuiverBase.png", baseType: "华美箭袋" }, { name: "岩头 锯齿箭袋", href: "https://poedb.tw/cn/Craghead", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJVbmlxdWU0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/dfccecb2ae/QuiverUnique4.png", baseType: "锯齿箭袋" }, { name: "恒毅意志 先锋腰带", href: "https://poedb.tw/cn/Perseverance", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvUGVyc2VydmVyYW5jZSIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/1ff634248a/Perserverance.png", baseType: "先锋腰带" }, { name: "西里的嗜血之矢 鲨齿箭袋", href: "https://poedb.tw/cn/Hyrris_Bite", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9Icnl5aXNCaXRlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/91937737c4/HryyisBite.png", baseType: "鲨齿箭袋" }, { name: "穿心 穿射箭袋", href: "https://poedb.tw/cn/Drillneck", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9EcmlsbG5lY2siLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2e0770a7b1/Drillneck.png", baseType: "穿射箭袋" }, { name: "夜临 深渊腰带", href: "https://poedb.tw/cn/Darkness_Enthroned", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvRGFya25lc3NFbnRocm9uZWQiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/2e418e2c4d/DarknessEnthroned.png", limit: "「Abyss Lich」限定掉落\n「深渊」联盟限定", baseType: "深渊腰带" }, { name: "勇者之礼 飞羽箭袋", href: "https://poedb.tw/cn/Saemus_Gift", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9TZWFtdXNHaWZ0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/7da61eeb8e/SeamusGift.png", baseType: "飞羽箭袋" }, { name: "闪耀精华 红玉药剂", href: "https://poedb.tw/cn/Coruscating_Elixir", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQ29ydXNFbGl4aXIiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/26769c58f3/CorusElixir.png", baseType: "红玉药剂" }, { name: "瑞佛之羽 双锋箭袋", href: "https://poedb.tw/cn/Rigwalds_Quills", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9SaWd3YWxkc1F1aWxscyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/b8325e5214/RigwaldsQuills.png", baseType: "双锋箭袋" }, { name: "小会战 双锋箭袋", href: "https://poedb.tw/cn/Skirmish", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9UaGVTa2lybWlzaCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/9fe8813a15/TheSkirmish.png", baseType: "双锋箭袋" }, { name: "寒锋之卫 钝矢箭袋", href: "https://poedb.tw/cn/Rearguard", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9SZWFyZ3VhcmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9b285161a6/Rearguard.png", baseType: "钝矢箭袋" }, { name: "灵魂打击 刺锋箭袋", href: "https://poedb.tw/cn/Soul_Strike", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9Tb3Vsc3RyaWtlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/ecea242a12/Soulstrike.png", baseType: "刺锋箭袋" }, { name: "神性破碎 钝矢箭袋", href: "https://poedb.tw/cn/The_Shattered_Divinity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9IYXJiaW5nZXJRdWl2ZXJVcGdyYWRlZCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/866d1ab1b7/HarbingerQuiverUpgraded.png", limit: "「灌注的降临之地」限定掉落\n「庄园」联盟限定\n爆裂之射 使用 破碎卷轴 升级", baseType: "钝矢箭袋" }, { name: "冰灵之吼 飞羽箭袋", href: "https://poedb.tw/cn/Asphyxias_Wrath", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9Bc3BoeXhpYXNXcmF0aCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e33bd46903/AsphyxiasWrath.png", baseType: "飞羽箭袋" }, { name: "黑炎之芒 燃矢箭袋", href: "https://poedb.tw/cn/Blackgleam", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJVbmlxdWUxIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/797ce777ed/QuiverUnique1.png", baseType: "燃矢箭袋" }, { name: "马洛尼的暮光 恶矢箭袋", href: "https://poedb.tw/cn/Maloneys_Nightfall", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9NYWxvbmV5c05pZ2h0ZmFsbCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/aad4bc5b10/MaloneysNightfall.png", baseType: "恶矢箭袋" }, { name: "惯性 赤红珠宝", href: "https://poedb.tw/cn/Inertia", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0RFWHRvU1RSIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/2fc9d85725/DEXtoSTR.png", baseType: "赤红珠宝" }, { name: "平衡棱镜 原矢箭袋", href: "https://poedb.tw/cn/The_Poised_Prism", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9QcmlzbWF0aWNHbGVhbSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/25341c4e59/PrismaticGleam.png", baseType: "原矢箭袋" }, { name: "求知的热情 赤红珠宝", href: "https://poedb.tw/cn/Inspired_Learning", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL3VuaXF1ZTciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/05e61f124f/unique7.png", baseType: "赤红珠宝" }, { name: "爆裂之射 钝矢箭袋", href: "https://poedb.tw/cn/The_Fracturing_Spinner", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9IYXJiaW5nZXJRdWl2ZXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/288bd960f9/HarbingerQuiver.png", limit: "「降临之地」限定掉落\n「先驱」联盟限定\n使用 破碎卷轴 升级 神性破碎", baseType: "钝矢箭袋" }, { name: "碎镞雨 赤红珠宝", href: "https://poedb.tw/cn/Rain_of_Splinters", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JlZEthcnVpIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/283aad3d25/RedKarui.png", baseType: "赤红珠宝" }, { name: "再生的罪恶 迷雾药剂", href: "https://poedb.tw/cn/Sins_Rebirth", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvU2luIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/897bffaad1/Sin.png", baseType: "迷雾药剂" }, { name: "阿兹里之权 赤红珠宝", href: "https://poedb.tw/cn/Atziris_Reign", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JlZENvcnJ1cHQxIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/b14eb2eeb7/RedCorrupt1.png", baseType: "赤红珠宝" }, { name: "钢铁蠕虫 宽矢箭袋", href: "https://poedb.tw/cn/Steelworm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9TaGFyZFF1aXZlciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/f531e46359/ShardQuiver.png", limit: "「帝王试炼迷宫」限定掉落", baseType: "宽矢箭袋" }, { name: "充分训练 赤红珠宝", href: "https://poedb.tw/cn/Efficient_Training", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0lOVHRvU1RSIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/3631faae6d/INTtoSTR.png", baseType: "赤红珠宝" }, { name: "聚光之石 赤红珠宝", href: "https://poedb.tw/cn/Grand_Spectrum", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dyYW5kU3BlY3RydW0yX0dyZWVuIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/e45dcaecc4/GrandSpectrum2_Green.png", limit: "「帝王试炼迷宫」限定掉落", baseType: "赤红珠宝" }, { name: "虚空制箭者 原矢箭袋", href: "https://poedb.tw/cn/Voidfletcher", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9FbGRhclF1aXZlciIsInciOjIsImgiOjMsInNjYWxlIjoxLCJlbGRlciI6dHJ1ZSwic2hhcGVyIjp0cnVlfV0/bd739c33ef/EldarQuiver.png", limit: "「裂界者」限定掉落", baseType: "原矢箭袋" }, { name: "起源力量 赤红珠宝", href: "https://poedb.tw/cn/Primordial_Might", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dvbGVtSW5mZXJuYWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/a50b1917f5/GolemInfernal.png", baseType: "赤红珠宝" }, { name: "脆弱 赤红珠宝", href: "https://poedb.tw/cn/Fragility", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JlZENvcnJ1cHQ2IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/161d0c411c/RedCorrupt6.png", baseType: "赤红珠宝" }, { name: "能量坚甲 赤红珠宝", href: "https://poedb.tw/cn/Energised_Armour", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JlZEpld2VsNSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/5d09a69cbc/RedJewel5.png", baseType: "赤红珠宝" }, { name: "聪明的欧克 灰岩药剂", href: "https://poedb.tw/cn/The_Wise_Oak", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvVGhlV2lzZU9hayIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MX1d/80a47134d5/TheWiseOak.png", baseType: "灰岩药剂" }, { name: "赤影梦境 赤红珠宝", href: "https://poedb.tw/cn/The_Red_Dream", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RoZVJlZERyZWFtIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/5fc736ec75/TheRedDream.png", limit: "「夏乌拉之域」限定掉落\n「精华」联盟限定\n使用 夏乌拉的祝福 升级 赤影梦魇", baseType: "赤红珠宝" }, { name: "沃拉娜的准备 坚铁药剂", href: "https://poedb.tw/cn/Voranas_Preparation", icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQWRhcHRhdGlvbkZsYXNrMDMiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/f67d3bf6f2/AdaptationFlask03.png", limit: "「坚持到底的沃拉娜」限定掉落\n「先祖秘藏」联盟限定", baseType: "坚铁药剂" }, { name: "温柔之力 赤红珠宝", href: "https://poedb.tw/cn/Might_of_the_Meek", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1BvdGVuY3lPZlRoZVVucmVtYXJrYWJsZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/10117c9173/PotencyOfTheUnremarkable.png", baseType: "赤红珠宝" }, { name: "阿华纳之牙 鲨齿箭袋", href: "https://poedb.tw/cn/Ahuanas_Bite", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9BaHVhbmFRdWl2ZXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4cc0ef813d/AhuanaQuiver.png", baseType: "鲨齿箭袋" }, { name: "血肉分崩 赤红珠宝", href: "https://poedb.tw/cn/Dissolution_of_the_Flesh", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1Jlc2VydmVkQmxvb2RKZXdlbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/1a4688f335/ReservedBloodJewel.png", limit: "「灼督」限定掉落", baseType: "赤红珠宝" }, { name: "永恒之力 赤红珠宝", href: "https://poedb.tw/cn/Immutable_Force", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JlZEpld2VsMiIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/87ba4f5e53/RedJewel2.png", baseType: "赤红珠宝" }, { name: "起源力量【仿品】 赤红珠宝", href: "https://poedb.tw/cn/Replica_Primordial_Might", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dvbGVtSW5mZXJuYWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/a50b1917f5/GolemInfernal.png", baseType: "赤红珠宝" }, { name: "灵魂打击【仿品】 刺锋箭袋", href: "https://poedb.tw/cn/Replica_Soul_Strike", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9Tb3Vsc3RyaWtlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/ecea242a12/Soulstrike.png", baseType: "刺锋箭袋" }, { name: "希望之线 赤红珠宝", href: "https://poedb.tw/cn/Thread_of_Hope", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0Nvbm5lY3RlZEpld2VsIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/1d2c1f698a/ConnectedJewel.png", limit: "「诸界觉者希鲁斯」限定掉落", baseType: "赤红珠宝" }, { name: "流畅行动 翠绿珠宝", href: "https://poedb.tw/cn/Fluid_Motion", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1NUUnRvREVYIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/f5a4ea844d/STRtoDEX.png", baseType: "翠绿珠宝" }, { name: "浮华 赤红珠宝", href: "https://poedb.tw/cn/The_Adorned", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RyaWFsbWFzdGVySmV3IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/f04386d454/TrialmasterJew.png", baseType: "赤红珠宝" }, { name: "血痕 赤红珠宝", href: "https://poedb.tw/cn/Bloodnotch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0lnbm9yZVBhaW4iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/191f378925/IgnorePain.png", baseType: "赤红珠宝" }, { name: "狮眼的陨落 翠绿珠宝", href: "https://poedb.tw/cn/Lioneyes_Fall", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0xpb25leWVzRmFsbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/164c5c1080/LioneyesFall.png", baseType: "翠绿珠宝" }, { name: "和平主义 翠绿珠宝", href: "https://poedb.tw/cn/Pacifism", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dyZWVuQ29ycnVwdDYiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/1b1c1912b2/GreenCorrupt6.png", baseType: "翠绿珠宝" }, { name: "帝王的诡计 翠绿珠宝", href: "https://poedb.tw/cn/Emperors_Cunning", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0N1bm5pbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/4b5d857ef3/Cunning.png", limit: "「Labyrinth Chest」限定掉落", baseType: "翠绿珠宝" }, { name: "魔蝎的呼唤 重矢箭袋", href: "https://poedb.tw/cn/Scorpions_Call", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9CbG9vZFNhbmRRdWl2ZXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/57b1387b43/BloodSandQuiver.png", baseType: "重矢箭袋" }, { name: "直觉之跃 翠绿珠宝", href: "https://poedb.tw/cn/Intuitive_Leap", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL3VuaXF1ZTYiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/f2dc5c37a5/unique6.png", baseType: "翠绿珠宝" }, { name: "青影梦境 翠绿珠宝", href: "https://poedb.tw/cn/The_Green_Dream", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RoZUdyZWVuRHJlYW0iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/1a25683711/TheGreenDream.png", limit: "「夏乌拉之域」限定掉落\n「精华」联盟限定\n使用 夏乌拉的祝福 升级 青影梦魇", baseType: "翠绿珠宝" }, { name: "黄金法则 翠绿珠宝", href: "https://poedb.tw/cn/The_Golden_Rule", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RoZUdvbGRlblJ1bGUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/3c5f6382fc/TheGoldenRule.png", baseType: "翠绿珠宝" }, { name: "赤影梦魇 赤红珠宝", href: "https://poedb.tw/cn/The_Red_Nightmare", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RoZVJlZERyZWFtVXBncmFkZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/69a20aa6e0/TheRedDreamUpgrade.png", limit: "「精华」联盟限定\n赤影梦境 使用 夏乌拉的祝福 升级", baseType: "赤红珠宝" }, { name: "帝王的霸权 赤红珠宝", href: "https://poedb.tw/cn/Emperors_Might", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL01pZ2h0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d1507b1ec4/Might.png", limit: "「Labyrinth Chest」限定掉落", baseType: "赤红珠宝" }, { name: "加速誓约 翠绿珠宝", href: "https://poedb.tw/cn/Quickening_Covenant", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL3VuaXF1ZTEwIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/46d92a634d/unique10.png", baseType: "翠绿珠宝" }, { name: "超自然本能 翠绿珠宝", href: "https://poedb.tw/cn/Unnatural_Instinct", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1VubmF0dXJhbEluc3RpbmN0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/c37fa5c2b6/UnnaturalInstinct.png", baseType: "翠绿珠宝" }, { name: "先祖的远视 翠绿珠宝", href: "https://poedb.tw/cn/Ancestral_Vision", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1ByaXN0aW5lQ29uZGl0aW9uaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/5ad58d3a2e/PristineConditioning.png", baseType: "翠绿珠宝" }, { name: "尘埃落定 钴蓝珠宝", href: "https://poedb.tw/cn/To_Dust", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL3VuaXF1ZTgiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/50417e8914/unique8.png", baseType: "钴蓝珠宝" }, { name: "升华之躯 赤红珠宝", href: "https://poedb.tw/cn/Transcendent_Flesh", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RyYW5zY2VuZGVudFJlZCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/7dcf8933ad/TranscendentRed.png", limit: "「穿越」联盟限定\n淬火之躯 使用 超越魔瓶 升级", baseType: "赤红珠宝" }, { name: "丰富心灵 钴蓝珠宝", href: "https://poedb.tw/cn/Fertile_Mind", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0RFWHRvSU5UIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/b363fdbd52/DEXtoINT.png", baseType: "钴蓝珠宝" }, { name: "灵体转换 钴蓝珠宝", href: "https://poedb.tw/cn/Healthy_Mind", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0JsdWVKZXdlbDciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/73584bc29e/BlueJewel7.png", baseType: "钴蓝珠宝" }, { name: "人格分裂 赤红珠宝", href: "https://poedb.tw/cn/Split_Personality", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1VuaXF1ZUpld2VsQmFzZTEiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/166fecc863/UniqueJewelBase1.png", limit: "「梦魇拟像」限定掉落\n「惊悸迷雾」联盟限定", baseType: "赤红珠宝" }, { name: "淬火之躯 赤红珠宝", href: "https://poedb.tw/cn/Tempered_Flesh", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RlbXBlcmVkUmVkIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/66e750a720/TemperedRed.png", limit: "「瓦尔妖塔」限定掉落\n「穿越」联盟限定\n使用 超越魔瓶 升级 升华之躯", baseType: "赤红珠宝" }, { name: "烈火之歌 赤红珠宝", href: "https://poedb.tw/cn/Firesong", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JlZEpld2VsNyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/dd6b13c77c/RedJewel7.png", baseType: "赤红珠宝" }, { name: "战斗专注 赤红珠宝", href: "https://poedb.tw/cn/Combat_Focus", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0VsZW1lbnRhbEhpdExpZ2h0ZW5pbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e913bb8301/ElementalHitLightening.png", baseType: "赤红珠宝" }, { name: "潜能防护 钴蓝珠宝", href: "https://poedb.tw/cn/Energy_From_Within", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0JsdWVKZXdlbDYiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/43c313a2c4/BlueJewel6.png", baseType: "钴蓝珠宝" }, { name: "鲁莽防御 钴蓝珠宝", href: "https://poedb.tw/cn/Reckless_Defence", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JlY2tsZXNzRGVmZW5zZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/923e6cb6b5/RecklessDefense.png", baseType: "钴蓝珠宝" }, { name: "无尽渴望 钴蓝珠宝", href: "https://poedb.tw/cn/Unending_Hunger", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1NwZWN0cmVKZXdlbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/4e2d72df55/SpectreJewel.png", baseType: "钴蓝珠宝" }, { name: "禁断之火 赤红珠宝", href: "https://poedb.tw/cn/Forbidden_Flame", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1B1enpsZVBpZWNlSmV3ZWxfQ2xlYW5zaW5nRmlyZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ddfe57ac90/PuzzlePieceJewel_CleansingFire.png", limit: "「灼督」限定掉落", baseType: "赤红珠宝" }, { name: "战士的史诗 赤红珠宝", href: "https://poedb.tw/cn/Warriors_Tale", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0hpbmVrb3JhSmV3ZWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/50c0f1161a/HinekoraJewel.png", limit: "「Ancestor Tournament」限定掉落", baseType: "赤红珠宝" }, { name: "帝王的智慧 钴蓝珠宝", href: "https://poedb.tw/cn/Emperors_Wit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1dpdCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/bc537c241b/Wit.png", limit: "「Labyrinth Chest」限定掉落", baseType: "钴蓝珠宝" }, { name: "残虐之欢愉 翠绿珠宝", href: "https://poedb.tw/cn/Self-Flagellation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dyZWVuQ29ycnVwdDUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6aa93279b6/GreenCorrupt5.png", baseType: "翠绿珠宝" }, { name: "审慎计划 翠绿珠宝", href: "https://poedb.tw/cn/Careful_Planning", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0lOVHRvREVYIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/e30df474e0/INTtoDEX.png", baseType: "翠绿珠宝" }, { name: "要塞誓约 钴蓝珠宝", href: "https://poedb.tw/cn/Fortress_Covenant", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0JsdWVKZXdlbDQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/5801f4441d/BlueJewel4.png", baseType: "钴蓝珠宝" }, { name: "深藏的潜能 翠绿珠宝", href: "https://poedb.tw/cn/Hidden_Potential", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL3VuaXF1ZTE3IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/c445828c50/unique17.png", baseType: "翠绿珠宝" }, { name: "升华之心 钴蓝珠宝", href: "https://poedb.tw/cn/Transcendent_Mind", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RyYW5zY2VuZGVudEJsdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d02c69b7dc/TranscendentBlue.png", limit: "「穿越」联盟限定\n淬火之心 使用 超越魔瓶 升级", baseType: "钴蓝珠宝" }, { name: "鲁莽防御【仿品】 钴蓝珠宝", href: "https://poedb.tw/cn/Replica_Reckless_Defence", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JlY2tsZXNzRGVmZW5zZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/923e6cb6b5/RecklessDefense.png", baseType: "钴蓝珠宝" }, { name: "青影梦魇 翠绿珠宝", href: "https://poedb.tw/cn/The_Green_Nightmare", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RoZUdyZWVuRHJlYW1VcGdyYWRlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/2a2234606a/TheGreenDreamUpgrade.png", limit: "「精华」联盟限定\n青影梦境 使用 夏乌拉的祝福 升级", baseType: "翠绿珠宝" }, { name: "腐化寒息 翠绿珠宝", href: "https://poedb.tw/cn/Chill_of_Corruption", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dyZWVuQ29ycnVwdDIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/567ed38e5d/GreenCorrupt2.png", baseType: "翠绿珠宝" }, { name: "起源卓越 翠绿珠宝", href: "https://poedb.tw/cn/Primordial_Eminence", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dvbGVtQXJjdGljIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/8461900064/GolemArctic.png", baseType: "翠绿珠宝" }, { name: "女巫克星 钴蓝珠宝", href: "https://poedb.tw/cn/Witchbane", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL3VuaXF1ZTEzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/9cc73bdf26/unique13.png", baseType: "钴蓝珠宝" }, { name: "淬火之魂 翠绿珠宝", href: "https://poedb.tw/cn/Tempered_Spirit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RlbXBlcmVkR3JlZW4iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/29ecf43831/TemperedGreen.png", limit: "「瓦尔妖塔」限定掉落\n「穿越」联盟限定\n使用 超越魔瓶 升级 升华之魂", baseType: "翠绿珠宝" }, { name: "低谷状态 钴蓝珠宝", href: "https://poedb.tw/cn/Nadir_Mode", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0ludGVuc2l0eUpld2VsMiIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/dd6952365a/IntensityJewel2.png", limit: "「契约：牢不可破」限定掉落\n「夺宝奇兵」联盟限定", baseType: "钴蓝珠宝" }, { name: "理性主义 钴蓝珠宝", href: "https://poedb.tw/cn/Rational_Doctrine", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1ViZXJDb3J0ZXhKZXdlbCIsInciOjEsImgiOjEsInNjYWxlIjoxLCJzeW50aGVzaXNlZCI6dHJ1ZX1d/75a97b9ff9/UberCortexJewel.png", limit: "「Uber Venarius」限定掉落", baseType: "钴蓝珠宝" }, { name: "纯才 翠绿珠宝", href: "https://poedb.tw/cn/Pure_Talent", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1B1cmVUYWxlbnQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/64b53e536e/PureTalent.png", baseType: "翠绿珠宝" }, { name: "禁断之肉 钴蓝珠宝", href: "https://poedb.tw/cn/Forbidden_Flesh", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1B1enpsZVBpZWNlSmV3ZWxfR3JlYXRUYW5nbGUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/9035b9ffd4/PuzzlePieceJewel_GreatTangle.png", limit: "「世界吞噬者」限定掉落", baseType: "钴蓝珠宝" }, { name: "怒火中烧 翠绿珠宝", href: "https://poedb.tw/cn/Seething_Fury", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1NwZWN0cmFsVGhyb3dUaHJlc2hvbGQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6de1cd92c9/SpectralThrowThreshold.png", baseType: "翠绿珠宝" }, { name: "升华之魂 翠绿珠宝", href: "https://poedb.tw/cn/Transcendent_Spirit", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RyYW5zY2VuZGVudEdyZWVuIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/6eb091ee7a/TranscendentGreen.png", limit: "「穿越」联盟限定\n淬火之魂 使用 超越魔瓶 升级", baseType: "翠绿珠宝" }, { name: "特克罗的凝视 凶残之凝珠宝", href: "https://poedb.tw/cn/Tecrods_Gaze", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL011cmRlcm91c0V5ZVVuaXF1ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/f54f211029/MurderousEyeUnique.png", limit: "「Abyss Lich」限定掉落\n「深渊」联盟限定", baseType: "凶残之凝珠宝" }, { name: "崇高愿景 三相珠宝", href: "https://poedb.tw/cn/Sublime_Vision", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1N1YmxpbWVWaXNpb24iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVsaWMiOjYsInNoYXBlciI6dHJ1ZX1d/4b478cc9ff/SublimeVision.png", limit: "「Uber The Shaper」限定掉落", baseType: "三相珠宝" }, { name: "暴风遮罩 翠绿珠宝", href: "https://poedb.tw/cn/Stormshroud", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dyZWVuSmV3ZWwyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/75f171fff6/GreenJewel2.png", baseType: "翠绿珠宝" }, { name: "薛乌勒曼的凝视 锐利之凝珠宝", href: "https://poedb.tw/cn/Ulamans_Gaze", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1NlYXJjaGluZ0V5ZVVuaXF1ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/fd2beeb2ad/SearchingEyeUnique.png", limit: "「Abyss Lich」限定掉落\n「深渊」联盟限定", baseType: "锐利之凝珠宝" }, { name: "无所遁形 翠绿珠宝", href: "https://poedb.tw/cn/Impossible_Escape", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL01pbmRib3JlUGVhcmwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/367683a1bb/MindborePearl.png", limit: "「贤主」限定掉落", baseType: "翠绿珠宝" }, { name: "光彩夺目 永恒珠宝", href: "https://poedb.tw/cn/Glorious_Vanity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1ZhYWxDaXZpbGl6YXRpb24iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/568c0e7c98/VaalCivilization.png", baseType: "永恒珠宝" }, { name: "蛮力冲撞 钴蓝珠宝", href: "https://poedb.tw/cn/Brute_Force_Solution", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1NUUnRvSU5UIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d8b66f795b/STRtoINT.png", baseType: "钴蓝珠宝" }, { name: "自然之喜 小型星团珠宝", href: "https://poedb.tw/cn/Natural_Affinity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL05hdHVyZXNQYXRpZW5jZUpld2VsIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/1f4e80dd70/NaturesPatienceJewel.png", limit: "「惊悸迷雾」联盟限定", baseType: "小型星团珠宝" }, { name: "守望之眼 三相珠宝", href: "https://poedb.tw/cn/Watchers_Eye", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0VsZGVySmV3ZWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/278c673716/ElderJewel.png", limit: "「裂界者」限定掉落", baseType: "三相珠宝" }, { name: "前线 小型星团珠宝", href: "https://poedb.tw/cn/The_Front_Line", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1ZldGVyYW4nc0F3YXJlbmVzc0pld2VsIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/7912a0c702/Veteran%27sAwarenessJewel.png", limit: "「惊悸迷雾」联盟限定", baseType: "小型星团珠宝" }, { name: "狂热之心 钴蓝珠宝", href: "https://poedb.tw/cn/Fevered_Mind", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0JsdWVDb3JydXB0NCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ad8d514185/BlueCorrupt4.png", baseType: "钴蓝珠宝" }, { name: "审讯 小型星团珠宝", href: "https://poedb.tw/cn/The_Interrogation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1NlY3JldHNPZkFnb255SmV3ZWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/fbc829657e/SecretsOfAgonyJewel.png", limit: "「惊悸迷雾」联盟限定", baseType: "小型星团珠宝" }, { name: "徒手空拳 小型星团珠宝", href: "https://poedb.tw/cn/One_With_Nothing", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0RyYWdvblN0eWxlSmV3ZWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/fa9a94b12e/DragonStyleJewel.png", limit: "「惊悸迷雾」联盟限定", baseType: "小型星团珠宝" }, { name: "灾祸异象 小型星团珠宝", href: "https://poedb.tw/cn/Calamitous_Visions", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0xvbmVNZXNzZW5nZXJKZXdlbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/46f8de709e/LoneMessengerJewel.png", limit: "「惊悸迷雾」联盟限定", baseType: "小型星团珠宝" }, { name: "无力 钴蓝珠宝", href: "https://poedb.tw/cn/Powerlessness", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0JsdWVDb3JydXB0NiIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/281293a0c5/BlueCorrupt6.png", baseType: "钴蓝珠宝" }, { name: "奇塔弗的指教 小型星团珠宝", href: "https://poedb.tw/cn/Kitavas_Teachings", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0Rpc2NpcGxlT2ZLaXRhdmFKZXdlbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/43d818445c/DiscipleOfKitavaJewel.png", limit: "「惊悸迷雾」联盟限定", baseType: "小型星团珠宝" }, { name: "致命的骄傲 永恒珠宝", href: "https://poedb.tw/cn/Lethal_Pride", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0thcnVpQ2l2aWxpemF0aW9uIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/04aefd20e6/KaruiCivilization.png", baseType: "永恒珠宝" }, { name: "起源和谐 钴蓝珠宝", href: "https://poedb.tw/cn/Primordial_Harmony", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dvbGVtVGVtcGVzdCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/aac7579ae7/GolemTempest.png", baseType: "钴蓝珠宝" }, { name: "死亡清算 钴蓝珠宝", href: "https://poedb.tw/cn/Dead_Reckoning", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0FkZGl0aW9uYWxTa2VsZXRvbk1hZ2VzTW9kaWZpZXIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/64b5aa8a03/AdditionalSkeletonMagesModifier.png", baseType: "钴蓝珠宝" }, { name: "优雅的狂妄 永恒珠宝", href: "https://poedb.tw/cn/Elegant_Hubris", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0V0ZXJuYWxFbXBpcmVDaXZpbGl6YXRpb24iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8d1d098584/EternalEmpireCivilization.png", baseType: "永恒珠宝" }, { name: "碧影梦境 钴蓝珠宝", href: "https://poedb.tw/cn/The_Blue_Dream", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RoZUJsdWVEcmVhbSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/1cb1c74958/TheBlueDream.png", limit: "「夏乌拉之域」限定掉落\n「精华」联盟限定\n使用 夏乌拉的祝福 升级 碧影梦魇", baseType: "钴蓝珠宝" }, { name: "帝王的纯熟 三相珠宝", href: "https://poedb.tw/cn/Emperors_Mastery", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL01hc3RlcnkiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/eb1cf5699e/Mastery.png", limit: "「Labyrinth Chest」限定掉落", baseType: "三相珠宝" }, { name: "魔诅之域 晨曦墓地", href: "https://poedb.tw/cn/Hallowed_Ground", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9IYWxsb3dlZEdyb3VuZCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/0dfbdc7da9/HallowedGround.png", baseType: "晨曦墓地" }, { name: "碧影梦魇 钴蓝珠宝", href: "https://poedb.tw/cn/The_Blue_Nightmare", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RoZUJsdWVEcmVhbVVwZ3JhZGUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e2474acca0/TheBlueDreamUpgrade.png", limit: "「精华」联盟限定\n碧影梦境 使用 夏乌拉的祝福 升级", baseType: "钴蓝珠宝" }, { name: "多利亚尼的迷城 冥神之域", href: "https://poedb.tw/cn/Doryanis_Machinarium", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Eb3J5YW5pcyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/581444be53/Doryanis.png", limit: "「盲目者亚华托提利」限定掉落\n「地心」联盟限定", baseType: "冥神之域" }, { name: "好战的信仰 永恒珠宝", href: "https://poedb.tw/cn/Militant_Faith", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RlbXBsYXJDaXZpbGl6YXRpb24iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/09ecf8ac86/TemplarCivilization.png", baseType: "永恒珠宝" }, { name: "残酷的约束 永恒珠宝", href: "https://poedb.tw/cn/Brutal_Restraint", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL01hcmFrZXRoQ2l2aWxpemF0aW9uIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/8e18d378b4/MarakethCivilization.png", baseType: "永恒珠宝" }, { name: "淬火之心 钴蓝珠宝", href: "https://poedb.tw/cn/Tempered_Mind", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1RlbXBlcmVkQmx1ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/995f6d4810/TemperedBlue.png", limit: "「瓦尔妖塔」限定掉落\n「穿越」联盟限定\n使用 超越魔瓶 升级 升华之心", baseType: "钴蓝珠宝" }, { name: "妄想症 中型星团珠宝", href: "https://poedb.tw/cn/Megalomaniac", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1VuaXF1ZUpld2VsQmFzZTIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVsaWMiOjF9XQ/6a250ab82e/UniqueJewelBase2.png", limit: "「梦魇拟像」限定掉落\n「惊悸迷雾」联盟限定", baseType: "中型星团珠宝" }, { name: "血肉融合 钴蓝珠宝", href: "https://poedb.tw/cn/Melding_of_the_Flesh", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0VudGFuZ2xlZEVsZW1lbnRzSmV3ZWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/781ab651c4/EntangledElementsJewel.png", limit: "「世界吞噬者」限定掉落", baseType: "钴蓝珠宝" }, { name: "禁闭祭坛 致命岩滩", href: "https://poedb.tw/cn/Whakawairua_Tuahu", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9VbmlxdWVNYXBFeWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/7c20a66814/UniqueMapEye.png", baseType: "致命岩滩" }, { name: "欧霸的咒怨宝库 滨海幽穴", href: "https://poedb.tw/cn/Obas_Cursed_Trove", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9vYmEiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/c94e09c1a8/oba.png", baseType: "滨海幽穴" }, { name: "混沌之渊 滨海山丘", href: "https://poedb.tw/cn/Maelstr%C3%B6m_of_Chaos", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9NYWVsc3Ryb21vZkNoYW9zIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/7772c4e971/MaelstromofChaos.png", baseType: "滨海山丘" }, { name: "暮光古庙 月影神殿", href: "https://poedb.tw/cn/The_Twilight_Temple", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9DZWxlc3RpYWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/2b43e37784/Celestial.png", baseType: "月影神殿" }, { name: "阿尔伦神柱 暮色沙丘", href: "https://poedb.tw/cn/Pillars_of_Arun", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9QaWxsYXJzT2ZWYXN0aXJpIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/f030aac473/PillarsOfVastiri.png", baseType: "暮色沙丘" }, { name: "阿尔伦神柱【仿品】 暮色沙丘", href: "https://poedb.tw/cn/Replica_Pillars_of_Arun", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9QaWxsYXJzT2ZWYXN0aXJpIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/f030aac473/PillarsOfVastiri.png", baseType: "暮色沙丘" }, { name: "改变的遥远回忆 幻境地图", href: "https://poedb.tw/cn/Altered_Distant_Memory", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9TeW50aGVzaXNDb2xkR3VhcmRpYW5NYXAiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/5800fc91db/SynthesisColdGuardianMap.png", limit: "「奇拉克」限定掉落\n「虚空忆境」联盟限定", baseType: "幻境地图" }, { name: "恐惧之平衡 钴蓝珠宝", href: "https://poedb.tw/cn/The_Balance_of_Terror", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL3VuaXF1ZTE5IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/72dbd8bd3d/unique19.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "钴蓝珠宝" }, { name: "远古之印 古石陵墓", href: "https://poedb.tw/cn/Olmecs_Sanctum", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9vbG1lYyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/844fea2e54/olmec.png", baseType: "古石陵墓" }, { name: "聚魂石 三相珠宝", href: "https://poedb.tw/cn/The_Anima_Stone", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dvbGVtQ2hhb3MiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/2daa0c1149/GolemChaos.png", limit: "「Vendor recipe system」限定掉落", baseType: "三相珠宝" }, { name: "巅峰状态 钴蓝珠宝", href: "https://poedb.tw/cn/Apex_Mode", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0ludGVuc2l0eUpld2VsMSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/2b116c20d2/IntensityJewel1.png", limit: "「契约：牢不可破」限定掉落\n「夺宝奇兵」联盟限定", baseType: "钴蓝珠宝" }, { name: "库加尔的凝视 安睡之凝珠宝", href: "https://poedb.tw/cn/Kurgals_Gaze", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0h5cG5vdGljRXllVW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/f909ca8b69/HypnoticEyeUnique.png", limit: "「Abyss Lich」限定掉落\n「深渊」联盟限定", baseType: "安睡之凝珠宝" }, { name: "懦者的试验 咒怨陵墓", href: "https://poedb.tw/cn/The_Cowards_Trial", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9VbmRlYWRTaWVnZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/53f1dbdcb4/UndeadSiege.png", baseType: "咒怨陵墓" }, { name: "亡者之财 魔影墓场", href: "https://poedb.tw/cn/Death_and_Taxes", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9EZWF0aGFuZFRheGVzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/0cc72adc19/DeathandTaxes.png", baseType: "魔影墓场" }, { name: "轮回的梦魇 密草神殿", href: "https://poedb.tw/cn/Actons_Nightmare", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9tdXNpY2JveCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/765ebfd00f/musicbox.png", baseType: "密草神殿" }, { name: "Victorious Fate 瓦尔之相", href: "https://poedb.tw/cn/Victorious_Fate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9UcmlhbG1hc3RlckxlZnRGcmFnbWVudCIsInciOjEsImgiOjIsInNjYWxlIjoxfV0/ec9e7257ef/TrialmasterLeftFragment.png", baseType: "" }, { name: "埃曼纳姆的凝视 苍白之凝珠宝", href: "https://poedb.tw/cn/Amanamus_Gaze", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0doYXN0bHlFeWVVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/301d98e6cb/GhastlyEyeUnique.png", limit: "「Abyss Lich」限定掉落\n「深渊」联盟限定", baseType: "苍白之凝珠宝" }, { name: "Deadly End 瓦尔之相", href: "https://poedb.tw/cn/Deadly_End", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9UcmlhbG1hc3RlckJvdHRvbUZyYWdtZW50IiwidyI6MywiaCI6MSwic2NhbGUiOjF9XQ/78cddd2ad4/TrialmasterBottomFragment.png", baseType: "" }, { name: "Will of Chaos 瓦尔之相", href: "https://poedb.tw/cn/Will_of_Chaos", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9UcmlhbG1hc3Rlck1pZGRsZUZyYWdtZW50IiwidyI6MSwiaCI6Miwic2NhbGUiOjF9XQ/ce938362fd/TrialmasterMiddleFragment.png", baseType: "" }, { name: "天神之音 大型星团珠宝", href: "https://poedb.tw/cn/Voices", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1VuaXF1ZUpld2VsQmFzZTMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/314c9905c8/UniqueJewelBase3.png", limit: "「梦魇拟像」限定掉落\n「惊悸迷雾」联盟限定", baseType: "大型星团珠宝" }, { name: "契约：贩奴之王 义警契约", href: "https://poedb.tw/cn/Contract%3A_The_Slaver_King", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSGVpc3QvU2xhdmVNZXJjaGFudEZpZ2h0Q29udHJhY3QiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/05c788361c/SlaveMerchantFightContract.png", baseType: "义警契约" }, { name: "幽秘博物馆 古博物馆", href: "https://poedb.tw/cn/The_Putrid_Cloister", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9QdXRyaWRDbG9pc3RlciIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/4113992f12/PutridCloister.png", baseType: "古博物馆" }, { name: "Ignominious Fate 瓦尔之相", href: "https://poedb.tw/cn/Ignominious_Fate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9UcmlhbG1hc3RlclJpZ2h0RnJhZ21lbnQiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MX1d/923a1f4d20/TrialmasterRightFragment.png", baseType: "" }, { name: "纯净之血 香炉遗物", href: "https://poedb.tw/cn/The_Blood_of_Innocence", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmVsaWNzL0NvcmVSZWxpY1VuaXF1ZTF4MiIsInciOjEsImgiOjIsInNjYWxlIjoxfV0/a9230e3b96/CoreRelicUnique1x2.png", baseType: "香炉遗物" }, { name: "重著的遥远回忆 幻境地图", href: "https://poedb.tw/cn/Rewritten_Distant_Memory", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9TeW50aGVzaXNHb2xlbUd1YXJkaWFuTWFwIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/f4fd693221/SynthesisGolemGuardianMap.png", limit: "「奇拉克」限定掉落\n「虚空忆境」联盟限定", baseType: "幻境地图" }, { name: "沉沦之间 夺魂之殿", href: "https://poedb.tw/cn/Poorjoys_Asylum", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Qb29yam95c0FzeWx1bSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/d7e9aba922/PoorjoysAsylum.png", baseType: "夺魂之殿" }, { name: "围攻 小型星团珠宝", href: "https://poedb.tw/cn/The_Siege", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0tpbmV0aWNpc21KZXdlbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/d748a39b2e/KineticismJewel.png", limit: "「惊悸迷雾」联盟限定", baseType: "小型星团珠宝" }, { name: "苦刑之链 圣歌遗物", href: "https://poedb.tw/cn/The_Chains_of_Castigation", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmVsaWNzL0NvcmVSZWxpY1VuaXF1ZTF4MyIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/0640b266e6/CoreRelicUnique1x3.png", baseType: "圣歌遗物" }, { name: "脑层【仿品】 幻境地图", href: "https://poedb.tw/cn/Replica_Cortex", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9TeW50aGVzaXNCb3NzR3VhcmRpYW5NYXAiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/542f2635c7/SynthesisBossGuardianMap.png", baseType: "幻境地图" }, { name: "神圣之刻 香炉遗物", href: "https://poedb.tw/cn/The_Hour_of_Divinity", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmVsaWNzL1JlbGljVW5pcXVlMXgyIiwidyI6MSwiaCI6Miwic2NhbGUiOjF9XQ/f39ebcc337/RelicUnique1x2.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "香炉遗物" }, { name: "镀金圣杯 圣歌遗物", href: "https://poedb.tw/cn/The_Gilded_Chalice", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmVsaWNzL1JlbGljVW5pcXVlMXgzIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/7a0ff8a041/RelicUnique1x3.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "圣歌遗物" }, { name: "第二圣誓 烛台遗物", href: "https://poedb.tw/cn/The_Second_Sacrament", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmVsaWNzL1JlbGljVW5pcXVlMXg0IiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/adaa7ec07c/RelicUnique1x4.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "烛台遗物" }, { name: "降临之地 先驱者地图", href: "https://poedb.tw/cn/The_Beachhead", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9IYXJiaW5nZXJZZWxsb3ciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e98c7f846e/HarbingerYellow.png", limit: "「先驱」联盟限定", baseType: "先驱者地图" }, { name: "阿兹里的秘宝库 瓦尔金字塔", href: "https://poedb.tw/cn/Vaults_of_Atziri", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9VbmlxdWVNYXAxIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/7612528d07/UniqueMap1.png", baseType: "瓦尔金字塔" }, { name: "残破香炉 典籍遗物", href: "https://poedb.tw/cn/The_Broken_Censer", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmVsaWNzL1JlbGljVW5pcXVlM3gxIiwidyI6MywiaCI6MSwic2NhbGUiOjF9XQ/97c059a9f1/RelicUnique3x1.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "典籍遗物" }, { name: "维克塔广场 奇术之庭", href: "https://poedb.tw/cn/The_Vinktar_Square", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9UaGVWaW5rdGFyU3F1YXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d26b82ca56/TheVinktarSquare.png", baseType: "奇术之庭" }, { name: "原初经书 纸草遗物", href: "https://poedb.tw/cn/The_Original_Scripture", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmVsaWNzL1JlbGljVW5pcXVlNHgxIiwidyI6NCwiaCI6MSwic2NhbGUiOjF9XQ/e6e8bfb6e4/RelicUnique4x1.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "纸草遗物" }, { name: "沉沦之间【仿品】 夺魂之殿", href: "https://poedb.tw/cn/Replica_Poorjoys_Asylum", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Qb29yam95c0FzeWx1bSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/d7e9aba922/PoorjoysAsylum.png", baseType: "夺魂之殿" }, { name: "塞尔.布雷德狼穴 地底之河", href: "https://poedb.tw/cn/Caer_Blaidd%2C_Wolfpacks_Den", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9Xb2xmTWFwIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/db94bff258/WolfMap.png", baseType: "地底之河" }, { name: "贼窝 暮光海滩", href: "https://poedb.tw/cn/Mao_Kun", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9GYWlyZ3JhdmVzTWFwMDEiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1c1de7d51/FairgravesMap01.png", baseType: "暮光海滩" }, { name: "契约：达诺的覆灭 海军契约", href: "https://poedb.tw/cn/Contract%3A_Death_to_Darnaw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSGVpc3QvQWRtaXJhbERhcm5hd0ZpZ2h0Q29udHJhY3QiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d3d9bf5da6/AdmiralDarnawFightContract.png", baseType: "海军契约" }, { name: "脑层 幻境地图", href: "https://poedb.tw/cn/Cortex", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9TeW50aGVzaXNCb3NzR3VhcmRpYW5NYXAiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/542f2635c7/SynthesisBossGuardianMap.png", limit: "「奇拉克」限定掉落\n「虚空忆境」联盟限定", baseType: "幻境地图" }, { name: "扭曲的遥远回忆 幻境地图", href: "https://poedb.tw/cn/Twisted_Distant_Memory", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9TeW50aGVzaXNMaWdodG5pbmdHdWFyZGlhbk1hcCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/30f4dc76de/SynthesisLightningGuardianMap.png", limit: "「奇拉克」限定掉落\n「虚空忆境」联盟限定", baseType: "幻境地图" }, { name: "增强的遥远回忆 幻境地图", href: "https://poedb.tw/cn/Augmented_Distant_Memory", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9TeW50aGVzaXNGaXJlR3VhcmRpYW5NYXAiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/924cb164d0/SynthesisFireGuardianMap.png", limit: "「奇拉克」限定掉落\n「虚空忆境」联盟限定", baseType: "幻境地图" }, { name: "元帅殿堂 月色回廊", href: "https://poedb.tw/cn/Hall_of_Grandmasters", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9IYWxsT2ZHcmFuZG1hc3RlcnMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/73778c0f28/HallOfGrandmasters.png", baseType: "月色回廊" }, { name: "灌注的降临之地 先驱者地图", href: "https://poedb.tw/cn/Infused_Beachhead", icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9IYXJiaW5nZXJVYmVyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/91398360e4/HarbingerUber.png", limit: "「庄园」联盟限定", baseType: "先驱者地图" }, { name: "契约：牢不可破 预防契约", href: "https://poedb.tw/cn/Contract%3A_Breaking_the_Unbreakable", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSGVpc3QvVW5icmVha2FibGVGaWdodENvbnRyYWN0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/4e50a5f0ae/UnbreakableFightContract.png", baseType: "预防契约" }, { name: "契约：罪恶双生 复仇契约", href: "https://poedb.tw/cn/Contract%3A_The_Twins", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSGVpc3QvVm94RmFtaWx5RmlnaHRDb250cmFjdCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/28f9230b0b/VoxFamilyFightContract.png", baseType: "复仇契约" }, { name: "契约：荣誉之心 家族契约", href: "https://poedb.tw/cn/Contract%3A_Heart_of_Glory", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSGVpc3QvVXN1cnBlckZpZ2h0Q29udHJhY3QiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/46d7ba4bf9/UsurperFightContract.png", baseType: "家族契约" }, { name: "初始荣冠 匣柜遗物", href: "https://poedb.tw/cn/The_First_Crest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmVsaWNzL1JlbGljVW5pcXVlMngyIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/15bd9eec94/RelicUnique2x2.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "匣柜遗物" }, { name: "力量与誓言 典籍遗物", href: "https://poedb.tw/cn/The_Power_and_the_Promise", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmVsaWNzL0NvcmVSZWxpY1VuaXF1ZTN4MSIsInciOjMsImgiOjEsInNjYWxlIjoxfV0/b7de2a9095/CoreRelicUnique3x1.png", baseType: "典籍遗物" }, { name: "黑夜明灯 壶瓮遗物", href: "https://poedb.tw/cn/The_Night_Lamp", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmVsaWNzL1JlbGljVW5pcXVlMngxIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/2a6a7e317d/RelicUnique2x1.png", limit: "「天灾先驱利西亚」限定掉落", baseType: "壶瓮遗物" }];
  const _hoisted_1$3 = { class: "unique-cell__icon" };
  const _hoisted_2$3 = ["src"];
  const _hoisted_3$1 = { class: "unique-cell__body" };
  const _hoisted_4$1 = { class: "name" };
  const _hoisted_5 = ["href"];
  const _hoisted_6 = { key: 1 };
  const _hoisted_7 = { class: "limit" };
  const _hoisted_8 = ["innerHTML"];
  const _hoisted_9 = { class: "unique-cell__price" };
  const _hoisted_10 = {
    key: 0,
    class: "empty"
  };
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "UniqueItem",
    props: {
      name: {},
      showPrice: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const priceData = vue.inject(PriceDataKey);
      const current = vue.computed(() => {
        const currentList = UNIQUE_POOL.filter((e) => e.baseType === props.name).map((item) => {
          if (item.limit) {
            item.limit = item.limit.replace(/「/g, "[").replace(/」/g, "] ").trim().replace(/(限定掉落|升级)/g, '<span style="color: #98f1d4">$1</span>');
          }
          if (priceData == null ? void 0 : priceData.value) {
            const data = priceData.value.find((d) => `${d.name} ${d.baseType}` === item.name);
            if (data) {
              item.calculated = !isNaN(Math.floor(data.calculated)) ? Math.floor(data.calculated) : 0;
              item.searchCode = data.searchCode;
            }
          }
          return item;
        });
        return currentList.sort((a, b) => (b.calculated || 0) - (a.calculated || 0));
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "unique-item",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(current.value, (item) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: "unique-cell",
              key: item.name
            }, [
              vue.createElementVNode("div", _hoisted_1$3, [
                vue.createElementVNode("img", {
                  src: item.icon
                }, null, 8, _hoisted_2$3)
              ]),
              vue.createElementVNode("div", _hoisted_3$1, [
                vue.createElementVNode("div", _hoisted_4$1, [
                  item.searchCode ? (vue.openBlock(), vue.createElementBlock("a", {
                    key: 0,
                    href: vue.unref(TRADE_URL) + item.searchCode,
                    target: "_blank",
                    title: "点击跳转市集搜索"
                  }, vue.toDisplayString(item.name), 9, _hoisted_5)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, vue.toDisplayString(item.name), 1))
                ]),
                vue.createElementVNode("div", _hoisted_7, [
                  vue.createElementVNode("div", {
                    innerHTML: item.limit
                  }, null, 8, _hoisted_8)
                ])
              ]),
              vue.createElementVNode("div", _hoisted_9, [
                vue.withDirectives(vue.createElementVNode("span", null, vue.toDisplayString(item.calculated) + " C", 513), [
                  [vue.vShow, item.calculated]
                ])
              ])
            ]);
          }), 128)),
          !current.value || !current.value.length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, "暂无数据")) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const UniqueItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5f4b4871"]]);
  const SCARAB_POOL = [{ "name": "裂隙圣甲虫", "explicitMod": "该区域会出现额外 2 个裂隙" }, { "name": "逐梦者之圣甲虫", "explicitMod": "区域中的裂隙必定属于夏乌拉" }, { "name": "统领之圣甲虫", "explicitMod": "区域内的裂隙有一个裂隙领主" }, { "name": "裂片之圣甲虫", "explicitMod": "区域内的裂隙怪物掉落的裂隙碎片总增 50%<br/>\n区域内的紧握之手掉落的裂隙碎片总增 50%" }, { "name": "诱捕之圣甲虫", "explicitMod": "区域内的裂隙包含 5 - 10个额外的紧握之手<br/>\n区域内的紧握之手由一个稀有裂隙怪物守卫" }, { "name": "Breach Scarab of Resonant Cascade", "explicitMod": "Breaches in Areas open and close 10% faster for each Breach already opened<br/>\nMonsters from Breaches in Areas have increased Difficulty and Reward for<br/>\neach Breach already opened" }, { "name": "制图者圣甲虫", "explicitMod": "区域内发现的异界地图数量提高 50%" }, { "name": "飞升之制图者圣甲虫", "explicitMod": "区域内发现的地图提高一个等阶，最多 16 阶" }, { "name": "奇异之制图者圣甲虫", "explicitMod": "地图最终首领会掉落一张传奇地图" }, { "name": "腐化之制图者圣甲虫", "explicitMod": "区域内找到的非传奇地图被腐化，并具有 8 个词缀" }, { "name": "重复之制图者圣甲虫", "explicitMod": "区域内发现的地图有 30% 的几率被复制" }, { "name": "遗物厅圣甲虫", "explicitMod": "区域内发现的传奇物品数量提高 100%" }, { "name": "霸王之遗物厅圣甲虫", "explicitMod": "区域内的传奇怪物额外掉落一件传奇物品" }, { "name": "幻景之遗物厅圣甲虫", "explicitMod": "区域内有无名先知" }, { "name": "猎魔圣甲虫", "explicitMod": "区域内有伊恩哈尔" }, { "name": "兽群之猎魔圣甲虫", "explicitMod": "区域内若有伊恩哈尔，额外包含 5 个红魔物" }, { "name": "复制之猎魔圣甲虫", "explicitMod": "复制在区域内捕获的魔物" }, { "name": "暮鸦之猎魔圣甲虫", "explicitMod": "区域内若有伊恩哈尔，则包含黑羽之莫丽根" }, { "name": "塑界者之影响圣甲虫", "explicitMod": "为区域添加塑界者影响结果" }, { "name": "裂界者之影响圣甲虫", "explicitMod": "为区域添加裂界者影响结果" }, { "name": "部落之影响圣甲虫", "explicitMod": "区域内受影响的怪物群的规模提高 40%" }, { "name": "转化之影响圣甲虫", "explicitMod": "区域内发现的 14+ 阶地图有几率改为掉落塑界守卫、裂界守卫、征服者或传奇虚空忆境地图" }, { "name": "亚硫酸圣甲虫", "explicitMod": "区域内有尼克" }, { "name": "贪婪之亚硫酸圣甲虫", "explicitMod": "地图拥有者获得的亚硫酸数量提高 150%" }, { "name": "烟尘之亚硫酸圣甲虫", "explicitMod": "区域内的亚硫酸会释放出激怒烟尘<br/>\n受激怒烟尘影响的怪物物品掉落数量增加 500%<br/>\n地图内的亚硫酸由蓝晶矿坑的怪物守卫" }, { "name": "神恩圣甲虫", "explicitMod": "区域内可找到的命运卡数量提高 150%" }, { "name": "精选之神恩圣甲虫", "explicitMod": "每个不同的偏好地图使区域内可找到的命运卡数量总增 10%<br/>\n区域内掉落的命运卡被偏好地图的命运卡所替代" }, { "name": "完满之神恩圣甲虫", "explicitMod": "区域内掉落的命运卡有 20% 的几率改为掉落成套" }, { "name": "苦痛圣甲虫", "explicitMod": "该区域额外被 5 个罪魂纠缠" }, { "name": "怪奇之苦痛圣甲虫", "explicitMod": "区域内罪魂被替换为不寻常的变种" }, { "name": "解脱之苦痛圣甲虫", "explicitMod": "击败区域内被附身的怪物时<br/>\n有 25% 的几率释放罪魂" }, { "name": "Torment Scarab of Possession", "explicitMod": "Rare Monsters in Area have a quarter chance to be Possessed by up to 1 Tormented Spirit" }, { "name": "强袭圣甲虫", "explicitMod": "该区域会出现额外 5 个保险箱" }, { "name": "暗格之强袭圣甲虫", "explicitMod": "区域内保险箱有 15% 的几率可以再次打开" }, { "name": "效能之强袭圣甲虫", "explicitMod": "区域内保险箱的外延词缀效果提高 75%" }, { "name": "收容之强袭圣甲虫", "explicitMod": "区域包含额外的保险箱<br/>\n区域内的住民在其中伏击" }, { "name": "鉴赏之强袭圣甲虫", "explicitMod": "区域内的保险箱更有可能为稀有类型" }, { "name": "先驱圣甲虫", "explicitMod": "该区域会出现额外 3 个先驱者" }, { "name": "鉴赏之先驱圣甲虫", "explicitMod": "区域内的先驱者掉落更稀有的通货碎片<br/>\n区域内的先驱者只掉落一类通货碎片" }, { "name": "代位之先驱圣甲虫", "explicitMod": "区域内的先驱者有 50% 的几率被强大的先驱者首领取代" }, { "name": "战利之先驱圣甲虫", "explicitMod": "区域内的先驱者掉落的通货碎片被复制" }, { "name": "先祖秘藏圣甲虫", "explicitMod": "区域内有一场先祖秘藏遭遇战" }, { "name": "觅符之先祖秘藏圣甲虫", "explicitMod": "区域内的先祖秘藏遭遇战<br/>\n符纹怪物之印的数量提高 100%" }, { "name": "维金之先祖秘藏圣甲虫", "explicitMod": "区域内的先祖秘藏遭遇战爆炸物数量提高 20%<br/>\n爆炸范围提高 80%" }, { "name": "歌人之先祖秘藏圣甲虫", "explicitMod": "区域内的先祖密藏遭遇战由丹宁领导" }, { "name": "考古之先祖秘藏圣甲虫", "explicitMod": "区域内的先祖秘藏遭遇战残骸有 2 个额外的前缀和后缀" }, { "name": "军团圣甲虫", "explicitMod": "该区域会出现 1 场额外的战乱之殇遭遇战" }, { "name": "军官之军团圣甲虫", "explicitMod": "区域内的军团派系有 5 名额外的中士" }, { "name": "号令之军团圣甲虫", "explicitMod": "区域内的军团派系有 1 名将军" }, { "name": "丝克玛之军团圣甲虫", "explicitMod": "区域内的战乱之殇遭遇战必定包含马拉克斯派系" }, { "name": "永战之军团圣甲虫", "explicitMod": "Legion Monsters in Area can be broken out of Stasis multiple times<br/>\nLegion Monsters in Area gain increased Difficulty and Reward for each time they are broken out" }, { "name": "深渊圣甲虫", "explicitMod": "区域内有一个额外的深渊" }, { "name": "结群之深渊圣甲虫", "explicitMod": "区域内深渊产生的怪物提高 75%" }, { "name": "巨构之深渊圣甲虫", "explicitMod": "区域内未通向绝望深渊的深渊会通向深渊之尖<br/>\n区域内的深渊行进时生成储物箱" }, { "name": "空无之深渊圣甲虫", "explicitMod": "区域内的稀有深渊怪物有 50% 的几率<br/>\n额外掉落一件带有深渊插槽的稀有物品" }, { "name": "Abyss Scarab of Profound Depth", "explicitMod": "Monsters from Abysses in Areas have increased Difficulty and Reward for<br/>\neach prior Pit in that Abyss" }, { "name": "混乱圣甲虫", "explicitMod": "区域内有 4 个额外的盗贼流放者" }, { "name": "巨化之混乱圣甲虫", "explicitMod": "区域内的盗贼流放者有 30% 几率的几率被替换为离群巨人" }, { "name": "结伴之混乱圣甲虫", "explicitMod": "区域内的盗贼流放者有 50% 的几率成对出现" }, { "name": "精华圣甲虫", "explicitMod": "区域额外包含 2 个精华" }, { "name": "升格之精华圣甲虫", "explicitMod": "区域内发现的精华提高一个等阶" }, { "name": "稳定之精华圣甲虫", "explicitMod": "在区域内使用遗忘的腐化器皿只会将精华<br/>\n升级或转变" }, { "name": "钙化之精华圣甲虫", "explicitMod": "区域内源生的稀有怪物被精华禁锢" }, { "name": "Essence Scarab of Adaptation", "explicitMod": "Imprisoned Monsters released in Areas grant a random Essence Modifier to another Imprisoned Monster in the Area<br/>\nImprisoned Monsters in Areas have increased Difficulty and Reward for<br/>\neach Essence Modifier" }, { "name": "支配圣甲虫", "explicitMod": "区域内包含 2 个额外的神龛" }, { "name": "反常之支配圣甲虫", "explicitMod": "该区域包含一个额外的罕见神龛" }, { "name": "教导之支配圣甲虫", "explicitMod": "区域内的神龛还会使获得的经验值提高 30%" }, { "name": "惊魂之支配圣甲虫", "explicitMod": "区域内的神龛额外被一个异界首领守卫<br/>\n地图最终首领词缀也对这些异界首领生效" }, { "name": "选择之仪式圣甲虫", "explicitMod": "区域内的驱灵祭坛前 2 次重置恩典没有成本<br/>\n区域内驱灵祭坛可以额外重置 1 次恩典" }, { "name": "认可之仪式圣甲虫", "explicitMod": "在驱灵祭坛击败的传奇敌人提供的贡品总增 200%" }, { "name": "丰沛之仪式圣甲虫", "explicitMod": "区域内的驱灵仪式提供的恩典数量提高 100%" }, { "name": "庄园圣甲虫", "explicitMod": "区域内包含古灵庄园" }, { "name": "倍增之庄园圣甲虫", "explicitMod": "区域内的古灵庄园怪物掉落的命能被复制<br/>\n区域内的古灵庄园怪物的生命总增 100%" }, { "name": "富饶之庄园圣甲虫", "explicitMod": "若区域包含古灵庄园，尽可能额外包含全部类型的 4 级种子各最多 1个" }, { "name": "穿越圣甲虫", "explicitMod": "区域内包含阿尔瓦" }, { "name": "侵入之穿越圣甲虫", "explicitMod": "区域内包含 12-16 个额外的穿越怪物群" }, { "name": "冠军之穿越圣甲虫", "explicitMod": "区域内的时空穿越有 35% 的几率使所有怪物至少为魔法怪物<br/>\n区域内的时空穿越的怪物群规模提高 15%" }, { "name": "时流之穿越圣甲虫", "explicitMod": "区域内最后消灭的建筑师会掉落一个物品化的神庙<br/>\n区域内掉落的物品化神庙根据当前神庙布局生成，但房间等级随机" }, { "name": "背叛者圣甲虫", "explicitMod": "区域内包含琼" }, { "name": "情报之背叛者圣甲虫", "explicitMod": "区域内遭遇的不朽辛迪加目标<br/>\n提供的情报提高 150%" }, { "name": "增援之背叛者圣甲虫", "explicitMod": "区域内的不朽辛迪加成员有增援陪伴的几率提高 50%" }, { "name": "不朽之背叛者圣甲虫", "explicitMod": "在区域内击败不朽辛迪加目标有 50% 的几率<br/>\n额外掉落一个圣甲虫" }, { "name": "超越圣甲虫", "explicitMod": "在区域内击败聚集的敌人可能吸引来自超越之界的怪物" }, { "name": "腐化之超越圣甲虫", "explicitMod": "区域内的超越恶魔掉落的物品被腐化" }, { "name": "放血之超越圣甲虫", "explicitMod": "区域内的超越传送门的融合范围扩大 30%" }, { "name": "复兴之超越圣甲虫", "explicitMod": "区域内的超越首领低血时被激怒<br/>\n区域内的超越首领掉落的污秽通货数量提高 100%<br/>\n区域内的超越传送门生成传奇首领的几率提高 30%" }, { "name": "侵袭之超越圣甲虫", "explicitMod": "区域内消灭的传奇怪物额外产生 8-12 个超越传送门" }, { "name": "致命贪婪圣甲虫", "explicitMod": "区域内有致命贪婪遭遇战" }, { "name": "贿赂之致命贪婪圣甲虫", "explicitMod": "致命贪婪怪物提供的经验值提高 150%<br/>\n致命贪婪遭遇战提供的奖励视作你额外完成了 2 轮" }, { "name": "决斗之致命贪婪圣甲虫", "explicitMod": "区域内的致命贪婪遭遇战尽可能通向传奇首领" }, { "name": "催化之致命贪婪圣甲虫", "explicitMod": "区域内的致命贪婪遭遇战仅提供催化剂奖励" }, { "name": "战书之致命贪婪圣甲虫", "explicitMod": "区域内的致命贪婪遭遇战提供的催化剂奖励<br/>\n改为提供贪婪战书" }, { "name": "惊悸迷雾圣甲虫", "explicitMod": "区域包含一个惊悸迷雾之镜" }, { "name": "狂躁之惊悸迷雾圣甲虫", "explicitMod": "区域内的惊悸迷雾奖励表填充速度加快 100%" }, { "name": "偏执之惊悸迷雾圣甲虫", "explicitMod": "区域内的惊悸迷雾遭遇战额外产生 2 种奖励类型" }, { "name": "神经之惊悸迷雾圣甲虫", "explicitMod": "区域内的惊悸迷雾遭遇战包含所有传奇惊悸迷雾首领<br/>\n只能对 11+ 阶地图使用" }, { "name": "妄念之惊悸迷雾圣甲虫", "explicitMod": "区域内发现的地图包含惊悸迷雾层数" }, { "name": "菌潮圣甲虫", "explicitMod": "区域内有一场菌潮遭遇战" }, { "name": "丰饶之菌潮圣甲虫", "explicitMod": "区域内的菌潮宝箱有 20% 的几率可以再次打开" }, { "name": "圣油之菌潮圣甲虫", "explicitMod": "区域内发现的圣油提高 1 阶" }, { "name": "繁茂之菌潮圣甲虫", "explicitMod": "区域内的菌潮遭遇战最多拥有 3 个额外的传奇首领<br/>\n菌潮遭遇战的传奇敌人的生命值提高 100%<br/>\n区域内发现的 14+ 阶菌潮地图改为掉落菌潮灭绝地图" }, { "name": "Blight Scarab of Invigoration", "explicitMod": "Each Empowering Tower in Areas grants Blighted Monsters in<br/>\nrange increased Difficulty and Reward" }, { "name": "庞大世系之圣甲虫", "explicitMod": "魔法怪物群规模提高 40%" }, { "name": "强敌之圣甲虫", "explicitMod": "区域内包含 4 个额外的镜像稀有怪物群" }, { "name": "神秘圣甲虫", "explicitMod": "区域内有额外 40-60 组神秘木桶" }, { "name": "追猎叛徒之圣甲虫", "explicitMod": "区域内包含许多背叛者" }, { "name": "稳定之圣甲虫", "explicitMod": "区域内的传送门有 50% 的几率使用时不被消耗" }, { "name": "Scarab of the Commander", "explicitMod": "Grants an additional Kirac Mission on Map Completion" }, { "name": "Scarab of Evolution", "explicitMod": "10 Monster Packs in Area are upgraded to Magic" }, { "name": "Scarab of Wisps", "explicitMod": "Monsters in Area have a chance to be Empowered by 1000 Wildwood Wisps" }, { "name": "Scarab of Bisection", "explicitMod": "You can select the Nullify Prefixes or Nullify Suffixes crafting options on the Map Device" }, { "name": "Scarab of Unity", "explicitMod": "All Magic Monsters in Area are in a Union of Souls<br/>\nMonsters in Area get 1% more Rarity of items dropped for<br/>\neach Empowered Soul, up to 500%" }, { "name": "Scarab of Radiant Storms", "explicitMod": "Area contains a Resplendent Tempest" }, { "name": "血族之犄角圣甲虫", "explicitMod": "区域内的所有怪物群至少为魔法怪物" }, { "name": "死地之犄角圣甲虫", "explicitMod": "区域内的稀有怪物额外具有 2 个词缀" }, { "name": "恩护之犄角圣甲虫", "explicitMod": "其他圣甲虫使用时不被消耗" }, { "name": "觉醒之犄角圣甲虫", "explicitMod": "你可以在地图装置处选择一种注魔工艺" }, { "name": "传统之犄角圣甲虫", "explicitMod": "区域内的所有稀有怪物至少有一个奖励词缀<br/>\n玩家的物品稀有度和物品数量词缀在区域内无效" }, { "name": "闪光之犄角圣甲虫", "explicitMod": "近期每击败一个怪物，区域内的玩家的物品稀有度和物品数量提高，分别提高最多 200% 和 100%" }, { "name": "魔域之犄角圣甲虫", "explicitMod": "区域内的怪物群有 15% 的几率被一个随机异界首领所取代<br/>\n地图最终首领的词缀也会作用于这些异界首领" }];
  const _hoisted_1$2 = { class: "normal" };
  const _hoisted_2$2 = ["innerHTML"];
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "ScarabItem",
    props: {
      name: {},
      showPrice: { type: Boolean }
    },
    setup(__props) {
      vue.inject(PriceDataKey);
      const props = __props;
      const current = vue.computed(() => {
        return SCARAB_POOL.find((e) => e.name === props.name);
      });
      return (_ctx, _cache) => {
        return current.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "scarab-item simpleitem-wrap",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          vue.createElementVNode("div", _hoisted_1$2, vue.toDisplayString(current.value.name), 1),
          vue.createElementVNode("div", {
            class: "magicitem",
            innerHTML: current.value.explicitMod
          }, null, 8, _hoisted_2$2)
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const ALLFLAME_POOL = [{ "name": "蛙群之不灭余烬", "explicitMod": "怪物群的怪物为无害的青蛙" }, { "name": "鼠群之不灭余烬", "explicitMod": "怪物群的怪物为老鼠" }, { "name": "索伏之不灭余烬", "explicitMod": "怪物群的怪物可掉落裂隙碎片（索伏）" }, { "name": "托沃之不灭余烬", "explicitMod": "怪物群的怪物可掉落裂隙碎片（托沃）" }, { "name": "艾许之不灭余烬", "explicitMod": "怪物群的怪物可掉落裂隙碎片（艾许）" }, { "name": "乌尔尼多之不灭余烬", "explicitMod": "怪物群的怪物可掉落裂隙碎片（乌尔尼多）" }, { "name": "夏乌拉之不灭余烬", "explicitMod": "怪物群的怪物可掉落裂隙碎片（夏乌拉）" }, { "name": "亚硫酸之不灭余烬", "explicitMod": "怪物群的怪物被击败时奖励亚硫酸" }, { "name": "瓦拉克之不灭余烬", "explicitMod": "怪物群的怪物可掉落卡鲁文身" }, { "name": "图克哈玛之不灭余烬", "explicitMod": "怪物群的怪物可掉落卡鲁文身" }, { "name": "塔赫亚之不灭余烬", "explicitMod": "怪物群的怪物可掉落卡鲁文身" }, { "name": "塔萨里奥之不灭余烬", "explicitMod": "怪物群的怪物可掉落卡鲁文身" }, { "name": "隆戈库莱之不灭余烬", "explicitMod": "怪物群的怪物可掉落卡鲁文身" }, { "name": "雷默科之不灭余烬", "explicitMod": "怪物群的怪物可掉落卡鲁文身" }, { "name": "努葛玛呼之不灭余烬", "explicitMod": "怪物群的怪物可掉落卡鲁文身" }, { "name": "奇塔弗之不灭余烬", "explicitMod": "怪物群的怪物可掉落卡鲁文身" }, { "name": "辛格拉之不灭余烬", "explicitMod": "怪物群的怪物可掉落卡鲁文身" }, { "name": "亚欧红古之不灭余烬", "explicitMod": "怪物群的怪物可掉落卡鲁文身" }, { "name": "深渊之不灭余烬", "explicitMod": "怪物群的怪物可掉落深渊珠宝" }, { "name": "贝达特之不灭余烬", "explicitMod": "怪物群的怪物可掉落污秽通货" }, { "name": "咕尔之不灭余烬", "explicitMod": "怪物群的怪物可掉落污秽通货" }, { "name": "科塔席之不灭余烬", "explicitMod": "怪物群的怪物可掉落污秽通货" }, { "name": "争斗古灵之不灭余烬", "explicitMod": "古灵怪物群头目额外掉落一个品质宝石" }, { "name": "狂暴古灵之不灭余烬", "explicitMod": "古灵怪物群头目额外掉落一个品质宝石" }, { "name": "霜法古灵之不灭余烬", "explicitMod": "古灵怪物群头目额外掉落一个品质宝石" }, { "name": "炮击古灵之不灭余烬", "explicitMod": "古灵怪物群头目额外掉落一个品质宝石" }, { "name": "灵法古灵之不灭余烬", "explicitMod": "古灵怪物群头目额外掉落一个品质宝石" }, { "name": "裂环之不灭余烬", "explicitMod": "怪物群的怪物可掉落裂环神器" }, { "name": "圣杯教团之不灭余烬", "explicitMod": "怪物群的怪物可掉落圣杯教团神器" }, { "name": "黑镰之不灭余烬", "explicitMod": "怪物群的怪物可掉落黑镰神器" }, { "name": "烈日骑士之不灭余烬", "explicitMod": "怪物群的怪物可掉落烈日骑士神器" }, { "name": "血肉皮囊之不灭余烬", "explicitMod": "怪物的生命值大幅提高" }, { "name": "纯净野兽之不灭余烬", "explicitMod": "怪物群的怪物提供的经验值大幅提高<br/>&#13;\n怪物群的怪物不掉落物品" }, { "name": "纯净灵猿之不灭余烬", "explicitMod": "怪物群的怪物提供的经验值大幅提高<br/>&#13;\n怪物群的怪物不掉落物品" }, { "name": "纯净恐喙鸟之不灭余烬", "explicitMod": "怪物群的怪物提供的经验值大幅提高<br/>&#13;\n怪物群的怪物不掉落物品" }, { "name": "纯净吐沙蟹之不灭余烬", "explicitMod": "怪物群的怪物提供的经验值大幅提高<br/>&#13;\n怪物群的怪物不掉落物品" }, { "name": "纯净裂齿兽之不灭余烬", "explicitMod": "怪物群的怪物提供的经验值大幅提高<br/>&#13;\n怪物群的怪物不掉落物品" }, { "name": "纯净龙蜥之不灭余烬", "explicitMod": "怪物群的怪物提供的经验值大幅提高<br/>&#13;\n怪物群的怪物不掉落物品" }, { "name": "纯净吞噬者之不灭余烬", "explicitMod": "怪物群的怪物提供的经验值大幅提高<br/>&#13;\n怪物群的怪物不掉落物品" }, { "name": "荒林教徒之不灭余烬", "explicitMod": "怪物群的怪物可掉落预兆" }, { "name": "荒林树精之不灭余烬", "explicitMod": "怪物群的怪物可掉落预兆" }, { "name": "荒林野兽之不灭余烬", "explicitMod": "怪物群的怪物可掉落预兆" }, { "name": "卡鲁军团之不灭余烬", "explicitMod": "怪物群的怪物可掉落永恒卡鲁裂片 " }, { "name": "永恒军团之不灭余烬", "explicitMod": "怪物群的怪物可掉落永恒帝国裂片 " }, { "name": "马拉克斯军团之不灭余烬", "explicitMod": "怪物群的怪物可掉落永恒马拉克斯裂片 " }, { "name": "圣堂军团之不灭余烬", "explicitMod": "怪物群的怪物可掉落永恒圣堂裂片 " }, { "name": "瓦尔军团之不灭余烬", "explicitMod": "怪物群的怪物可掉落永恒瓦尔裂片 " }, { "name": "科学家之耀焰不灭余烬", "explicitMod": "怪物群的怪物可以掉落契约和赏金猎人印记<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "塑界者之不灭余烬", "explicitMod": "怪物群的怪物可以掉落塑界者影响物品<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "裂界者之不灭余烬", "explicitMod": "怪物群的怪物可以掉落裂界者影响物品<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "督军之不灭余烬", "explicitMod": "怪物群的怪物可以掉落督军影响物品<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "救赎者之不灭余烬", "explicitMod": "怪物群的怪物可以掉落救赎者影响物品<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "圣战者之不灭余烬", "explicitMod": "怪物群的怪物可以掉落圣战者影响物品<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "猎人之不灭余烬", "explicitMod": "怪物群的怪物可以掉落猎人影响物品<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "荒林教徒之耀焰不灭余烬", "explicitMod": "怪物群的怪物可以掉落预兆<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "卡古兰之耀焰不灭余烬", "explicitMod": "怪物群的怪物可以掉落先祖秘藏神器<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "深渊之耀焰不灭余烬", "explicitMod": "怪物群的怪物可以掉落深渊珠宝<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "初生之耀焰不灭余烬", "explicitMod": "怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "试炼核心之不灭余烬", "explicitMod": "怪物群的怪物可掉落催化剂" }, { "name": "试炼守卫之不灭余烬", "explicitMod": "怪物群的怪物可掉落催化剂" }, { "name": "具现财富之不灭余烬", "explicitMod": "怪物群的怪物可掉落通货物品" }, { "name": "伪神之不灭余烬", "explicitMod": "额外怪物掉落的物品插槽数量 +1<br/>&#13;\n额外怪物可掉落完全连接物品" }, { "name": "混乱之不灭余烬", "explicitMod": "怪物群由一个盗贼流放者组成" }, { "name": "辛迪加守卫之不灭余烬", "explicitMod": "怪物群的怪物可掉落圣甲虫" }, { "name": "辛迪加护卫队之不灭余烬", "explicitMod": "怪物群的怪物可掉落圣甲虫" }, { "name": "辛迪加刺客之不灭余烬", "explicitMod": "怪物群的怪物可掉落圣甲虫" }, { "name": "辛迪加研究者之不灭余烬", "explicitMod": "怪物群的怪物可掉落圣甲虫" }, { "name": "融合狂怒之不灭余烬", "explicitMod": "怪物群的怪物可掉落分裂物品" }, { "name": "瓦尔之耀焰不灭余烬", "explicitMod": "怪物群的怪物有几率留下特殊工艺灵柩" }, { "name": "裂隙领主之耀焰不灭余烬", "explicitMod": "怪物群的怪物可以掉落裂隙碎片<br/>&#13;\n怪物群的怪物有几率留下特殊工艺灵柩" }];
  const _hoisted_1$1 = { class: "normal" };
  const _hoisted_2$1 = ["innerHTML"];
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "AllflameItem",
    props: {
      name: {},
      showPrice: { type: Boolean }
    },
    setup(__props) {
      vue.inject(PriceDataKey);
      const props = __props;
      const current = vue.computed(() => {
        return ALLFLAME_POOL.find((e) => e.name === props.name);
      });
      return (_ctx, _cache) => {
        return current.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "allflame-item simpleitem-wrap",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          vue.createElementVNode("div", _hoisted_1$1, vue.toDisplayString(current.value.name), 1),
          vue.createElementVNode("div", {
            class: "magicitem",
            innerHTML: current.value.explicitMod
          }, null, 8, _hoisted_2$1)
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "Hover",
    props: {
      modelValue: { type: Boolean, default: false },
      position: { default: () => ({ x: 0, y: 0 }) },
      type: { default: "card" },
      name: { default: "" },
      showPrice: { type: Boolean }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit: __emit }) {
      const coms = {
        card: DivinationCard,
        unique: UniqueItem,
        scarab: _sfc_main$4,
        allflame: _sfc_main$3
      };
      const props = __props;
      const currentStyle = vue.computed(() => ({
        left: `${props.position.x}px`,
        top: `${props.position.y}px`
      }));
      const currentCom = vue.computed(() => coms[props.type] || null);
      return (_ctx, _cache) => {
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
          class: "hover-wrap",
          style: vue.normalizeStyle(currentStyle.value)
        }, [
          _ctx.type !== "card" || _ctx.name ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(currentCom.value), {
            key: 0,
            name: _ctx.name,
            showPrice: _ctx.showPrice
          }, null, 8, ["name", "showPrice"])) : vue.createCommentVNode("", true)
        ], 4)), [
          [vue.vShow, _ctx.modelValue]
        ]);
      };
    }
  });
  const Hover = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c47f1024"]]);
  const MODAL_SELECTOR = "n-modal-container";
  const MODAL_CONTENT_SELECTOR = ".h-full.flex-1>.n-scrollbar .n-scrollbar-content";
  const CARD_CONTENT_SELECTOR = ".wh-full";
  const EDIT_TYPE_SELECTOR = ".n-menu-item-content--selected";
  const TAG_SELECTOR = ".n-tag";
  function useObsrver(isPrice) {
    const observerFnc = (node, callBack) => {
      if (!node)
        return;
      const observer = new MutationObserver(callBack);
      observer.observe(node, {
        childList: true
      });
      return observer;
    };
    const addCustomDom = (el, node) => {
      const activeTag = node.querySelector(EDIT_TYPE_SELECTOR);
      if (!activeTag)
        return;
      const type = activeTag.innerText;
      const parent = el.querySelector(".n-tag__content");
      if (!parent)
        return;
      let content = parent.querySelector(".flex-y-center") || parent;
      const name = content.innerText;
      const hoverName = "hover-span inline-flex i-solar:hamburger-menu-bold ml-2 text-14 wh-14";
      const icon = content.querySelector(".i-solar\\:hamburger-menu-bold");
      if (icon) {
        if (isPrice) {
          content.removeChild(icon);
        } else {
          icon == null ? void 0 : icon.classList.add("original");
          return;
        }
      }
      const server = document.querySelector(".n-radio-button--checked");
      const span = document.createElement("span");
      span.className = hoverName;
      span.dataset.name = name;
      span.dataset.type = type;
      span.dataset.server = server ? server.innerText : "";
      el.dataset.name = name;
      content.appendChild(span);
    };
    const observerChildren = (node, mutationsList, obs, callBack = (e) => {
    }) => {
      const target = mutationsList[0].target;
      const itemList = target.querySelectorAll(TAG_SELECTOR);
      callBack(node);
      itemList.forEach((e) => {
        addCustomDom(e, node);
      });
      const childrenList = target.querySelectorAll(CARD_CONTENT_SELECTOR);
      childrenList.forEach((child) => {
        observerFnc(child, (mutationsList2, obs2) => {
          mutationsList2.forEach((item) => {
            item.addedNodes.forEach((el) => {
              if (!/n-tag/.test(el.className))
                return;
              if (el.querySelector(".hover-span"))
                return;
              addCustomDom(el, node);
            });
          });
        });
      });
    };
    const initObserver = ({ over = (e) => {
    }, change = (e) => {
    } }) => {
      const body = document.querySelector("body");
      if (!body)
        return;
      observerFnc(body, (mutationsList, obs) => {
        mutationsList.some((item) => {
          return Array.from(item.addedNodes).some((node) => {
            const REG = isPrice ? /^价格排序/ : /^高级编辑/;
            if (REG.test(node.innerText) && node.classList.contains(MODAL_SELECTOR)) {
              const container = document.querySelector(MODAL_CONTENT_SELECTOR);
              if (!container)
                return false;
              container.onmouseover = over;
              observerFnc(container, (list, fnc) => {
                observerChildren(node, list, fnc, change);
              });
              obs.disconnect();
              return true;
            }
            return false;
          });
        });
      });
    };
    return initObserver;
  }
  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  const _withScopeId = (n) => (vue.pushScopeId("data-v-6967c72b"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { id: "d-radio" };
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", { style: { "margin-right": "4px" } }, "命运卡奖励分类:", -1));
  const _hoisted_3 = { class: "radio" };
  const _hoisted_4 = ["onClick"];
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "Radio",
    props: {
      onChange: { type: Function, default: () => {
      } },
      options: { default: () => [] }
    },
    setup(__props, { expose: __expose }) {
      const props = __props;
      const visible = vue.ref(true);
      const active = vue.ref("");
      const onClick = (tag) => {
        const { key, value } = tag;
        active.value = value === active.value ? "" : value;
        props.onChange(active.value);
      };
      const show = () => {
        visible.value = true;
      };
      const hide = () => {
        visible.value = false;
      };
      __expose({
        show,
        hide
      });
      return (_ctx, _cache) => {
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          _hoisted_2,
          vue.createElementVNode("div", _hoisted_3, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (tag) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                class: vue.normalizeClass(["radio-item", { active: active.value === tag.value }]),
                key: tag.key,
                onClick: ($event) => onClick(tag)
              }, vue.toDisplayString(tag.key), 11, _hoisted_4);
            }), 128))
          ])
        ], 512)), [
          [vue.vShow, visible.value]
        ]);
      };
    }
  });
  const Radio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6967c72b"]]);
  const TAGES = [
    { key: "暗金", value: "unique_divination" },
    { key: "首饰(珠宝)", value: "jewellery_divination" },
    { key: "通货", value: "currency_divination" },
    { key: "赛季通货", value: "currency_league_divination" },
    { key: "护甲", value: "armour_divination" },
    { key: "武器", value: "weapon_divination" },
    { key: "宝石", value: "gems_divination" },
    { key: "品质宝石", value: "gems_quality_divination" },
    { key: "地图", value: "maps_divination" },
    { key: "暗金腐化", value: "unique_corrupted_divination" },
    { key: "腐化物品", value: "corrupted_divination" },
    { key: "限定", value: "boss_drop_card" },
    { key: "命运卡", value: "gives_other_cards_divination" }
  ];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      let radio = null;
      const priceData = vue.ref(null);
      const visible = vue.ref(false);
      const showPrice = vue.ref(false);
      const name = vue.ref("");
      const type = vue.ref("card");
      const position = vue.ref({
        x: 0,
        y: 0
      });
      vue.provide(PriceDataKey, priceData);
      const setting = {
        命运卡: {
          type: "card",
          target: "#divination-wrap"
        },
        暗金装备: {
          type: "unique",
          target: ".unique-item"
        },
        圣甲虫: {
          type: "scarab",
          target: ".scarab-item"
        },
        不灭余烬: {
          type: "allflame",
          target: ".allflame-item"
        }
      };
      const isPrice = vue.computed(() => window.location.host === "price.filtereditor.cn");
      const initObserver = useObsrver(isPrice.value);
      const addLimitToTarget = (target) => {
        if (!target)
          return;
        const listItem = target.querySelectorAll(".n-list-item");
        if (!listItem.length)
          return;
        listItem.forEach((el) => {
          var _a;
          const nameWrap = el.querySelector(".flex-y-center");
          if (!nameWrap)
            return;
          const name2 = nameWrap.innerText;
          const limit = (((_a = UNIQUE_POOL.find((item) => item.name === name2)) == null ? void 0 : _a.limit) || "").replace(/「/g, "[").replace(/」/g, "] ").trim().replace(/(限定掉落|升级)/g, '<span style="color: #98f1d4">$1</span>');
          if (!limit)
            return;
          nameWrap.style.flex = "1";
          nameWrap.querySelector("div").innerHTML = `
      <p>${name2}</p>
      <p style="color: var(--color-default);font-size: 12px;line-height: 1.2;white-space: pre-wrap;">${limit}</p>
      `;
          const list = target.querySelector(".n-list");
          if (!list)
            return;
          list.style.maxHeight = "400px";
          list.style.overflowY = "auto";
        });
      };
      const changePriceDisplay = (target) => {
      };
      const handleShowDivCard = (event) => {
        var _a;
        const target = event.target;
        if (target.classList.contains("original")) {
          setTimeout(() => {
            const activeList = document.querySelectorAll('.n-popover:not([style*="display: none"])');
            if (!isPrice.value) {
              addLimitToTarget(activeList[0]);
            } else {
              changePriceDisplay(activeList[0]);
            }
          }, 301);
          return;
        }
        if (!target.classList.contains("hover-span")) {
          visible.value = false;
          return;
        }
        const { name: dataName, type: dataType, server } = target.dataset;
        if (!dataName || !dataType || !setting[dataType]) {
          visible.value = false;
          return;
        }
        showPrice.value = !server || server === "国服";
        name.value = dataName;
        visible.value = true;
        type.value = (_a = setting[dataType]) == null ? void 0 : _a.type;
        vue.nextTick(() => {
          position.value = getModalPosition(target, setting[dataType].target);
        });
      };
      const getGMStorageData = () => {
        const text = _GM_getValue(PRICE_MESSAGE);
        if (!text)
          return;
        const result = JSON.parse(text);
        if ((Date.now() - result.PRICE_TIME_STAMP) / 1e3 / 60 / 60 / 24 >= 1) {
          _GM_deleteValue(PRICE_TIME_STAMP);
          return;
        }
        priceData.value = result.list;
        const timeStamp = window.localStorage.getItem(PRICE_TIME_STAMP) || "";
        if (result.PRICE_TIME_STAMP === Number(timeStamp))
          return;
        window.localStorage.setItem(PRICE_TIME_STAMP, `${result.PRICE_TIME_STAMP}`);
      };
      vue.onMounted(() => {
        document.addEventListener("visibilitychange", function() {
          if (document.visibilityState !== "visible")
            return;
          getGMStorageData();
        });
        getGMStorageData();
        initObserver({
          over: handleShowDivCard,
          // 奖励类型高亮，随便写写用着
          change: (node) => {
            const activeTag = node.querySelector(EDIT_TYPE_SELECTOR);
            if (!activeTag)
              return;
            const type2 = activeTag.innerText;
            const content = node.querySelector(".n-card-header__main");
            if (!content)
              return;
            if (type2 !== "命运卡") {
              radio == null ? void 0 : radio.hide();
            } else {
              if (radio) {
                radio.show();
                return;
              }
              const div = document.createElement("div");
              content.style.position = "relative";
              content.appendChild(div);
              radio = vue.createApp(Radio, {
                options: TAGES,
                onChange: (val) => {
                  if (!val) {
                    if (document.querySelector("#styleTag")) {
                      document.querySelector("#styleTag").innerHTML = "";
                    }
                    return;
                  }
                  const list = CARD_POOL.filter((card) => {
                    var _a;
                    return (_a = card.Tags) == null ? void 0 : _a.split(",").some((str) => str.trim() === val);
                  });
                  const styles = list.map((item) => `.n-tag[data-name="${item.name}"] {
                            background-color: #a745c0;
                            color: #fff;
                        }`).join("\n");
                  if (document.querySelector("#styleTag")) {
                    document.querySelector("#styleTag").innerHTML = styles;
                  } else {
                    const styleTag = document.createElement("style");
                    styleTag.id = "styleTag";
                    styleTag.innerHTML = styles;
                    document.head.appendChild(styleTag);
                  }
                }
              }).mount(div);
              console.log(radio);
            }
          }
        });
        document.body.addEventListener("click", () => {
          visible.value = false;
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(Hover, {
          modelValue: visible.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
          position: position.value,
          type: type.value,
          name: name.value,
          showPrice: showPrice.value
        }, null, 8, ["modelValue", "position", "type", "name", "showPrice"]);
      };
    }
  });
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-931720c3"]]);
  function priceInit() {
    window.JSON.parse = new Proxy(window.JSON.parse, {
      apply: (target, thisArg, argArray) => {
        if (/混沌石/.test(argArray[0])) {
          setParseJson(Reflect.apply(target, thisArg, argArray));
        }
        const result = Reflect.apply(target, thisArg, argArray);
        return result;
      }
    });
    const setParseJson = (data) => {
      const result = data.filter((e) => e.frameType === 3 || e.frameType === 6).map((item) => ({
        baseType: item.baseType,
        name: item.name,
        calculated: item.calculated,
        frameType: item.frameType,
        searchCode: item.searchCode
      }));
      if (!result.length)
        return;
      _GM_setValue(PRICE_MESSAGE, JSON.stringify({
        PRICE_TIME_STAMP: Date.now(),
        list: result
      }));
      console.log("%c 数据成功推送", "color:#4ade80");
    };
  }
  if (window.location.host === "edit.filtereditor.cn") {
    vue.createApp(App).mount(
      (() => {
        const app = document.createElement("div");
        document.body.append(app);
        return app;
      })()
    );
  }
  if (window.location.host === "price.filtereditor.cn") {
    priceInit();
    vue.createApp(App).mount(
      (() => {
        const app = document.createElement("div");
        document.body.append(app);
        return app;
      })()
    );
  }

})(Vue);