import { useEffect, useRef } from 'react';
import { usePage } from '../contexts/PageContext.tsx';

export const useLayerNavigation = (
  sections: string[],
  pageRef: React.RefObject<HTMLDivElement | null>
) => {
  const { activeLayer, setLayers, setActiveLayer, targetLayer, setTargetLayer } = usePage();

  // Register layers
  useEffect(() => {
    setLayers((prev: string[]) => {
      // Only update if arrays are different
      if (prev.length === sections.length && prev.every((val, index) => val === sections[index])) {
        return prev;
      }
      return sections;
    });
    return () => setLayers([]);
  }, [setLayers, sections]);

  // Scroll to target layer with offset
  useEffect(() => {
    if (targetLayer) {
      const element = document.getElementById(targetLayer);
      if (element && pageRef.current) {
        // Manual scroll with offset to avoid sticky top feeling
        const yOffset = 100; // 100px top buffer
        const container = pageRef.current;
        const elementPosition = element.getBoundingClientRect().top;
        const containerPosition = container.getBoundingClientRect().top;
        const offsetPosition = elementPosition - containerPosition + container.scrollTop - yOffset;

        container.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        const timer = setTimeout(() => setTargetLayer(null), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [targetLayer, setTargetLayer, pageRef]);

  // Track active layer
  const activeLayerRef = useRef(activeLayer);
  useEffect(() => {
    activeLayerRef.current = activeLayer;
  }, [activeLayer]);

  // Track active layer on scroll
  useEffect(() => {
    if (!pageRef.current) return;

    // Using Intersection Observer to detect which section is in view
    const observerOptions = {
      root: pageRef.current,
      rootMargin: '-20% 0px -50% 0px', // Active when element is in the middle-ish
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      // Collect all currently intersecting entries
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);

      // Only update if we have intersecting sections and the first one is different from current
      if (intersectingEntries.length > 0) {
        const newActiveId = intersectingEntries[0].target.id;
        if (activeLayerRef.current !== newActiveId) {
          setActiveLayer(newActiveId);
        }
      }
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, pageRef, setActiveLayer]);
};
