import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, Mail, Clock, User2, Minimize2, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: string[];
};

type QuickReply = {
  label: string;
  value: string;
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [userName, setUserName] = useState('');
  const [conversationStage, setConversationStage] = useState<'greeting' | 'chatting'>('greeting');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies: QuickReply[] = [
    { label: "📦 View Packages", value: "I want to see your internet packages" },
    { label: "🔌 New Connection", value: "I need a new internet connection" },
    { label: "💳 Bill Payment", value: "How do I pay my bill?" },
    { label: "🛠️ Technical Support", value: "I need technical support" },
    { label: "📞 Contact Info", value: "What are your contact details?" },
    { label: "⚡ Speed & Features", value: "Tell me about your internet speed" },
  ];

  // Initial bot message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hello! 👋 Welcome to **Seabird Computer**");
      }, 300);
      setTimeout(() => {
        addBotMessage("I'm your virtual assistant. I'm here to help you with:\n\n• Internet packages & pricing\n• New connection requests\n• Bill payment information\n• Technical support\n• Contact information");
      }, 1200);
      setTimeout(() => {
        addBotMessage("May I know your name to assist you better?");
      }, 2000);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addBotMessage = (text: string, options?: string[]) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      options
    }]);
  };

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Installation charges
    if (msg.includes('installation') || (msg.includes('connect') && (msg.includes('charge') || msg.includes('fee') || msg.includes('cost')))) {
      return `The **one-time installation charge is ৳1000** which includes:\n\n✅ Professional fiber optic installation by expert technicians\n✅ Router & cable setup with testing\n✅ Direct connection to our high-speed network\n✅ On-site training & technical support\n✅ Network optimization for your location\n\n💰 **Total:** ৳1000 (one-time fee - completely transparent, no hidden charges)\n⏱️ Installation takes 2-3 hours\n📅 Available 7 days a week, including holidays\n🚀 Same-day installation available in most areas\n\n**After Installation:**\nYour monthly billing starts from your chosen date (4th, 7th, 10th, or 15th). You'll immediately enjoy **unlimited, high-speed internet**!\n\n💡 **Pro Tip:** Book your installation today to get connected ASAP!`;
    }

    // Package inquiries
    if (msg.includes('package') || msg.includes('plan') || msg.includes('price') || msg.includes('cost') || msg.includes('mbps')) {
      return `Great question! We have **8 flexible packages** designed for every need:\n\n📊 **Our Packages:**\n• 20 Mbps - ৳600/month (Perfect for browsing)\n• 30 Mbps - ৳800/month (Great for families)\n• 40 Mbps - ৳1000/month ⭐ **Most Popular!**\n• 50 Mbps - ৳1200/month (Smooth 4K streaming)\n• 60 Mbps - ৳1500/month (Professional use)\n• 70 Mbps - ৳2000/month (Heavy usage)\n• 80 Mbps - ৳2500/month (Maximum speed)\n\n✨ **What's Included:**\n✅ Unlimited data (no caps, ever!)\n✅ 99.9% uptime guarantee\n✅ Enhanced BDIX speeds (50-100 Mbps local content)\n✅ Priority customer support (home visits: 10:00 AM–8:00 PM)\n✅ Free professional installation (৳1000 value)\n✅ Router included\n✅ Free maintenance & support\n\n💰 **One-Time Connection Charge:** ৳1000 only\n\n**Can't decide?** Most customers love our 40 Mbps package for the perfect balance of speed and value. What type of usage do you have in mind?`;
    }

    // New connection
    if (msg.includes('connection') || msg.includes('subscribe') || msg.includes('register') || msg.includes('new') || msg.includes('get connected')) {
      return `Excellent! 🎉 Getting connected is super easy and quick!\n\n**Simple 5-Step Process:**\n1️⃣ **Choose** your preferred package (we can help!)\n2️⃣ **Fill** the connection form (takes 2 minutes)\n3️⃣ **Confirmation** call within 24 hours\n4️⃣ **Site survey** & installation scheduling\n5️⃣ **Go Live!** Enjoy unlimited high-speed internet\n\n⚡ **Timeline:** Usually connected within 48-72 hours\n✅ **No Contract** - Cancel anytime with 7 days notice\n💳 **Secure Payment** - bKash/Nagad payment methods\n\n💰 **Total Cost:**\n• One-time: ৳1000 (installation)\n• Monthly: Your chosen package rate\n\n**Next Steps:**\n📝 Click \"Request a Connection\" on our website\n📞 Or call us: **09639-100200**\n💬 Quick chat on WhatsApp: **01915-451763**\n\nOur friendly team will handle everything from there! Which speed package interests you?`;
    }

    // Billing date
    if (msg.includes('billing') && (msg.includes('date') || msg.includes('when') || msg.includes('choose'))) {
      return `You have complete control over your billing date! 📅\n\n**Choose Your Perfect Date:**\n• 4th of each month (Start of month)\n• 7th of each month (Early week)\n• 10th of each month (Mid-month)\n• 15th of each month (Mid-month)\n\n💡 **Smart Selection:** Choose a date that aligns with your paycheck or convenient time!\n\n⚠️ **Payment Deadline:**\nYour payment must be received by your billing date to avoid interruption. We send reminders before the date.\n\n✅ **Easy Payment Methods:**\n• bKash: 01915-451763\n• Nagad: 01721-373777\n⚡ Just 10-15 minutes to activate after payment\n\n**Can't afford this date?**\n📞 Call us - we can discuss flexible arrangements!\n💬 WhatsApp: 01915-451763\n\nRemember: Set a calendar reminder and you'll never miss a payment!`;
    }

    // Bill payment
    if (msg.includes('bill') || msg.includes('pay') || msg.includes('payment') || msg.includes('bkash') || msg.includes('nagad') || msg.includes('how to pay')) {
      return `Paying your bill is simple and secure! 💳\n\n**Two Easy Payment Methods:**\n\n🟠 **bKash Merchant:**\n📱 Number: **01915-451763**\n💳 Or scan our QR code (on Bill Pay page)\n✅ Instant processing\n\n🔵 **Nagad (Alternate):**\n📱 Number: **01721-373777**\n✅ Direct transfer\n\n⚠️ **IMPORTANT - Don't Forget:**\nAlways include **Username or Customer ID** in reference field for instant activation!\n\n**After Payment:**\n⚡ Service activates in 10-15 minutes\n📞 Having issues? WhatsApp your transaction ID: 01915-451763\n✅ We'll confirm immediately\n\n**Pro Tips:**\n💡 Set up reminders 2-3 days before billing date\n💡 Keep your Customer ID handy for quick reference\n💡 Save our numbers to your phone\n\nNeed help with payment? Our support team is available 10:00 AM–8:00 PM for home support; WhatsApp for the fastest response.`;
    }

    // Speed guarantee questions
    if (msg.includes('guarantee') || msg.includes('reliable') || msg.includes('stable') || msg.includes('uptime')) {
      return `We stand behind our service with **99.9% uptime guarantee**! 🛡️\n\n**Our Guarantees:**\n✅ **Real Speeds:** What you pay for is what you get (no false promises!)\n✅ **24/7 Stability:** Fiber optic = minimal downtime\n✅ **Zero Throttling:** Full speed throughout the month\n✅ **Low Latency:** Optimized for gaming & video calls\n✅ **BDIX Enhanced:** 50-100 Mbps on local content\n\n**Why We're Reliable:**\n🔧 Regular network maintenance\n📊 24/7 monitoring by our expert team\n⚡ Backup systems for redundancy\n🚀 Fiber optic infrastructure (industry best)\n\n**If Issues Occur:**\nDon't worry! Our support team responds within **15 minutes** and resolves most issues **within 2 hours**.\n\n📞 **Immediate Support:**\n• Call: 09639-100200\n• WhatsApp: 01915-451763\n• Priority resolution for billing customers\n\nYour satisfaction is our priority! Any concerns?`;
    }

    // Technical support
    if (msg.includes('support') || msg.includes('problem') || msg.includes('issue') || msg.includes('not working') || msg.includes('slow') || msg.includes('down') || msg.includes('disconnected') || msg.includes('router') || msg.includes('wifi') || msg.includes('troubleshoot') || msg.includes('help')) {
      return `I'm here to help! 🛠️ Let me guide you through this.\n\n**Try These Quick Fixes First:**\n\n1️⃣ **Restart Your Router**\n• Unplug from power for 30-60 seconds\n• Wait 2 minutes after plugging back in\n• This fixes 60% of issues!\n\n2️⃣ **Check Physical Connections**\n• All cables firmly connected?\n• Check the fiber cable outside\n• Look for any damage to equipment\n\n3️⃣ **Try Different Devices**\n• Problem on all devices or just one?\n• Try via ethernet cable (fastest test)\n• Check if Wi-Fi is enabled\n\n4️⃣ **Reset Network Settings**\n• Forget Wi-Fi network on your device\n• Reconnect with your password\n\n**Still Not Working?**\nNo problem! Our expert support team is ready:\n\n📞 **Call Us Immediately:**\n☎️ 09639-100200\n💬 WhatsApp: 01915-451763\n\n⏱️ **Our Promise:**\n✅ Answer within 15 minutes\n✅ Most issues fixed within 2 hours\n✅ Remote support available\n✅ On-site visit if needed (no extra charge)\n\nDescribe your issue and let's get you back online fast!`;
    }

    // Contact information
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('address') || msg.includes('call') || msg.includes('reach')) {
      return `We're always here for you! 📞\n\n**Quick Contact Methods:**\n\n📱 **Call Us:**\n☎️ 09639-100200 (Main line)\n📱 01915-451763 (Quick support)\n📱 01721-373777 (Alternate)\n🕐 Home support: 10:00 AM–8:00 PM\n\n💬 **WhatsApp (Fastest Response):**\n📲 01915-451763\n⚡ Usually respond in < 5 minutes (instant for many queries)\n\n📧 **Email:**\n✉️ seabirdisp@gmail.com\n⏱️ Response within 2 hours\n\n🏢 **Visit Our Office:**\n📍 House-1/2, Avenue-1\n    Block-Cha, Section-2\n    Mirpur, Dhaka 1216\n🚗 Easy parking available\n☕ Come grab some tea!\n\n**Best Time to Reach Us:**\n✅ Home support visits: 10:00 AM–8:00 PM\n✅ WhatsApp for urgent help outside these hours\n\nWhich method works best for you?`;
    }

    // Wi-Fi password change
    if (msg.includes('wifi') && (msg.includes('password') || msg.includes('change') || msg.includes('reset') || msg.includes('name') || msg.includes('ssid'))) {
      return `No problem! Changing your Wi-Fi is easy! 🔧\n\n**DIY Method (2 Minutes):**\n\n1️⃣ **Access Router Settings:**\n   • Open browser → 192.168.0.1 or 192.168.1.1\n   • Enter login: admin / admin\n   (Check router sticker if different)\n\n2️⃣ **Find Wi-Fi Settings:**\n   • Look for \"Wireless\" or \"Wi-Fi\" section\n   • Find \"SSID\" (network name)\n   • Find \"Security Password\"\n\n3️⃣ **Make Changes:**\n   • Change SSID (your network name)\n   • Enter new strong password (8+ characters)\n   • Save/Apply changes\n\n4️⃣ **Reconnect on Devices:**\n   • Forget old network\n   • Connect with new credentials\n   • Done!\n\n💡 **Password Tips:**\n• Mix uppercase, lowercase, numbers\n• Avoid birthdays or simple numbers\n• Write it down and keep safe\n\n**Need Professional Help?**\nNo worries! We can handle it for you:\n\n📞 Call: 09639-100200\n💬 WhatsApp: 01915-451763\n✅ Remote assistance (5 minutes)\n✅ We change it securely for you\n✅ Cost: Complimentary for our customers!\n\nStuck? Send us a screenshot or just call!`;
    }

    // Upgrade/downgrade package
    if (msg.includes('upgrade') || msg.includes('downgrade') || msg.includes('change package') || msg.includes('switch')) {
      return `Great news! You can change packages **anytime without penalties**! 🔄\n\n**Flexibility You'll Love:**\n✅ **Upgrade:** Instant activation, pro-rated billing\n✅ **Downgrade:** Changes next billing cycle\n✅ **No Penalties** whatsoever\n✅ **No Contract Lock-in**\n⏱️ Usually processed in 24 hours\n💰 You only pay the difference\n\n**Simple Process:**\n\n📞 **Call our team:**\n☎️ 09639-100200\n💬 WhatsApp: 01915-451763\n\n**Or visit us in person** (we can do it in 5 minutes!)\n\n**Available Upgrades:**\n20 → 30 → 40 → 50 → 60 → 70 → 80 Mbps\n\n**Smart Upgrade Tips:**\n💡 4K streaming? Go for 40 Mbps+\n💡 Multiple users? 50 Mbps recommended\n💡 Business use? 60+ Mbps for reliability\n💡 Gaming? 40+ Mbps with low latency (we offer this!)\n\n**Example Cost Calculation:**\nIf you upgrade from 40 Mbps (৳1000) to 50 Mbps (৳1200):\n• Pay just ৳200 difference (monthly)\n• Instant activation\n• Same day processing\n\nWhich package would be perfect for your needs?`;
    }

    // Contract/commitment questions
    if (msg.includes('contract') || msg.includes('commitment') || msg.includes('lock-in') || msg.includes('cancel') || msg.includes('cancel anytime')) {
      return `**100% Freedom Guaranteed!** 🎉 No contracts, no tricks.\n\n**Your Freedom:**\n✅ **Cancel Anytime** - Just give 7 days notice\n✅ **No Penalties** - Ever!\n✅ **No Termination Fees**\n✅ **Upgrade/Downgrade** - Whenever you want\n✅ **No Equipment Lease** - Router is yours!\n✅ **No Annual Contracts**\n\n**The Only Commitment:**\n• Monthly advance payment before billing date\n• That's it! Simple and transparent.\n\n💰 **Your Costs - Crystal Clear:**\n✅ One-time: ৳1000 (installation & router)\n✅ Monthly: Your package rate\n❌ No hidden fees\n❌ No surprise charges\n❌ No equipment costs\n\n**Why So Flexible?**\nWe believe in earning your loyalty every month, not forcing it through contracts!\n\n**If You Ever Need to Cancel:**\n📞 Call: 09639-100200\n💬 WhatsApp: 01915-451763\n📧 Email: seabirdisp@gmail.com\n• 7 days notice\n• Process within 24 hours\n• We'll address any concerns!\n\n**Real Talk:** Most customers stay because they love our service - not because they have to. We'd love to keep you happy! Any concerns?`;
    }

    // Location/coverage questions
    if (msg.includes('location') || msg.includes('area') || msg.includes('coverage') || msg.includes('available') || msg.includes('mirpur')) {
      return `We're **Mirpur-based, serving Mirpur & surrounding areas!** 📍\n\n**Our Service Area:**\n✅ **All Mirpur blocks** (primary focus)\n✅ **All sections** in Mirpur (1-14)\n✅ **Residential areas** fully covered\n✅ **Commercial properties** welcome\n✅ Parts of **adjacent areas** (case-by-case)\n\n🏢 **Our Office:**\nHouse-1/2, Avenue-1\nBlock-Cha, Section-2\nMirpur, Dhaka 1216\n\n**Fiber Network Reach:**\n• Currently expanding fiber infrastructure\n• Fast installations in core Mirpur\n• Scalable for new areas\n\n**Want to Check If We Cover You?**\n\n**Option 1: Quick Check**\n📞 Call: 09639-100200\n💬 WhatsApp: 01915-451763\n(Just tell us your area/block)\n\n**Option 2: Submit Connection Request**\n📝 Fill our form on the website\n✅ Our team verifies during site survey\n✅ No obligation - just a consultation\n\n**Live in Mirpur?**\n✅ Most likely covered! \n🚀 Fast activation within 24-48 hours\n📊 High-quality fiber optic service\n\nLet me know your specific location and I'll help you instantly!`;
    }

    // Speed/Performance
    if (msg.includes('speed') || msg.includes('fast') || msg.includes('mbps') || msg.includes('bandwidth') || msg.includes('fast internet')) {
      return `Our fiber optic network delivers **lightning-fast speeds!** ⚡\n\n**Speed That's REAL (Not Fake):**\n✅ **What you buy = What you get**\n✅ No speed throttling ever\n✅ Consistent 24/7 speeds\n✅ No peak hour slowdowns\n✅ Tested & guaranteed\n\n**Speed Breakdown:**\n\n📊 **Standard Speed:**\nExactly as advertised (20-80 Mbps)\n\n🚀 **BDIX Boost:**\n50-100 Mbps on **local content**\n• YouTube faster\n• Facebook faster\n• Local streaming enhanced\n\n🎮 **Low Latency:**\n• Gaming optimized\n• Video calls crystal clear\n• Online multiplayer smooth\n\n**Speed Guide (What Do You Need?):**\n\n20-30 Mbps → Browsing, social media\n40 Mbps ⭐ → 4K streaming, families\n50+ Mbps → Multiple users, working from home\n60+ Mbps → Heavy usage, business\n80 Mbps → Maximum speed enthusiasts\n\n**Speed Comparison:**\n🐢 Old DSL: 5-10 Mbps\n🦌 Standard Broadband: 10-20 Mbps\n🚀 **Our Fiber:** 20-80 Mbps consistently!\n\n**Test Our Speed:**\n📞 Call: 09639-100200\n💬 Demo at our office\n✅ See actual speeds yourself!\n\nWhich speed tier matches your lifestyle?`;
    }

    // Greeting responses
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('howdy')) {
      return `Hello${userName ? ', ' + userName : ''}! 👋 So glad you reached out!\n\nWelcome to **Seabird Computer** - your trusted internet partner in Mirpur! 🚀\n\n**I'm here to help with:**\n• 📦 Internet packages & pricing\n• 🔌 New connection requests\n• 💳 Bill payments & billing questions\n• 🛠️ Technical support & troubleshooting\n• 📞 Contact information\n• ⚙️ Upgrades, downgrades & flexibility\n• 📅 Billing dates & account changes\n\n**What can I help you with today?** Just ask! 😊`;
    }

    // Thank you
    if (msg.includes('thank') || msg.includes('thanks') || msg.includes('appreciate')) {
      return `You're very welcome${userName ? ', ' + userName : ''}! 🙏\n\nWe truly appreciate your interest in Seabird Computer! That means the world to us.\n\n**Is there anything else** I can help you with?\n• More questions about our services?\n• Ready to get connected?\n• Need technical support?\n\nI'm here 24/7! 😊`;
    }

    // Static IP questions
    if (msg.includes('static ip') || msg.includes('dedicated ip') || msg.includes('fixed ip') || msg.includes('ipv4')) {
      return `Yes! We offer **Static IP addresses** for professionals! 🔒\n\n**Perfect For:**\n✅ Security cameras & CCTV systems\n✅ Remote access from anywhere\n✅ Web/gaming servers\n✅ VPN setups\n✅ Business applications\n✅ Online shops & streaming\n✅ Surveillance monitoring\n\n**Benefits:**\n• Consistent IP address (never changes)\n• Always accessible remotely\n• Professional-grade reliability\n• Enhanced security\n• Perfect for business\n• Easy port forwarding\n\n💰 **Additional Cost:**\nMinimal monthly charge (varies by package)\n\n**How to Get:**\n📞 Call: 09639-100200\n💬 WhatsApp: 01915-451763\n\n⚡ **Setup Time:** Within 24 hours\n✅ Remote configuration by our tech team\n✅ Free support & troubleshooting\n\n**Real Use Case:**\nRun a home camera system? Static IP lets you check it from anywhere in the world securely!\n\nInterested in this feature?`;
    }

    // Data usage/unlimited questions
    if (msg.includes('unlimited') || msg.includes('data') || msg.includes('usage') || msg.includes('limit') || msg.includes('cap')) {
      return `**Yes! Completely Unlimited Data!** 🚀\n\n**No Limits - Ever:**\n✅ **No data caps** - Stream all you want\n✅ **No throttling** - Full speed always\n✅ **No overage charges** - Zero surprise bills\n✅ **No usage restrictions** - Use 24/7\n✅ **No hidden limits** - We promise!\n\n**Use As Much As You Want:**\n📺 4K/8K streaming all day\n⬇️ Download 1TB files\n🎮 Online gaming constantly\n☁️ Cloud backups unlimited\n📱 Multiple devices streaming\n💼 Work from home stress-free\n\n**Real Customer Stories:**\n👨‍💼 \"I stream 12 hours daily + work from home\"\n👩‍👧‍👦 \"4 people using Netflix simultaneously\"\n🎮 \"8-hour gaming marathons\"\n✅ All on our service without issues!\n\n**All Packages Include:**\n📊 Unlimited everything\n✅ Same speed entire month\n✅ No degradation over time\n✅ Fair usage applies only after extreme limits (practically never)\n\n💡 **The Math:**\n40 Mbps for ৳1000/month = Best value in Mirpur!\n\nWant to know which package handles your usage? Tell me what you stream/download!`;
    }

    // Default response - More helpful
    return `${userName ? 'Hi ' + userName + '! 👋 ' : 'I appreciate your question! 😊 '}I'm here to help, and I want to give you the **best answer possible**.\n\nHere's what I can confidently help you with:\n\n📦 **Packages & Pricing**\n💳 **Bill Payment Methods**\n🔌 **Connection Requests**\n🛠️ **Technical Support**\n📞 **Contact Information**\n⚙️ **Upgrades & Downgrades**\n🔒 **Static IP & Features**\n📅 **Billing Dates & Account**\n⚡ **Internet Speed Questions**\n🏢 **About Seabird Computer**\n\n**For Specific Questions:**\nIf you have a unique question I haven't covered, our expert team is ready:\n\n📞 **Call:** 09639-100200 (24/7)\n💬 **WhatsApp:** 01915-451763 (Fastest!)\n📧 **Email:** seabirdisp@gmail.com\n\n**What brings you here today?** I'm ready to help! 🚀`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();

    // Check if this is the user providing their name
    if (conversationStage === 'greeting' && messages.length <= 3) {
      setUserName(userMessage);
      setConversationStage('chatting');
      
      const userMsg: Message = {
        id: Date.now().toString(),
        text: userMessage,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMsg]);
      setInputValue('');
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(`Nice to meet you, **${userMessage}**! 😊\n\nHow can I assist you today? You can choose from the options below or type your question.`);
        setShowQuickReplies(true);
      }, 1000);
      return;
    }

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      text: userMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    setShowQuickReplies(false);

    // Simulate bot response after a delay
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(userMessage);
      addBotMessage(response);
      
      // Show quick replies again after response
      setTimeout(() => {
        setShowQuickReplies(true);
      }, 500);
    }, 1200 + Math.random() * 800);
  };

  const handleQuickReply = (value: string) => {
    setInputValue(value);
    setShowQuickReplies(false);
    // Auto-submit
    setTimeout(() => {
      const event = new Event('submit', { bubbles: true, cancelable: true });
      document.getElementById('chat-form')?.dispatchEvent(event);
    }, 100);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/8801915451763", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:09639100200";
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-primary to-secondary hover:scale-110 text-white rounded-full shadow-lg flex items-center justify-center transition-all animate-fade-in group"
        aria-label="Open live chat"
      >
        <Headphones className="w-8 h-8 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 w-80 sm:w-[420px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[600px]'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary p-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Seabird Support</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-xs text-white/90 font-medium">Online • Typically replies instantly</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Minimize chat"
          >
            <Minimize2 className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <User2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-primary to-primary/90 text-white rounded-br-none shadow-md'
                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed" style={{ wordBreak: 'break-word' }}>
                      {message.text.split('**').map((part, i) => 
                        i % 2 === 0 ? part : <strong key={i} className="font-bold">{part}</strong>
                      )}
                    </p>
                    <p className={`text-xs mt-1.5 flex items-center gap-1 ${message.sender === 'user' ? 'text-white/80 justify-end' : 'text-gray-500 dark:text-gray-400'}`}>
                      <Clock className="w-3 h-3" />
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-2 flex-shrink-0">
                    <User2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-bl-none px-5 py-3 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Replies */}
          {showQuickReplies && conversationStage === 'chatting' && !isTyping && (
            <div className="px-4 pb-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">Quick replies:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply.value)}
                    className="text-xs px-3 py-2 bg-white dark:bg-gray-800 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg transition-all hover:scale-105 font-medium shadow-sm"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <form id="chat-form" onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-900 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={conversationStage === 'greeting' ? "Type your name..." : "Type your message..."}
                className="flex-1 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary rounded-full px-4 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-medium"
                autoFocus
              />
              <Button
                type="submit"
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-5 rounded-full shadow-md"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50 flex gap-2 flex-shrink-0">
            <Button
              onClick={handleCall}
              variant="outline"
              className="flex-1 border-primary/30 hover:bg-primary/10 text-primary text-xs h-9"
              size="sm"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Call Us
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs h-9"
              size="sm"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default LiveChat;
