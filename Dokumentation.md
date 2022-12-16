# Dokumentation

## Rock Paper Scissor av Markus Andersson

### Vecka 1

Denna vecka har jag påbörjat en designskiss i figma som jag tänker att jag ska utgå från när jag börjar koda. När jag hörde att vi skulle göra ett sten sax påse spel tänkte jag på hur det kunde göras annorlunda. Tanken om att göra en "fantasy" design med riktiga gubbar kändes då som en kul idé, för att vidareuteckla denna idén så tog jag namnet "Janken" istället för rock paper scissor. "Janken" betyder samma sak fast på japanska och ser i min åsikt, lite coolare ut i skrift. Dag två på kursen började jag rita i Figma för min platform samt i PiskelApp för att göra mina gubbar. Den första draften är jag nöjd med. Däremot finns det ett problem jag behöver lösa. Mina bilder har dålig upplösning när jag skriver ut dem i javaScript koden. Jag ska försöka lösa detta under helgen eller under nästkommande vecka.

Sammanfattat så är det endast funktionaliteten bakom sten, sax påse och finjustering av designen som är kvar. Ett väldigt kul projekt minst sagt.

### Vecka 2

Idag har hälften av veckan gått. Jag har nu adderat funktionalitet till spelet. Spelaren kan nu göra ett val via "prompt" och datorn genererar ett slumpmässigt tal mellan 1-3. Jag har haft lite problem under dagen med att få texten att visas korrekt, vilket nu är löst. Det problem jag har kvar nu är att datorn alltid vinner. Dagens datum är 18/11. Jag har lyckats göra väldigt mycket på projektet denna veckan. Jag har implementerat ett flertal animationer, både genom css, javaScript och fontawesome. Den animation jag tycker är väldigt unik är min "text animation" i javaScript. Jag måste förfina hur och när texten skrivs ut, så det blir så flytande som möjligt dock.

Jag har även löst funktionaliteten för spelet. Det enda mer jag kommer vilja implementera är hur en vinnare utses. Jag har desssutom även påbörjat min design av min frontpage och leker just nu runt med färger. I nuläget är den cornflowerblue, blanchedalmond, mörkröd och vit. Jag är fortfarande osäker på vilken färg det kommer bli i slutändan. Nya ideér dyker upp hela tiden och jag är just nu uppe i ca 800 linjer kod (css och html inkluderat).

Nästa vecka kommer jag vilja lägga in min designprocess på min frontpage, skapa en funktion för hur vinnaren utses samt finrita alla ritade bilder.

### Vecka 3

Idag har hälften av veckan gått (22/11). Igår gjorde jag en helt ny design av hemsidan. Jag bestämde mig för att bygga om hemsidan med hjälp utav grid. Efter mycket frustration så har jag äntligen lyckats skapa en bra grund. Jag har även bestämt mig för att bygga min framsida med hjälp utav grid och min spel sida med flexbox. Jag tänker att jag gör detta för att kunna lära mig så mycket som möjligt. Nackdelen är att det blir lite rörigt och mycket kod.

Efter vecka tre har jag fixat klart framsidan och spelsidan med grid och flexbox. Jag har lagt till all funktionalitet i spelet och även funnit mig tid till att rita en egen bakgrund till spelet. Allt i spelet är nu ritat av mig. Jag har lekt runder med färger och har nu besämt mig till 99% hur allt ska se ut. Allt som återstår nu är att göra hemsidan mer responsiv, efter det är det bara att renskriva kod/text.

### Vecka 4

Vecka fyra har jag inte gjort särskilt mycket då jag legat före i planeringen. Jag har istället fixat de andra uppgifterna och fixat lite buggar i Rock paper scissor spelet. Ingen push görs.

### Vecka 5

Vecka fem har gått. En vecka kvar innan inlämning. Jag har nu gjort min framsida responsiv. Det finns alltså en layout för laptops och större skärmar, samt en layout för telefoner och paddor med en bredd på max 600px. Layouten för mindre enheter har inga bilder eller videos i nuläget. Dialogen är heller inte med. Det är just nu en simplifierad och komprimerad version av hemsidan.

