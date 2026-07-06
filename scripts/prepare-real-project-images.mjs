import { readdir, mkdir, rm } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import sharp from "sharp";

const sourceDir =
  process.env.VIETFACTORY_IMAGE_SOURCE ??
  "C:\\Users\\ACER\\OneDrive\\Desktop\\anh";
const outputDir = join(process.cwd(), "public", "assets", "nang-luc-thuc-te");
const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const ignoredDirectories = new Set(["node_modules"]);

const manifest = [
  {
    source: "z8004093267080_5612a5ce6b4c727751ea6d9e3cf878a6.jpg",
    output: "kho-lanh-bao-quan-hang-hoa-01.webp",
  },
  {
    source: "z8004095947256_91d914bc36a643ba6a879c95daff83fa.jpg",
    output: "ke-pallet-kho-hang-01.webp",
  },
  {
    source: "z8004100500431_369cd0abd98f855f41b8163e34613e18.jpg",
    output: "he-thong-dan-lanh-cong-nghiep-01.webp",
    extract: { left: 0, top: 0, width: 2240, height: 1920 },
  },
  {
    source: "z8004101333546_458fc0baf9004b72649fd12be2339e02.jpg",
    output: "phong-sach-panel-cach-nhiet-01.webp",
  },
  {
    source: "z8004102289681_f9f3cf2fd42adc7b46a27775c3ad43d8.jpg",
    output: "thiet-bi-san-xuat-khu-vuc-sach-01.webp",
  },
  {
    source: "z8004105061134_5638646d56954116ed936dee832583a8.jpg",
    output: "hanh-lang-phong-sach-gmp-01.webp",
  },
  {
    source: "z8004105578484_d0fa1d6a8bf046ddea321422006be4f3.jpg",
    output: "hanh-lang-phong-sach-panel-02.webp",
  },
  {
    source: "z8004107479136_0f96de74cd086af0c1abae1e5129cdbc.jpg",
    output: "thiet-bi-inox-phong-sach-01.webp",
  },
  {
    source: "z8004108230615_5f0fdbab99551d02cacebc6b26092d37.jpg",
    output: "day-chuyen-san-xuat-phong-sach-01.webp",
  },
  {
    source: "z8004110566235_bea1395f59888a36736a4535627df4e7.jpg",
    output: "ke-pallet-kho-hang-cao-tang-01.webp",
  },
  {
    source: "z8004111331769_817fcd79835f7d9ab1028775717ce80e.jpg",
    output: "ke-pallet-kho-lanh-cao-tang-02.webp",
    extract: { left: 0, top: 0, width: 1536, height: 920 },
  },
  {
    source: "z8004113433622_7c91f53d08facd7f3728712f91dd26c5.jpg",
    output: "xe-nang-van-chuyen-thiet-bi-01.webp",
    faceBlurs: [{ left: 1770, top: 1410, width: 140, height: 150 }],
  },
  {
    source: "z8004116002366_cf292847f3217c1cded370bce2877c6f.jpg",
    output: "xe-nang-boc-xep-hang-02.webp",
    faceBlurs: [{ left: 285, top: 1190, width: 150, height: 150 }],
  },
  {
    source: "z8004116066310_baef5873f8d360ca201a3417fa544689.jpg",
    output: "xe-nang-van-chuyen-hang-03.webp",
    faceBlurs: [{ left: 1700, top: 1235, width: 160, height: 160 }],
  },
  {
    source: "z8004116373086_9476f743834c133565a0ac9fc678fc6a.jpg",
    output: "dan-ngung-thiet-bi-lanh-01.webp",
  },
  {
    source: "z8004116527248_2c36dc624b3c8de60bde9fdf9f5203cd.jpg",
    output: "cum-thiet-bi-lanh-trung-tam-01.webp",
  },
  {
    source: "z8004120714387_312af75d5c3e59d224239a74cc6da253.jpg",
    output: "thi-cong-dan-lanh-kho-lanh-01.webp",
  },
  {
    source: "z8004121266482_d6b38a970b48d3606731fcc105d8d5a4.jpg",
    output: "cum-may-lanh-cong-nghiep-02.webp",
  },
  {
    source: "z8004121804759_244124b4db55c0706a80c8a33ce5f16c.jpg",
    output: "lap-dat-dan-lanh-cong-nghiep-02.webp",
  },
];

async function discoverImages(directory) {
  const images = [];
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      images.push(...(await discoverImages(fullPath)));
      continue;
    }

    if (entry.isFile() && allowedExtensions.has(extname(entry.name).toLowerCase())) {
      images.push(fullPath);
    }
  }

  return images;
}

async function blurRegions(input, regions) {
  let imageBuffer = await sharp(input)
    .rotate()
    .jpeg({ quality: 95, chromaSubsampling: "4:4:4" })
    .toBuffer();

  for (const region of regions) {
    const blurredRegion = await sharp(imageBuffer)
      .extract(region)
      .blur(14)
      .png()
      .toBuffer();
    imageBuffer = await sharp(imageBuffer)
      .composite([{ input: blurredRegion, left: region.left, top: region.top }])
      .jpeg({ quality: 95, chromaSubsampling: "4:4:4" })
      .toBuffer();
  }

  return imageBuffer;
}

async function prepareImage(entry, inputPath) {
  const source = entry.faceBlurs
    ? await blurRegions(inputPath, entry.faceBlurs)
    : inputPath;
  let pipeline = sharp(source).rotate();

  if (entry.extract) {
    pipeline = pipeline.extract(entry.extract);
  }

  const outputPath = join(outputDir, entry.output);
  const info = await pipeline
    .resize({
      width: 1920,
      height: 1920,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 78, effort: 5, smartSubsample: true })
    .toFile(outputPath);

  return {
    file: entry.output,
    width: info.width,
    height: info.height,
    size: info.size,
  };
}

const discovered = await discoverImages(sourceDir);
const discoveredByName = new Map(
  discovered.map((path) => [basename(path), path])
);
const expectedNames = new Set(manifest.map((entry) => entry.source));
const unhandled = discovered.filter((path) => !expectedNames.has(basename(path)));
const missing = manifest.filter((entry) => !discoveredByName.has(entry.source));

if (unhandled.length > 0 || missing.length > 0) {
  throw new Error(
    [
      unhandled.length
        ? `Ảnh chưa có trong manifest: ${unhandled.map(basename).join(", ")}`
        : "",
      missing.length
        ? `Ảnh nguồn bị thiếu: ${missing.map((entry) => entry.source).join(", ")}`
        : "",
    ]
      .filter(Boolean)
      .join("\n")
  );
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const outputs = [];
for (const entry of manifest) {
  outputs.push(
    await prepareImage(entry, discoveredByName.get(entry.source))
  );
}

const totalBytes = outputs.reduce((sum, image) => sum + image.size, 0);
console.table(
  outputs.map((image) => ({
    file: image.file,
    dimensions: `${image.width}x${image.height}`,
    kilobytes: Math.round(image.size / 1024),
  }))
);
console.log(
  `Đã tối ưu ${outputs.length} ảnh, tổng dung lượng ${(
    totalBytes /
    1024 /
    1024
  ).toFixed(2)} MB.`
);
