# 正确认识文件扩展名

::: warning 内容有争议
当前页面下的文章可能在部分内容上有争议，社团已经要求发布者进行修改并对争议信息进行处理，对于文章中有删除线的信息，请进行辨别。[社团如何处理争议信息？](https://sysyz-itcom.github.io/docs/docs/ref.html)
:::

发布者：Ovoeing

## 1.压缩包
zip，rar，7z，tar，gzip，bzip2，xz，ace，arj，cab，iso

压缩包是对一个或多个文件通过压缩算法打包成一个，一般用来节约空间和方便传播文件，需要使用文件管理器解压（部分软件自带解压功能，但还是推荐使用MT管理器，ES文件管理器，质感文件管理等第三方文件管理器）

## 2.安装包

安卓安装包：apk，apks

鸿蒙安装包：hap

IOS安装包：ipa，deb，~~pxl~~

Windows安装包：exe，msi，appx，msix

Mac安装包：dmg，pkg，iso，~~app~~，ipsw

Linux安装包：rpm，deb，appimage，snap，flatpak

安装包是软件程序的文件集合，用于在设备上安装和运行文件，不同设备的安装包一般情况下是不通用的，需要注意甄别（值得注意的是，QQ和微信会将上传的apk文件后缀改为apk.1，这时只需要重命名将.1去掉或者使用MT管理器这种支持直接安装的软件即可）

## 3.文件

视频格式:mp4，avi，wmv，mpeg，flv，mov，3gp，mkv，h.265，vp9，webm，m3u8

音频格式:mp3，aac，ogg，flac，wav，alac，dsd，m4a，wma，aiff，~~cda~~，midi，opus

图片格式:jpeg，png，bmp，gif，tiff，webp，svg，~~ram~~，psd，ico，heic，dng

文档数据交换格式:txt，pdf，doc/docx，odt，rtf，html，epub，xls/xlsx，ods，ppt/pptx，~~xodp~~，md，latex，csv，xml，json，yaml，asn.1，edi，wpd，mobi，azw

值得注意的是，一部分文件格式可以互相转换或者单向转换

## 4.代码格式

代码文件通常根据编程语言的不同而有不同的文件后缀名。以下是一些常见的编程语言及其代码文件的后缀名：

C -  .c 

C++ -  .cpp ,  .cc ,  .cxx 

C# -  .cs 

Java -  .java 

JavaScript -  .js 

Python -  .py 

Ruby -  .rb 

PHP -  .php 

Swift -  .swift 

Objective-C -  .m 

Go -  .go 

Rust -  .rs 

TypeScript -  .ts 

Kotlin -  .kt 

Scala -  .scala 

Perl -  .pl 

Haskell -  .hs 

Lua -  .lua 

Erlang -  .erl 

Clojure -  .clj 

Dart -  .dart 

Elixir -  .ex 

F# -  .fs 

Visual Basic .NET -  .vb 

Shell Script -  .sh 

PowerShell -  .ps1 

MATLAB -  .m 

Julia -  .jl 

R -  .r 

Groovy -  .groovy 


此外，还有一些文件后缀名用于特定的代码文件类型，例如：

HTML -  .html 

CSS -  .css 

SQL -  .sql 

Makefile -  Makefile  或  .make 

配置文件 -  .conf ,  .ini ,  .yaml ,  .json  等

安卓执行文件 - .dex

安卓软件资源索引文件 - .arsc

这些后缀名有助于开发环境和工具识别文件类型，从而提供语法高亮、代码提示等特性。

## 5.其他格式

dll:动态链接库
iso:光盘镜像文件

so:共享对象

sys:系统文件

hwt:华为/荣耀主题文件

mtz:小米/红米主题文件

med:OPPO/OnePlus主题文件

itz:VIVO/IQOO主题文件

ptk:索尼主题文件

theme:三星主题文件

apk:Pixel主题文件/第三方启动器文件

当然，为了保护信息和版权，部分文件会删去后缀或者进行加密，混淆，而这些一般人接触不到，暂且不做解释