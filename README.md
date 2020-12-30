For a brief introduction in English, please see it in the last half of this introduction. Thanks.

# 适用于 Visual Studio Code的 gfortran调试文件

## 使用说明

本插件需以下插件配合使用

fortran 
https://marketplace.visualstudio.com/items?itemName=Gimly81.fortran

Fortran Breakpoint Support
https://marketplace.visualstudio.com/items?itemName=ekibun.fortranbreaker

FORTRAN IntelliSense
https://marketplace.visualstudio.com/items?itemName=hansec.fortran-ls

Modern Fortran
https://marketplace.visualstudio.com/items?itemName=krvajalm.linter-gfortran

使用打开一个含有fortran文件的文件夹，打开一个fortran文件（后缀名.for或者.f90）。点击编辑器右上角的烧瓶，即可在本文件夹添加调试配置文件。

![配置](https://raw.sevencdn.com/shenyulu/images/main/img/forimg.png)

添加完成后，按键盘ctrl+F5运行代码。

## 示例代码

```fortran
program MyFortranSetting
WRITE(*,*) 'Hello! My Fortran Setting!'
READ(*,*)
end
```

## .vscode 文件夹中各个文件功能介绍
### tasks.json
启动 gfortran.exe对本文件夹下的 fortran代码进行编译

### launch.json

调试参数文件。

> 修改*externalConsole*值可调整如何最后展示编译后程序。若值为True，则单独打开一个控制台窗口；若值为False，则在内置控制台窗口打开。

### settings.json

减少按下Enter键时，在“插入新行”和“接受命令”的歧义。




# Gfortran Debugging File for Visual Studio Code

## Instructions
This plug-in needs the following plug-ins to work together

fortran 
https://marketplace.visualstudio.com/items?itemName=Gimly81.fortran

Fortran Breakpoint Support
https://marketplace.visualstudio.com/items?itemName=ekibun.fortranbreaker

FORTRAN IntelliSense
https://marketplace.visualstudio.com/items?itemName=hansec.fortran-ls

Modern Fortran
https://marketplace.visualstudio.com/items?itemName=krvajalm.linter-gfortran

Open a FORTRAN file (suffix. for or. f90) by opening a folder containing FORTRAN files. Click the flask in the upper right corner of the editor to add debugging configuration files in this folder.

![Setting](https://raw.sevencdn.com/shenyulu/images/main/img/forimg.png)

 After adding, press the keyboard Ctrl + F5 to run the code.

## Demo Code

```fortran
program MyFortranSetting
WRITE(*,*) 'Hello! My Fortran Setting!'
READ(*,*)
end
```

## Introduction to the functions of each file in the folder of .vscode
### tasks.json
Start up gfortran.exe and compile the FORTRAN code in this folder.

### launch.json

Debug parameter file.

> Modify the value of *externalconsole* to adjust the behavior of generated program how to display it at last. If the value is true, a external console window will be opened, yet if the value is false, it will be opened in the built-in console window. 

### settings.json

Reduce the ambiguity between *insert new line* and *accept command* when pressing ENTER.