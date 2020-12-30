const vscode = require('vscode');
const  fs = require('fs');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, extension "fortran-config-ini" is now active!');

	let disposable = vscode.commands.registerCommand('fortran-config-ini.inisetting', function () {
		var Mainpath = __dirname
		var WaitingCopy = Mainpath + '\\settingfile\\.vscode'
		let folderPath = vscode.workspace.rootPath;
		var dest = folderPath + '\\.vscode'
		console.log(WaitingCopy)
		
		var stat=fs.stat;
		var copy=function(src,dst){
			fs.readdir(src,function(err,paths){
				console.log(paths)
				if(err){
					throw err;
				}
				paths.forEach(function(path){
					var _src=src+'/'+path;
					var _dst=dst+'/'+path;
					var readable;
					var writable;
					stat(_src,function(err,st){
						if(err){
							throw err;
						}
					
						if(st.isFile()){
							readable=fs.createReadStream(_src);
							writable=fs.createWriteStream(_dst);
							readable.pipe(writable);
						}else if(st.isDirectory()){
							exists(_src,_dst,copy);
						}
					});
				});
			});
		}
	
		var exists=function(src,dst,callback){
			fs.exists(dst,function(exists){
				if(exists){
					callback(src,dst);
				}else{
					fs.mkdir(dst,function(){
						callback(src,dst)
					})
				}
			})
		}
	
		exists(WaitingCopy,dest,copy)
		vscode.window.showInformationMessage('Fortran 项目配置已经成功配置！');
		vscode.window.showInformationMessage('FORTRAN project configuration has been successfully configured!');
	});
	context.subscriptions.push(disposable);
}
exports.activate = activate;


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
