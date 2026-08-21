import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = 'C:\\Users\\Pro User\\Desktop\\博客第二阶段\\extracted';
const dstDir = path.resolve(__dirname, '../public/assets/speedtests');

if (!fs.existsSync(dstDir)) {
  fs.mkdirSync(dstDir, { recursive: true });
}

const map = {
  '光速云-节点测速实测.png': 'guangsucloud.png',
  '星岛梦-节点测速实测.png': 'xingdaomeng.png',
  '飞猫云-节点测速实测.png': 'feimaocloud.png',
  'U1S1-节点测速实测.png': 'u1s1.png',
  '唯兔云-节点测速实测.png': 'weitucloud.png',
  '灵猫网络-节点测速实测.png': 'lingmaonet.png',
  '极连云-节点测速实测.png': 'jilianyun.png',
  '宇宙云-节点测速实测.png': 'yuzhoucloud.png',
  '光年梯-节点测速实测.png': 'guangnianti.png',
  '一翻云-节点测速实测.png': 'yifanyun.png',
  '二猫云-节点测速实测.png': 'ermaoyun.png',
  'SOGO云-节点测速实测.png': 'sogoyun.png',
  '可信云-节点测速实测.png': 'kexinyun.png',
  '速界-节点测速实测.png': 'sujie.png',
  '快狸-节点测速实测.png': 'kuaili.png',
  '全球云-节点测速实测.png': 'quanqiuyun.png',
};

for (const [srcName, dstName] of Object.entries(map)) {
  const srcFile = path.join(srcDir, srcName);
  const dstFile = path.join(dstDir, dstName);
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, dstFile);
    console.log(`Copied: ${srcName} -> ${dstName}`);
  } else {
    console.warn(`Not found: ${srcFile}`);
  }
}
