
export function parseCloudinaryJson(cloudinaryJson) {
  if (!cloudinaryJson?.resources) return [];

  const slidesMap = new Map(); // key: position, value: slide
  let mainSlide = null;

  cloudinaryJson.resources.forEach((resource) => {
    let alt = resource.context?.custom?.alt || '';
    if (!alt && resource.metadata) {
      const altMeta = resource.metadata.find(m => m.external_id === 'alt' || m.label.toLowerCase() === 'alt');
      if (altMeta) alt = altMeta.value;
    }

    let position = 0;
    if (resource.metadata) {
      const posMeta = resource.metadata.find(m => m.external_id === 'sfcc-gallery-position');
      if (posMeta) position = parseInt(posMeta.value, 10);
    }

    let isMain = false;
    if (resource.metadata) {
      const mainMeta = resource.metadata.find(m => m.external_id === 'sfcc-is-main');
      if (mainMeta) isMain = mainMeta.value?.value === 'True';
    }

    const slide = {
      id: resource.asset_id,
      src: resource.secure_url || resource.url || resource.public_id,
      type: resource.resource_type || 'image', // 'image' or 'video'
      width: resource.width,
      height: resource.height,
      format: resource.format,
      alt,
      position,
      isMain,
      version: resource.version || 0,
    };

    if (isMain) {
      if (!mainSlide || mainSlide.version < slide.version) {
        mainSlide = slide;
      }
    } else {
      if (!slidesMap.has(position) || slidesMap.get(position).version < slide.version) {
        slidesMap.set(position, slide);
      }
    }
  });

  const slides = Array.from(slidesMap.values()).sort((a, b) => a.position - b.position);
  if (mainSlide) slides.unshift(mainSlide);

  return slides;
}
export default parseCloudinaryJson;