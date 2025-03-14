---
title: Git入门指南：工作流与常用命令
date: 2025-03-14
---

## Git入门指南：工作流与常用命令

在现代软件开发中，版本控制系统是不可或缺的工具，而Git无疑是其中最受欢迎的一个。本文将带你了解Git的基本工作流和常用命令，帮助你快速上手。

### Git工作流

Git的工作流主要围绕以下几个核心概念展开：**工作区**、**暂存区**、**本地仓库**和**远程仓库**。理解它们之间的关系是掌握Git的关键。

#### 1. 工作区（Working Directory）
工作区是你当前项目的文件夹，包含了所有项目文件和目录。你在工作区中进行代码编写和修改。

#### 2. 暂存区（Staging Area）
暂存区是一个临时区域，用于存放你准备提交到本地仓库的更改。通过`git add`命令，你可以将工作区的更改添加到暂存区。

#### 3. 本地仓库（Local Repository）
本地仓库保存了项目的完整历史记录，包括所有的提交和分支。你可以通过`git commit`将暂存区的内容提交到本地仓库。

#### 4. 远程仓库（Remote Repository）
远程仓库通常托管在服务器上（如GitHub、GitLab等），用于团队协作和代码备份。你可以通过`git push`将本地仓库的内容推送到远程仓库，或者通过`git pull`从远程仓库拉取最新的更改。

### Git常用命令

掌握以下常用命令，可以帮助你高效地使用Git进行版本控制。

#### 1. 初始化仓库
在当前目录初始化一个新的Git仓库。

```bash
git init
```

#### 2. 克隆远程仓库
将远程仓库的内容克隆到本地。

```bash
git clone [远程仓库地址]
```

#### 3. 添加文件到暂存区
将指定文件添加到暂存区。也可以使用`git add .`添加当前目录下所有更改。

```bash
git add [文件名]
```

#### 4. 提交更改到本地仓库
将暂存区的内容提交到本地仓库，并附上描述性的提交信息。

```bash
git commit -m "提交信息"
```

#### 5. 查看状态
查看当前工作区和暂存区的状态，了解哪些文件被修改、添加或删除。

```bash
git status
```

#### 6. 查看更改内容
查看工作区与暂存区之间的差异。

```bash
git diff
```

#### 7. 查看日志
查看项目的提交历史记录。

```bash
git log
```

#### 8. 推送到远程仓库
将本地仓库的更改推送到远程仓库。通常使用git push origin main。

```bash
git push [远程仓库名称] [分支名称]
```

#### 9. 拉取远程仓库的更改
从远程仓库拉取最新的更改并合并到本地分支。

```bash
git pull [远程仓库名称] [分支名称]
```

#### 10. 创建分支
创建一个新的分支。

```bash
git branch [分支名称]
```

#### 11. 切换分支
切换到指定分支。也可以使用git `switch [分支名称]`（Git 2.23+）。

```bash
git checkout [分支名称]
```

#### 12. 合并分支
将指定分支的更改合并到当前分支。

```bash
git merge [分支名称]
```

#### 13. 删除分支
删除本地分支。

```bash
git branch -d [分支名称]
```

#### 14. 查看远程仓库信息
查看当前配置的远程仓库地址。

```bash
git remote -v
```

#### 15. 添加远程仓库
添加一个新的远程仓库。

```bash
git remote add [远程仓库名称] [远程仓库地址]
```

### 示例工作流
以下是一个简单的Git工作流示例，展示了如何在实际开发中使用Git：

#### 1. 克隆远程仓库

```bash
git clone https://github.com/your-repo.git
cd your-repo
```

#### 2. 创建并切换到新分支

```bash
git branch feature-branch
git checkout feature-branch
```

#### 3. 进行代码更改并添加到暂存区

```bash
git add .
```

#### 4. 提交更改到本地仓库

```bash
git commit -m "Add new feature"
```

#### 5. 推送到远程仓库

```bash
git push origin feature-branch
```

#### 6. 在远程仓库创建Pull Request（PR）并合并

#### 7. 切换回主分支并拉取最新更改

```bash
git checkout main
git pull origin main
```