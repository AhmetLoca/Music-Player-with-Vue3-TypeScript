export const removeExtension = (fileName: string) : string => {
 const nameArray = fileName.split('.');
 nameArray.pop();
 return nameArray.join('.');
}