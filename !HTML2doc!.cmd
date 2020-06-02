@ECHO OFF
CHCP 437>NUL
TITLE SNAP! HTML-2-Doc
SETLOCAL ENABLEDELAYEDEXPANSION
IF EXIST "module0" (
	REN module0 module0.bak
IF EXIST "module1" (
	REN module1 module1.bak
	MD module1
	SET rootDir=module1
	) ELSE ( ECHO ERREUR: Dossiers module0 et module1 manquants&TIMEOUT /T 15 &EXIT /B ))
	IF NOT EXIST "temp" MD temp
	(ECHO:>filelist.tmp)
	(
ECHO IF EXIST ^"module0.bak^" ^( RMDIR /S /Q module0 ^&^& REN module0.bak module0 
ECHO ^) ELSE ^( IF EXIST ^"module1.bak^" ^( RMDIR /S /Q module1 ^&^& REN module1.bak module1 
ECHO ^) ELSE ^( ECHO ERREUR: Dossiers module0 et module1 manquants^&TIMEOUT /T 15 ^&EXIT /B ^)^)
ECHO IF EXIST ^"temp^" RMDIR /S /Q temp
ECHO del undo.cmd)>undo.cmd
	ECHO Initialization ...
   	FOR /r %%A in ("m*_??.html") DO (
   		set /p "=." <nul 
   		(ECHO "%%~dpnxA">>filelist.tmp)
   		)
ECHO.>temp\tools_en.tmp
ECHO.>temp\tools_fr.tmp
IF EXIST "tools/documents_en.html" ECHO "content/tools/documents_en.html">>temp\tools_en.tmp
IF EXIST "tools/graphics_en.html" ECHO "content/tools/graphics_en.html">>temp\tools_en.tmp
IF EXIST "tools/documents_fr.html" ECHO "content/tools/documents_fr.html">>temp\tools_fr.tmp
IF EXIST "tools/graphics_fr.html" ECHO "content/tools/graphics_fr.html">>temp\tools_fr.tmp

   FOR /F "delims=" %%a in (filelist.tmp) DO (
   COPY %%a temp>NUL
   set /p "=." <nul
   )
   DEL filelist.tmp
