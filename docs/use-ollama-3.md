# 使用 Ollama 运行本地大模型

Ollama 是一个本地 LLM 服务器，它允许您运行本地大模型，而无需使用云服务。

## 安装框架

### 对于Windows用户和MacOS用户

您需要在 [Ollama官网](https://ollama.com/download) 下载框架。运行前注意先修改模型下载存放目录，请参见本页下方的常见问题。安装完成后，您需要按住Windows徽标和R键打开cmd（命令提示符），输入“Ollama”来检测是否安装成功，如果成功，会弹出如下内容：

```bash
Usage:
  ollama [flags]
  ollama [command]

Available Commands:
  serve       Start ollama
  create      Create a model from a Modelfile
  show        Show information for a model
  run         Run a model
  pull        Pull a model from a registry
  push        Push a model to a registry
  list        List models
  ps          List running models
  cp          Copy a model
  rm          Remove a model
  help        Help about any command

Flags:
  -h, --help      help for ollama
  -v, --version   Show version information

Use "ollama [command] --help" for more information about a command.
```
如果没有弹出，请重复安装内容或检查下载内容是否被浏览器拦截。

### 对于Linux用户

::: info Oops……
这里没有您想要的东西。如果您有需要，请在 “关于文档” 页面提交 issue 给我们。
:::

## 安装模型

### 对于Windows用户和MacOS用户

首先想好您需要安装的大模型，这里我们以通义千问大模型（qwen2）作为演示对象。

您需要在命令提示符或者终端中输入以下指令安装大模型，前提是您已正确安装Ollama：

```bash
ollama run qwen2
```

等待安装完成后，便可开始对话。

### 对于Linux用户

::: info Oops……
这里没有您想要的东西。如果您有需要，请在 “关于文档” 页面提交 issue 给我们。
:::

## 模型支持

官方支持的模型，可以在 [Ollama | Library](https://ollama.com/library) 上面找到。

## 常见问题

::: details 模型下载后被保存在哪里？
默认情况下，模型下载后一般被保存在以下位置：
- macOS: ~/.ollama/models
- Linux: /usr/share/ollama/.ollama/models #作为系统服务启动时
- Linux: /home//.ollama/models #当前用户启动时
- Windows: C:\Users\\.ollama\models
:::

::: details Windows用户如何修改下载模型的默认存放目录？
- 只设置当前用户：setx OLLAMA_MODELS "D:\ollama_model" 
- 为所有用户设置：setx OLLAMA_MODELS "D:\ollama_model" /M

完成设置后，请重启 Ollama 服务和终端。
:::

::: details 自定义模型创建后被保存在哪里？
- 模型文本：/home//.ollama/models/blobs
- 配置文件：/home//.ollama/models/manifests/registry.ollama.ai/library/qwen0_5b/latest
:::

::: details WebUI 接入
官方提供了多种WebUI接入方法，请您访问 [项目](https://github.com/ollama/ollama) 的 **Community Integrations** 部分查看详情，如您无法打开网址，请尝试修改您的网络配置或者更改网络连接状态。
:::

::: details Linux系统中如何卸载Ollama？
请参见官方文档中有关 [Linux系统卸载Ollama](https://github.com/ollama/ollama/blob/main/docs/linux.md) 的部分，如您无法打开网址，请尝试修改您的网络配置或者更改网络连接状态。
:::