Spel-sidan har jag arbetat med flexbox vilket har automatiskt hjälpt mig att göra den delen av min webbsida responsiv till viss del, men jag behöver lägga till en media query här också.

Inför nästa vecka, sista veckan, ska jag titta mer på det responsiva, snygga upp kod och sen är jag klar!

### Sammanfattning

För att sammanfatta hela arbetet så har det kort sagt varit ett kul projekt. Jag har närmat mig projektet från många olika håll och har genom detta lärt mig mycket om design, responsivitet, tillgänglighet och färger, men även om väldigt mycket mer. Jag hade en hyfsat klar bild från början hur jag ville att projektet skulle se ut, vilket visas i min design-skiss. Däremot avvek jag en del från den ursprungliga designen. Från början gjorde jag en hemsida som inte använde sig av flexbox eller grid. När vi väl fick lära oss grid och flexbox så kände jag att jag ville applicera det på min hemsida. Det var då jag tog beslutet att göra om min framsida med grid och min spelsida med flexbox. Anledningen till att jag valde grid för framsidan var för att grid tillät mig att jobba mer flexibelt samt gjorde att jag kunde få till mer dimensioner och mer djup. Den metod inom grid som jag fann mest hjälpsam var "grid-template-areas" som gjorde att jag redan från början kunde strukturera upp sidan, det blev väldigt konkret från början. Till spelsidan utgick jag från flexbox. Anledningen till detta är simpel, det var rätt så rakt fram vad jag ville ha på spelsidan, en linjär design som gick uppifrån och ner, flexbox kände som det naturliga verktyget för detta. Jag tycker även att flexbox, precis som namnet, är väldigt flexibelt och är inte lika strikt som grid. Genomgående i arbetet med grid och flexbox märkte jag att ett litet misstag med grid kan strula till hela hemsidan, medans ett litet misstag med flexbox inte behöver påverka särskilt mycket.

För användarvänlighet har jag använt mig av semantiska element, vilket skapar en större användarvänlighet. Jag har även försökt framhäva bilder och knappar för att guida användaren igenom hemsidan på ett så smidigt sätt som möjligt. Hemsidan har testats av familj och vänner, varpå jag har observerat deras "userflow" för att se om de gör det jag vill att de ska göra. Utifrån detta har jag sedan korrigerat hemsidan.

Interaktionsdesignen hänger även samman med användarvänligheten. Målet med min hemsida var att engagera och guida användaren så mycket som möjligt utan att göra det för flashigt. Genom att till exempel kolla på bilder med en scale effekt, titta på en loopande video eller hänga med i en dialog innan spelet börjar tror jag att användaren fastnar lättare, då det ger spelet och hemsidan mer djup och personlighet. För att även göra hemsidan mer unik bestämde jag mig även för att rita alla gubbar, objekt och bakgrunder själv, allt har då ritats i Figma och PiskelApp. Två stycken "gömda" funktioner lades även till. Den första är att jag skapade en gömd karaktär bakom reglerna på spelsidan. När du hovrar över reglerna så kommer en till karaktär fram och förklarar hur spelet går till. Slutligen adderade jag även en text för att få användaren att sluta klicka efter fem rundor.

Min favoritfunktion med hemsidan är dock dialogen mellan de karaktärer jag har skapat, trots den någorlunda simpla konversationen så skapas ett intresse och användaren engageras till att fullfölja "resan" på hemsidan.

Något jag tyckte var svårt var det responsiva. Det tog lite tid att komma in i tänket. Trots detta lyckades jag göra en hyfsat bra responsiv hemsida. Slutdesignen tillåter användaren att använda allt från laptops till små telefoner. I stora drag skapade jag i stort sett en komprimerad layout och design för mobiler, då jag ansåg att en annan design var bättre för mindre skärmar.

Sammanfattningsvis tror jag att jag har skapat en bra hemsida, den innehar många olika dimensioner till sig, den är fin att kolla på och den är rolig att vara inne på vilket förhoppningsvis skulle göra att användare hade velat komma tillbaka.

#### Information

Alla bilder på mina skisser ligger i filen "draft pics". Skisserna för framsidan och spelsidan ligger i samma fil och under namnen "front.png" och "game.png".