CD temp
ATTRIB -R -H *.html & REM MAKE SURE ALL FILES ARE WRITEABLE
EXPLORER .
SET /A fileCount=ImgCounter=0
FOR %%n in ("*.html") do SET /A fileCount+=1
SET filePrefix=z& REM Prefix for temporary files
SET /A ScreenHeight=50
MODE CON COLS=125 LINES=24
COLOR 1F
ECHO:
ECHO           +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.     
ECHO:  
ECHO        -+  :HH:  :HH: TTTTTTTTT :mmn     omm/  IhH:                      ssssss+`    .shys..   sshhso-     `ss:  +-     
ECHO      -shh  :HH:  :HH:   .hhh.   :MMhy   -hhm+  Ihh:     TT:              DD:`-dhy:  hO/``oho  hhs--shy.    +hy-  hhs-   
ECHO   .:yhy+.  :HH:  :HH:   `hhh`   :Mhhh.  shMM+  Ihh:   ooHHHooo .oooo.    DD:  `dhs  hO-  /Oh  hh:  .++`   .yho   .+yhy:.
ECHO   hhy:`    :hhHHHHHH:   `hhh`   :Myyho :hhMM+  Ihh:     tT:   soo-.vos.  DD:   dhs  Oh-  /Oh  hh:         +hy.     `:yhh
ECHO   shy+`    :HH:  :HH:   `hhh`   :M:+my:oms/M+  Ihh:     tt:  /oh    /o:  DD:   ohs  hO-  /Oh  hh:        `hh+      `+yhs
ECHO    /shyo-  :HH:  :HH:   `hhh`   :M:`ohhhy.-M+  Ihh:     tto  .yhv- -sy.  DD:  `dhs  hO-  /Oh  hh:  .++`  +hy`    -oyhs/ 
ECHO      .oyh  :HH:  :HH:   `hhh`   :M:  yhh- -M+  IhhL      +sys `/syys:.   DD: -shh:  hO+``oho  hh+`-shy` .yh+     hyo.   
ECHO        `o  :HH:  :HH:   `sss`   :M:  .o.  .M+  LssMMMMMM                 sssssss:    lyhyYJ.   syhhss-  ohy.     o`     
ECHO:  
ECHO           +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++. H2D.2
ECHO:
ECHO:
ECHO   Veuillez glisser/d�placer le premier fichier du cours, cliquez sur cette fen�tre � nouveau et pressez la touche � Retour �
ECHO   Please Drag/Drop the first file of the course here, click this window again and press Enter
ECHO:
SET /P "initialFile="
SET serverName=%initialFile%
For %%B in ("%serverName%") do SET pnx=%%~pB
For %%D in ("%serverName%") do SET netName=%%~dD
set unc=
for /f "tokens=* delims= " %%U in ('net use %~d0 2^> nul ^| find /i "\\"') do set unc=%%U
if "%unc%" == "" ( SET uncname=%~d0!pnx!) ELSE ( SET uncname=%unc:*\\=\\%!pnx!)
set uncname=%uncname:content\temp\=%
REM ===========================================================================================================
REM =======                          DISPLAY WHILE PROCESSING                      ============================
REM ===========================================================================================================
 (
 ECHO:                                                           
 ECHO:                                                           
 ECHO:                                                           
 ECHO                    .:/+++oymNNNNNmmmd+-                      
 ECHO                 `/dMMMMMMMMMMMMMMMMmhydNh:::/:`              
 ECHO               `oNMMMMMMMNNNNNNMMNN++s+:sNMMMMNho-            
 ECHO              oNMMMMMMMNmdhhyssss/:-:+:---ydMMMMMdy.``        
 ECHO            /s/dMmhs/:.  `..///+/+o+ooo//:::smNNNMMdo--:`     
 ECHO           :o`-:-`  .:///oossoosssyysoooyo++/+:/ohNNNd:.ss`   
 ECHO          . `-````-+//+ossooosys+sooooosyoo++o/:-.`-odh:`oy-` 
 ECHO         `   `--://:-::////+++///+++//+++oso+/++/:.`  ./.-d-  
 ECHO        /.  ./:/+---://++//:///:::--:::/+++//:::--::-.``/``-  
 ECHO       -o .:///:::/soydmmmdyoo+/:-.-:---://:----..-::-`` / `  
 ECHO       :s:::::-:sdmNMMMMMMMMNmdyso+//:--///:.```...-::-``.    
 ECHO       s:--.--/yNMMMMMMMMMMMMMMMNmdy/+/o/+/:::-.`.--/:-.`     
 ECHO      -/.`...-sNMMMMMMMMMMMMMMMMMMNdhhhyyhhhyso/://oss+:`     
 ECHO      :. `..-+dMMMMMMMMMMMMMMMMMMMMMNNmmNNNmdhhyhhdddhhs:     
 ECHO     -.`....odNMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNmmdddhs-    
 ECHO     :````./yNMMMMMMMMMMMMMMMMMMNNNNNNNNNNmmmNNmmmmdddhhyo    
 ECHO     ``  `-+hNMMMMMMMMMMMMMMNNNNNNNNNNNNmmmmmmmmmddhhhhyys`   
 ECHO         `-sdNMMMMMMMMMMMNNNNNNmmmmmmdddddddddddddhhhhyyys.   
 ECHO         .sNNMMMMMMMMMMMMMMMNNNmmmmmmmmmmmmmmmmdddhhhhyyso.   
 ECHO    `-  `:mMMMMNNdhhdmmmNNNNNNNmmmmmmmmmmmmmmmmmmmmddhysoo.   
 ECHO    .m/`.sNMMMmhhy++++ossyhhhddddddhhdddddddmmddddddhhhhyo`   
 ECHO    odds/mMMMNdo/:.--.````.-:/+osyyhhhhhhhhyyyyssssoosoyhs    
 ECHO   +y+:sdMMMMNs/+osssso+:-.```--:/ossyysso+:::-...-.--.-/+    
 ECHO   /o: sNMMMMmysso/----......-::-/+osooo+/--....````````.-    
 ECHO   `:-.mNMMMMNmhs/.../``   .``.:/oyhhys+:--..--:://////...    
 ECHO    .. yNMMMMNNNmmmdyo/----/--:oyydNNds:-``..    ```.//:-`    
 ECHO    ``.dMNMMNNNNmmddhyyso++++oshdmNMNmy//:-:/.```:``.:/++     
 ECHO      /dNMMNMMMMMMNNmdhhhhhddddmmNMNNmy+++///++++++osyyhy.    
 ECHO      odMMMMMMMMMMMMMNNNmmNNNNNNNMMNmdyoossssoooosyhdhhho-    
 ECHO      ymMMMMMMMMMMMMNNmmmmmmNNMMMMMNmdyssyhhddddmmmmddhhs.    
 ECHO     `hmNNmmNNNNNNmmdhhyysoohmNMMMMNmhysosyhhddmmmmddhhyo`    
 ECHO     `hmmdddmmmmddhyso+//++hNNMMMMNNmhyso+:/+syhhhdhhhso:     
 ECHO     `ddhyhhdhhhyso+::/oyyhNMNMMMNmmddhsyy/:::/osyyyys+:`     
 ECHO     syhhsyhhso+:-..:+syyyyyhdmNNmdddhyoo+///::/+ooso+/`      
 ECHO     yyyyyyys+:.`...-:/+++o/::+yhyyys+:-..:/::-.-/+++/-       
 ECHO     ohsyssssoo:-::-../oo+++:---::::-```......```-///-`       
 ECHO     -hyssosss+/:oss+. .+hysooo+/:/::::::-...---:+/:-`        
 ECHO     `/yos+ssos/oyhhhs/.:dmydyys+++//+/: `.:/++oo/-.`         
 ECHO      `+ooo+ss++shhhdhhyoys/ymNmhdmys+-`-:/+oo+o/:`           
 ECHO        `//+sssoshddddhdddhssssoooo/:---:/+oo+o/-`            
 ECHO          `-/oosyhdddddddhhhyyyyyyso+/:/++oo+/:`              
 ECHO            `:+syyhddmddysyssssssoo++///+oo+:.                
 ECHO              `-oyhdddmmdyo/:---.-:://+ooo/..`                
 ECHO                ./shddmmmmmdhysssyyyssss+:`                   
 ECHO                 `-+syhddmmddddhhhyssso/.                     
 ECHO                   `-//+ossoo+++ooo+/:.`                      
 ECHO                      ``..--...:::-.`                         
 ECHO                                ``                            
 ECHO:
 ECHO:
 ECHO:)>zz-ben.txt
 REM ===========================================================================================================
REM Create bottom file
(ECHO:
ECHO:)>batch_shiftfooters.txt
REM ===========================================================================================================
REM Create CSS file
(ECHO *{border:1px solid^;border-color:transparent^;float:none^;clear:both}@keyframes glowing{50%%{text-shadow:0 0 .1em,0 0 .3em}}#HTML2Doc summary{text-align:right^;margin:auto^;width:max-content^;background-color:hsla^(200,50%%,50%%,1^)}.cleanupMode{border-radius:10px^;border:1px solid transparent^;padding:.5em^;background:linear-gradient^(white,white^) padding-box,repeating-linear-gradient^(-45deg,black 0,black 25%%,transparent 0,transparent 50%%^) 0 / .6em .6em^;animation:ants 36s linear infinite^;cursor:pointer}.setForRemoval{box-shadow:0 0 1px 10px hsla^(1,100%%,50%%,.5^) inset^;color:grey^;filter:blur^(1px^)^;opacity:.2^;background-color:rgba^(255,50%%,0%%,.5^)}@keyframes ants{to{background-position:100%% 100%%}}#HTML2Doc strong{font-size:130%%^;font-weight:540}#HTML2Doc{font-family:monospace^;font-size:100%%^;position:fixed^;width:350px^;height:min-content^;background:hsla^(200,30%%,70%%,.85^)^;padding:.5em^;border-radius:10px^;box-shadow:0 20px 16px -8px hsla^(0,0%%,0%%,.45^),20px 20px 100px -8px hsla^(0,0%%,100%%,.65^) inset^;border:1px solid #000^;z-index:1000^;top:15px^;right:15px}.unprepared{display:none}#HTML2Doc button{transition:.8s^;width:min-content^;padding:.4em .8em^;border:2px solid transparent^;border-bottom-width:0^;margin:.25em auto^;background-color:hsla^(200,10%%,50%%,.85^)^;background-origin:border-box^;color:#fff^;font-size:100%%^;font-weight:700^;white-space:nowrap^;cursor:pointer^;text-shadow:0 -.05em .05em rgba^(0,0,0,.5^)^;border-radius:.5em^;box-shadow:0 2px rgba^(255,255,255,.7^) inset,0 .5em rgba^(255,255,255,.2^) inset,0 -.2em .5em rgba^(0,0,0,.5^) inset,0 .05em .1em #000}#HTML2Doc button:hover,#HTML2Doc #Step2+label:hover{background-color:hsla^(200,50%%,50%%,.85^)}#HTML2Doc details{margin:2em^;text-align:left^;margin:auto^;width:min-content^;font-weight:400^;box-shadow:2px 2px 8px -2px^;padding:.5em}#HTML2Doc summary{font-weight:800^;padding:1em^;margin:-.5em}#HTML2Doc #Step2+label{font:400 11px system-ui^;display:inline-block^;width:min-content^;padding:.4em .8em^;border:2px solid transparent^;border-bottom-width:0^;margin:.25em auto^;background-color:hsla^(200,10%%,50%%,.85^)^;background-origin:border-box^;color:#fff^;font-size:100%%^;font-weight:700^;white-space:nowrap^;cursor:pointer^;text-shadow:0 -.05em .05em rgba^(0,0,0,.5^)^;border-radius:.5em^;box-shadow:0 2px rgba^(255,255,255,.7^) inset,0 .5em rgba^(255,255,255,.2^) inset,0 -.2em .5em rgba^(0,0,0,.5^) inset,0 .05em .1em #000}#HTML2Doc #Step2{position:absolute^;clip:rect^(0,0,0,0^)}#HTML2Doc #Step2:checked+label,#HTML2Doc #Step2:active+label{color:#ffc^;animation:glowing 3s infinite linear^;box-shadow:0 -2px rgba^(0,0,0,.7^) inset,0 -.5em rgba^(0,0,0,.2^) inset,0 .2em -.5em rgba^(0,255,255,.5^) inset,0 .05em .1em #fff^;border-color:rgba^(0,0,0,.3^)^;background:#0D0})>HTML2Doc.css
REM ===========================================================================================================

FOR /F "delims=" %%G in (zz-ben.txt) DO (
    SET /A ImgCounter+=1
    SET "LINE!ImgCounter!=%%G"
    )
SET /A ScrollSpeed=%ImgCounter% / %fileCount%
IF "%ScrollSpeed%"=="" ( SET /A SkipTurn=%fileCount% / %ImgCounter%&SET /A ScrollSpeed=1
) ELSE ( SET /A SkipTurn=1&SET /A filecount=%ImgCounter%)
SET /A fileChunks=%filecount% - 1
for /l %%i in (0 1 %fileChunks%) DO (
	SET /A startChunk=!ScrollSpeed!*%%i
	SET /A endChunk=!ScrollSpeed!*%%i + !ScrollSpeed!
	SET Content=%%i
	CALL SET "AddMe=%%LINE!Content!%%"
	for /l %%t in (!startChunk! 1 !endChunk!) DO CALL SET "chunk[%%i]=!AddMe!"
	)
SET /A ImgCounter*=1
REM ===========================================================================================================
 For %%A in ("%initialFile%") do SET initialFile=%%~nA
 FOR /F "tokens=1,2 delims='_'" %%Q in ("%initialFile%") DO SET initialFile=%%Q&SET lang=%%R
SET /A SnapRun=1
SET startLang=%lang%
REM MODE CON LINES=%ScreenHeight% COLS=120
MODE CON LINES=800 COLS=120
COLOR 0F
for /l %%l in (0 1 %ScreenHeight%) DO ECHO:
:BEGIN
REM ===========================================================================================================
REM Create tags at the bottom file
SET /A ToolsAppnd=0
(FOR /f %%T IN (tools_%lang%.tmp) DO (SET /A ToolsAppnd+=1&& ECHO ^<div data-ajax-append^=%%T id^=^"H2D_tool_!ToolsAppnd!^"^>^</div^>)
ECHO ^<div id^=^"HTMLDefinitions^"^>^</div^>^<div id^=^"HTMLLinks^"^>^</div^>)>>batch_shiftheaders.txt
REM ===========================================================================================================
SET /A counter=0
SET /A oldModule=oldTopic=oldSubTopic=oldSubSubTopic=-1
SET isModule=FALSE
SET hasTopic=FALSE
SET hadTopic=FALSE
SET hasSubTopic=FALSE
SET hadSubTopic=FALSE
SET hasSubSubTopic=FALSE
SET EndPart=
(ECHO:>filelist.tmp)
FOR %%a in ("m*_%lang%.html") do ECHO %%~na>>filelist.tmp
FOR /F "tokens=1,2,3,4,5 delims=-_m." %%G in (filelist.tmp) DO (
	IF "%%H"=="%lang%" SET oldFile=m%%G_%lang%.html
	IF "%%I"=="%lang%" SET oldFile=m%%G-%%H_%lang%.html
	IF "%%J"=="%lang%" SET oldFile=m%%G-%%H-%%I_%lang%.html
	IF "%%K"=="%lang%" SET oldFile=m%%G-%%H-%%I-%%J_%lang%.html
	SET /A counter +=1
SET module=00%%G
SET module=!module:~-2!
SET topic=00%%H
SET topic=!topic:~-2!
SET subTopic=00%%I
SET subTopic=!subTopic:~-2!
SET subSubTopic=00%%J
SET subSubTopic=!subSubTopic:~-2!
IF [%%K]==[%lang%] SET finalfilename=%filePrefix%!module!x!topic!x!subTopic!x!subSubTopic!_%lang%.html
IF [%%J]==[%lang%] SET finalfilename=%filePrefix%!module!x!topic!x!subTopic!_%lang%.html
IF [%%J]==[] SET finalfilename=%filePrefix%!module!x!topic!_%lang%.html
IF [%%I]==[] SET finalfilename=%filePrefix%!module!_%lang%.html
IF NOT EXIST !oldFile! (ECHO File not found: !oldFile! to !finalfilename! && PAUSE>NUL && EXIT /B)
REN !oldFile! !finalfilename!
	)
SET oldFile=
REM ===========================================================================================================
SET "spanTag=<span "
REM ===========================================================================================================
REM ===========================================================================================================
(ECHO:>filelist.tmp)
SET /A runningcounter =0
FOR %%a in ("z*_%lang%.html") do ECHO %%~na>>filelist.tmp
FOR /F "tokens=1,2,3,4 delims='x_%filePrefix%.'" %%G in (filelist.tmp) DO (
REM ==== RESET COMPOUND VARIABLES		
		SET HeaderLater="<br>"&	SET EndPart=&	SET PageHierarchy=&		SET Level=& SET HeaderOne=
		SET isModule=FALSE& SET hasTopic=FALSE& SET hasSubTopic=FALSE& SET hasSubSubTopic=FALSE
		SET /A runningcounter +=1
	IF [%%H]==[%lang%] (SET isModule=TRUE& SET /A topic=subtopic=subSubTopic=-1&  SET PageNum=%%G
						FOR /f "tokens=* delims=0" %%a in ("%%G") do SET module=%%a
						IF "!module!"=="" SET module=0
						SET SnapPage=!module!& SET Level=1
						)
	IF [%%I]==[%lang%] (SET hasTopic=TRUE& SET /A subtopic=subSubTopic=-1& SET PageNum=%%Gx%%H
						FOR /f "tokens=* delims=0" %%a in ("%%G") do SET module=%%a
						IF "!module!"=="" SET module=0
						FOR /f "tokens=* delims=0" %%b in ("%%H") do SET topic=%%b
						IF "!topic!"=="" SET topic=0
						SET SnapPage=!module!-!topic!& SET Level=2
						)
	IF [%%J]==[%lang%] (SET hasSubTopic=TRUE& SET /A subSubTopic=-1& SET PageNum=%%Gx%%Hx%%I
						FOR /f "tokens=* delims=0" %%a in ("%%G") do SET module=%%a
						IF "!module!"=="" SET module=0
						FOR /f "tokens=* delims=0" %%b in ("%%H") do SET topic=%%b
						IF "!topic!"=="" SET topic=0
						FOR /f "tokens=* delims=0" %%c in ("%%I") do SET subTopic=%%c
						IF "!subTopic!"=="" SET subTopic=0
						SET SnapPage=!module!-!topic!-!subTopic!& SET Level=3
						)
	IF [%%K]==[%lang%] (SET hasSubSubTopic=TRUE& SET PageNum=%%Gx%%Hx%%Ix%%J
						FOR /f "tokens=* delims=0" %%a in ("%%G") do SET module=%%a
						IF "!module!"=="" SET module=0
						FOR /f "tokens=* delims=0" %%b in ("%%H") do SET topic=%%b
						IF "!topic!"=="" SET topic=0
						FOR /f "tokens=* delims=0" %%c in ("%%I") do SET subTopic=%%c
						IF "!subTopic!"=="" SET subTopic=0
	 					FOR /f "tokens=* delims=0" %%d in ("%%J") do SET subSubTopic=%%d
						IF "!subSubTopic!"=="" SET subSubTopic=0
						SET SnapPage=!module!-!topic!-!subTopic!-!subSubTopic!& SET Level=4
						)
	SET newFile=%filePrefix%!PageNum!_%lang%.html
	SET EndPart=!oldSnapPage!
REM ===========================================================================================================
	IF !module! GTR !oldModule! (
		SET HeaderLater="!spanTag!data-moduleHeader='1' data-header^='m!module!'^>H1 Placeholder^</span^>"
		SET hadTopic=FALSE&		SET hadSubTopic=FALSE&		SET hadSubSubTopic=FALSE
		SET /A oldTopic=oldSubTopic=oldSubSubTopic=-1)
		IF "!isModule!"=="TRUE" (
			IF DEFINED !oldFile! (SET "PageHierarchy=!module!"& SET Level=1) ELSE SET "EndPart=!module!"& SET "PageHierarchy=!module!"& SET Level=1
		REM	SET HeaderOne="^<div class^='page' id^='loadall_!module!'^>^<span id^=^'ModHead_!module!^' class^=^'ModuleFirstHeader^'^>^</span^>^<p class^=^"HTML2DocInfo^"^>SCREEN# !runningcounter! ^(m!PageNum!^) ^</p^>"
		) 

REM ===========================================================================================================
		IF !topic! GTR !oldTopic! (
			SET HeaderLater=!HeaderLater!"!spanTag!data-moduleHeader='2'data-header^='m!module!-!topic!'^>H2 Placeholder^</span^>"
			SET newTopic=TRUE&		SET hadSubTopic=FALSE&		SET hadSubSubTopic=FALSE
			SET /A oldSubTopic=oldSubSubTopic=-1
			IF "!hasTopic!"=="TRUE" ( 
				SET "PageHierarchy=!PageHierarchy!_!topic!"& SET Level=2
			) ELSE 	IF !topic! EQU !oldTopic! SET newTopic=FALSE
		)		
REM ===========================================================================================================
		IF !subTopic! GTR !oldSubTopic! (
			SET HeaderLater=!HeaderLater!"!spanTag!data-moduleHeader='3' data-header^='m!module!-!topic!-!subTopic!'^>H3 Placeholder^</span^>"
			SET newSubTopic=TRUE&	SET hadSubSubTopic=FALSE
			SET /A oldSubSubTopic=-1
		IF "!hasSubTopic!"=="TRUE" SET "PageHierarchy=!PageHierarchy!_!subTopic!"& SET Level=3 		
		)
REM ===========================================================================================================
IF "!hasSubSubTopic!"=="TRUE" (	
SET HeaderLater=!HeaderLater!"!spanTag!data-moduleHeader='4' data-header^=^'m!module!-!topic!-!subTopic!-!subSubTopic!'^>H4 Placeholder^</span^>"
SET PageHierarchy=!PageHierarchy!_!subSubTopic!& SET Level=4	
	
		) 

IF DEFINED oldFile CALL :EndOfFile !EndPart! !oldFile!& REM !oldFile! -----o End of Topic !oldModule!-!oldTopic!     ----- End without new one
		CALL :TopOfFile !SnapPage! !newFile! !Level! !HeaderLater!& REM ----------o SubTopic !module!-!topic!-!subTopic!
		CALL :BeforeFile !newFile!
	SET oldFile=!newFile!
	SET oldSnapPage=!SnapPage!
	SET oldSubSubTopic=!subSubTopic!
	SET oldSubTopic=!subTopic!
	SET oldTopic=!topic!
	SET oldModule=!module!
	SET hadTopic=!hasTopic!
	SET hadSubTopic=!hasSubTopic!
	CALL :LastOfFile !newFile!
SET /A totalCount+=1
IF !totalCount! GEQ !ImgCounter! SET /A totalCount=loadLine=0
SET /A "SkipCheck = !totalCount! %% !SkipTurn!"
IF "!SkipCheck!"=="0" SET /A loadLine+=1
CALL SET "show=%%chunk[!loadLine!]%%"
ECHO:!show!
	)
	CALL :EndOfFile !SnapPage! %newFile%& REM This is after the loop !newFile! -----o End of Topic !oldModule!-!oldTopic!
REM Merge all files into a single file.
COPY %filePrefix%*_%lang%.html %initialFile%_%lang%.html > NUL || (PAUSE && EXIT /B 1)
TYPE batch_shiftheaders.txt >> %initialFile%_%lang%.html || (PAUSE && EXIT /B 1)
TYPE batch_shiftfooters.txt >> %initialFile%_%lang%.html || (PAUSE && EXIT /B 1)
REM Switch language
IF %SnapRun% EQU 1 (
	SET /A SnapRun=2
REM	ERASE /Q html2doc.js > nul
	IF %lang%==fr (
		SET lang=en
		GOTO :BEGIN 
		) ELSE (
		SET lang=fr
		GOTO :BEGIN))
REM ===========================================================================================================
REM ===========================================================================================================
ERASE /Q filelist.tmp > nul
ERASE /Q %filePrefix%*.html > nul
ERASE /Q batch_shiftheaders.txt > nul
ERASE /Q batch_shiftfooters.txt > nul
ERASE /Q zz-ben.txt > nul
MOVE *.html ..\%rootDir% > NUL
REM MOVE *.js ..\%rootDir% > NUL
MOVE HTML2Doc.css ..\%rootDir% > NUL
cd ..
RMDIR temp /S /Q
IF %loadLine% LSS %ImgCounter% (
	FOR /L %%F in (%loadLine% 1 %ImgCounter%) DO (
    SET num=%%F
    CALL SET "show=%%chunk[!num!]%%"
    ECHO:!show!
    ))
ECHO:      DONE! VOILA!
ECHO:
SET StartSite=http:%uncname%index_%startLang%.html
start "" /wait /MAX "chrome" -noframemerging %StartSite%
ENDLOCAL
EXIT /B
REM END of Program
REM ===========================================================================================================
:BeforeFile
TYPE %1 >> %1.tmp
MOVE /y "%1.tmp" "%1" > NUL
EXIT /B
:TopOfFile
SET PASS=%4
SET Placeholder=!PASS:"=!
(
ECHO:^<^^!-- %1 --^>
ECHO:^<section class=^"H2DPage^" id=^"loadall_m%1^" data-level^=^"%3^"^>!Placeholder!
ECHO ^<p class^=MsoNormal^>^<span style^='display:none^;mso-hide:all'^>Snap Page m%1^<o:p^>^</o:p^>^</span^>^</p^>
ECHO:^<span data-class=^"Level%3^" id=^"subsection_%1^"^>^</span^>
ECHO:)>>%2.tmp
EXIT /B
:EndOfFile
(
ECHO:^</section^>
ECHO:^<^^!-- END OF %1 --^>
ECHO:)>> %2
REM SETLOCAL EnableDelayedExpansion
EXIT /B
:LastOfFile
(
ECHO:^</section^>)>> %1
EXIT /B
