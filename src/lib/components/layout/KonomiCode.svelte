<!-- KonamiCode.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { toast } from 'svelte-sonner';
    import { Gamepad2 } from 'lucide-svelte';
  
    const KONAMI_CODE = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a'
    ];
  
    let keySequence: string[] = [];
    let lastKeyTime = Date.now();
  
    function handleKeydown(event: KeyboardEvent) {
      const currentTime = Date.now();
  
      // Reset sequence if too much time has passed (3 seconds)
      if (currentTime - lastKeyTime > 3000) {
        keySequence = [];
      }
      lastKeyTime = currentTime;
  
      // Add the key to the sequence
      keySequence.push(event.key);
  
      // Only keep the last N keys where N is the length of the Konami code
      if (keySequence.length > KONAMI_CODE.length) {
        keySequence = keySequence.slice(-KONAMI_CODE.length);
      }
  
      // Check if the sequence matches
      if (keySequence.join(',') === KONAMI_CODE.join(',')) {
        keySequence = []; // Reset the sequence
        showEasterEgg();
      }
    }
  
    function showEasterEgg() {
      toast.success(
        "🎮 Konami Code Activated!", 
        {
          duration: 5000,
          icon: Gamepad2,
          style: "background: linear-gradient(to right, #c026d3, #db2777);",
          description: "Thank you for being a person of culture! 🎉",
        }
      );
  
      // Optional: Add some fun confetti effect
      if (typeof window !== 'undefined') {
        import('canvas-confetti').then(confetti => {
          confetti.default({
            particleCount: 100,
            spread: 70,
            ticks: 300,
            origin: { y: 0.6 },
            colors: ['#c026d3', '#db2777', '#8b5cf6'],
            disableForReducedMotion: true,
          });
        });
      }
    }
  
    onMount(() => {
      window.addEventListener('keydown', handleKeydown);
      return () => {
        window.removeEventListener('keydown', handleKeydown);
      };
    });
  </script>
  
  <!-- Component doesn't render anything visible -->
  