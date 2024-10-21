<script>
	import { Alert, AlertDescription, AlertTitle } from "$lib/components/ui/alert";
	import PlanCard from "$lib/components/ui-giorgio/plan-card/plan-card.svelte";
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "$lib/components/ui/accordion";


	import plans from '$lib/data/plans.json';
  import faqs from '$lib/data/faqs.json';
</script>


<main class="flex-grow">
    <section class="px-4 py-16 bg-gradient-to-b from-purple-900 to-indigo-900">
        <div class="container mx-auto">
            <h1 class="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our Hosting Plans</h1>
            <p class="mb-12 text-2xl text-center text-purple-200 mb-16">Choose the perfect plan for your Minecraft adventure</p>
    
            <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {#each plans as plan}
                  <PlanCard {plan} cardHover={false}  />
                {/each}
              </div>
    
            <Alert class="mt-16 bg-black bg-opacity-50 backdrop-blur-md border-purple-500">
                <AlertTitle class="text-purple-100">All plans include:</AlertTitle>
                <AlertDescription>
                    <ul class="list-disc list-inside mt-2 text-purple-200">
                        <li>Unlimited server slots</li>
                        <li>Variable NVMe storage space</li>
                        <li>Free subdomain</li>
                        <li>Easy mod installation</li>
                        <li>Full FTP access</li>
                    </ul>
                </AlertDescription>
            </Alert>
        </div>
        
    </section>

    
		<section class="mt-24">
			<h2 class="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Frequently Asked Questions</h2>
			<Accordion class="w-full max-w-3xl mx-auto">
				{#each faqs as faq, index}
					<AccordionItem value="item-{index}">
						<AccordionTrigger class="text-purple-200 hover:text-purple-100">{faq.question}</AccordionTrigger>
						<AccordionContent class="text-purple-300">
							{faq.answer}
						</AccordionContent>
					</AccordionItem>
				{/each}
			</Accordion>
		</section>
</main>