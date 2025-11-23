import React from 'react';
import ReactDOM from 'react-dom/client';
import Slider from './Slider';

// Keep track of mounted roots keyed by DOM element or id
const roots = new Map();

function resolveTarget(target) {
  if (typeof target === 'string') return document.querySelector(target);
  return target;
}

export function mount(target, config) {
  const el = resolveTarget(target);
  if (!el) {
    console.error('[RemoteSlider] mount target not found:', target);
    return null;
  }
  // If already mounted, update
  if (roots.has(el)) {
    const { root } = roots.get(el);
    root.render(<Slider config={config} />);
    return el;
  }
  const root = ReactDOM.createRoot(el);
  root.render(<Slider config={config} />);
  roots.set(el, { root });
  return el;
}

export function unmount(target) {
  const el = resolveTarget(target);
  if (!el) return;
  if (roots.has(el)) {
    const { root } = roots.get(el);
    root.unmount();
    roots.delete(el);
  }
}

export function remount(target, config) {
  unmount(target);
  return mount(target, config);
}

export default { mount, unmount, remount };
