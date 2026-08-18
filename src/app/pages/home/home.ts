import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button';

type Slide = {
  image: string;
  alt: string;
};

type TrendingItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
};

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  readonly slides: Slide[] = [
    {
      image: 'assets/images/home/home-slide1.png',
      alt: 'Siddhavetha campus landscape',
    },
    {
      image: 'assets/images/home/home-slide2.png',
      alt: 'Siddhavetha wellness campus',
    },
  ];

  readonly trendingItems: TrendingItem[] = [
    { id: 1, title: 'How Niwas Housing Finance is reshaping affordable housing finance', description: 'Tune in to the EY India Insights podcast as Niwas Housing CEO Shreejit Menon discusses housing finance trends, AI adoption, risk and growth strategies.', image: 'assets/images/home/trending-1.png', badge: 'Streaming now' },
    { id: 2, title: 'Overcoming transformation fatigue to achieve confidence-led finance', description: 'Listen to the EY India Insights podcast on overcoming finance transformation fatigue through confidence-led change and human-centered design.', image: 'assets/images/home/trending-2.png', badge: 'Streaming now' },
    { id: 3, title: 'How banks can balance risks with results through hedge accounting', description: 'Listen to the EY India Insights podcast on hedge accounting, risk management and financial reporting, and how banks can navigate volatility effectively.', image: 'assets/images/home/trending-3.png', badge: 'Streaming now' },
    { id: 4, title: 'Wellness Innovation in Healthcare', description: 'Explore the latest trends in healthcare innovation and wellness technology on our platform.', image: 'assets/images/home/trending-1.png', badge: 'New' },
    { id: 5, title: 'Sustainable Living Practices', description: 'Discover sustainable living practices and eco-friendly solutions for everyday wellness.', image: 'assets/images/home/trending-2.png', badge: 'Popular' },
    { id: 6, title: 'Digital Health Revolution', description: 'Learn about the digital transformation in healthcare and wellness services globally.', image: 'assets/images/home/trending-3.png', badge: 'Featured' },
    { id: 7, title: 'Siddha Science Today', description: 'Modern applications of ancient Siddha wisdom in contemporary wellness practices.', image: 'assets/images/home/trending-1.png', badge: 'Trending' },
    { id: 8, title: 'Retreat Experiences', description: 'Immersive wellness retreats combining tradition, nature and scientific wellness approach.', image: 'assets/images/home/trending-2.png', badge: 'Popular' },
  ];

  currentSlide = 0;
  previousSlide = 0;
  trendingOffset = 0;
  private intervalId: number | null = null;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  private startSlider(): void {
    this.stopSlider();
    this.intervalId = window.setInterval(() => {
      this.previousSlide = this.currentSlide;
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    }, 2000);
  }

  private stopSlider(): void {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextTrending(): void {
    const itemsToShow = 3;
    const maxOffset = Math.max(0, this.trendingItems.length - itemsToShow);
    this.trendingOffset = Math.min(this.trendingOffset + 1, maxOffset);
  }

  prevTrending(): void {
    this.trendingOffset = Math.max(this.trendingOffset - 1, 0);
  }

  getVisibleTrendingItems(): TrendingItem[] {
    return this.trendingItems.slice(this.trendingOffset, this.trendingOffset + 3);
  }
}
