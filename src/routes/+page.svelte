<svelte:options runes={true} />

<script>
  import Card from "../components/Card.svelte";
  import Navbar from "../components/Navbar.svelte";
  let data = [
    {
      article_id: "1",
      headline: "Samsung Harman’s AI Will Make Cars More Empathetic",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A impedit fugiat modi voluptatibus ut, rerum, eveniet eos, harum sapiente ullam ex dolorum ducimus. Assumenda ullam hic saepe aspernatur nostrum sed?",
      date_of_article: "2025-01-17",
      scraped_at: "2025-01-17",
      source: "https://www.google.com",
      article_url: "https://www.google.com",
      author: "John Doe",
      topic: "AI",
    },
    {
      article_id: "2",
      headline: "Samsung Harman’s AI Will Make Cars More Empathetic",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A impedit fugiat modi voluptatibus ut, rerum, eveniet eos, harum sapiente ullam ex dolorum ducimus. Assumenda ullam hic saepe aspernatur nostrum sed?",
      date_of_article: "2025-01-17",
      scraped_at: "2025-01-17",
      source: "https://www.google.com",
      article_url: "https://www.google.com",
      author: "John Doe",
      topic: "AI",
    },
    {
      article_id: "3",
      headline: "OpenAI's GPT Reaches 1 Billion Users Globally",
      summary:
        "The AI model GPT has now surpassed 1 billion active users, transforming industries and redefining productivity.",
      date_of_article: "2025-01-15",
      scraped_at: "2025-01-16",
      source: "https://techcrunch.com",
      article_url: "https://techcrunch.com/gpt-global",
      author: "Alice Smith",
      topic: "AI",
    },
    {
      article_id: "4",
      headline: "Electric Cars Dominate 2025 Auto Sales",
      summary:
        "Electric vehicles now account for 70% of global auto sales, with advancements in battery technology leading the charge.",
      date_of_article: "2025-01-14",
      scraped_at: "2025-01-16",
      source: "https://www.cnn.com",
      article_url: "https://www.cnn.com/electric-cars",
      author: "Mark Johnson",
      topic: "Automotive",
    },
    {
      article_id: "5",
      headline: "NASA Confirms Water on Mars",
      summary:
        "NASA's latest Mars rover has discovered definitive evidence of water, opening new possibilities for future missions.",
      date_of_article: "2025-01-12",
      scraped_at: "2025-01-15",
      source: "https://www.nasa.gov",
      article_url: "https://www.nasa.gov/mars-water",
      author: "Dr. Emily Carter",
      topic: "Space",
    },
    {
      article_id: "6",
      headline: "New Breakthrough in Quantum Computing",
      summary:
        "Researchers have developed a quantum computer capable of solving problems previously considered impossible.",
      date_of_article: "2025-01-10",
      scraped_at: "2025-01-14",
      source: "https://www.wired.com",
      article_url: "https://www.wired.com/quantum-breakthrough",
      author: "Robert Lee",
      topic: "Technology",
    },
    {
      article_id: "7",
      headline: "Meta Introduces Revolutionary AR Glasses",
      summary:
        "Meta's new augmented reality glasses blend virtual and real worlds seamlessly, offering a futuristic experience.",
      date_of_article: "2025-01-11",
      scraped_at: "2025-01-13",
      source: "https://www.engadget.com",
      article_url: "https://www.engadget.com/meta-ar",
      author: "Sarah Jones",
      topic: "AR/VR",
    },
    {
      article_id: "8",
      headline: "Climate Change Policies Strengthened Globally",
      summary:
        "World leaders have agreed on stricter emissions targets to combat climate change in the next decade.",
      date_of_article: "2025-01-08",
      scraped_at: "2025-01-10",
      source: "https://www.bbc.com",
      article_url: "https://www.bbc.com/climate-policies",
      author: "David Green",
      topic: "Environment",
    },
    {
      article_id: "9",
      headline: "AI-Powered Healthcare Revolutionizes Diagnostics",
      summary:
        "AI tools are now diagnosing diseases with higher accuracy than human doctors in multiple clinical trials.",
      date_of_article: "2025-01-09",
      scraped_at: "2025-01-10",
      source: "https://www.forbes.com",
      article_url: "https://www.forbes.com/ai-healthcare",
      author: "Emma Wilson",
      topic: "Healthcare",
    },
    {
      article_id: "10",
      headline: "Breakthrough in Nuclear Fusion Achieved",
      summary:
        "Scientists have successfully generated more energy from a nuclear fusion reaction than was used to create it.",
      date_of_article: "2025-01-07",
      scraped_at: "2025-01-09",
      source: "https://www.sciencemag.org",
      article_url: "https://www.sciencemag.org/nuclear-fusion",
      author: "James Brown",
      topic: "Science",
    },
    {
      article_id: "11",
      headline: "SpaceX Plans Manned Mission to Mars",
      summary:
        "SpaceX announces its first manned mission to Mars, scheduled for late 2026, promising a new era of exploration.",
      date_of_article: "2025-01-06",
      scraped_at: "2025-01-08",
      source: "https://www.space.com",
      article_url: "https://www.space.com/spacex-mars",
      author: "Karen Hill",
      topic: "Space",
    },
    {
      article_id: "12",
      headline: "Apple Unveils Foldable iPhone",
      summary:
        "Apple's first foldable iPhone combines innovation with durability, redefining smartphone design for 2025.",
      date_of_article: "2025-01-05",
      scraped_at: "2025-01-07",
      source: "https://www.apple.com",
      article_url: "https://www.apple.com/foldable-iphone",
      author: "Tom Carter",
      topic: "Technology",
    },
  ];
</script>

<Navbar />
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {#each data as item}
    <Card {...item} />
  {/each}
</div>
