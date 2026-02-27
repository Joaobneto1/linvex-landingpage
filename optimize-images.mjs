import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// ES Module equivalent for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'src', 'assets');
const MAX_WIDTH = 1200; // Resize large images
const QUALITY = 80; // Compress quality (0-100)

async function optimizeImages() {
  console.log(`Buscando imagens na pasta: ${imagesDir}`);

  try {
    const files = await fs.promises.readdir(imagesDir);
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.webp') || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg')
    );

    if (imageFiles.length === 0) {
      console.log('Nenhuma imagem encontrada.');
      return;
    }

    console.log(`Encontradas ${imageFiles.length} imagens. Iniciando otimização...\n`);

    for (const file of imageFiles) {
      const inputPath = path.join(imagesDir, file);
      
      // We will save optimized files with a .webp extension, and add "-optimized" to original names temporarily
      const filenameWithoutExt = path.parse(file).name;
      const tempOutputPath = path.join(imagesDir, `${filenameWithoutExt}-optimized.webp`);

      try {
        const metadata = await sharp(inputPath).metadata();
        
        let sharpInstance = sharp(inputPath);

        // Se a imagem for maior que o max width, redimensionar
        if (metadata.width && metadata.width > MAX_WIDTH) {
          sharpInstance = sharpInstance.resize({
            width: MAX_WIDTH,
            withoutEnlargement: true,
          });
        }

        // Converter para WebP otimizado com a qualidade definida
        await sharpInstance
          .webp({ quality: QUALITY, effort: 6 }) // Effort 6 means max compression effort (slower but smaller size)
          .toFile(tempOutputPath);

        // Replace original files with optimized versions if the original was .webp
        if (file.toLowerCase().endsWith('.webp')) {
           // Delete the original webp
           await fs.promises.unlink(inputPath);
           // Rename the optimized one to the original name
           await fs.promises.rename(tempOutputPath, inputPath);
           console.log(`✅ Otimizada: ${file}`);
        } else {
           console.log(`✅ Convertida e otimizada: ${file} -> ${filenameWithoutExt}-optimized.webp`);
        }

      } catch (err) {
        console.error(`❌ Erro ao otimizar ${file}:`, err);
      }
    }

    console.log('\n🎉 Otimização concluída com sucesso!');
  } catch (err) {
    console.error('Erro ao ler a pasta de imagens:', err);
  }
}

optimizeImages();
