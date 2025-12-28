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
    if (msg.includes('installation') || msg.includes('connect') && (msg.includes('charge') || msg.includes('fee') || msg.includes('cost'))) {
      return `The **one-time installation charge is ৳1000** which includes:\n\n✅ Professional fiber optic installation\n✅ Equipment setup (router & cables)\n✅ Connection to our network\n✅ On-site technical support\n\n💰 **Total:** ৳1000 (one-time fee)\n⏱️ Installation typically takes 2-3 hours\n📅 Available 7 days a week\n\nAfter installation, your monthly billing starts from your chosen billing date (4th, 7th, 10th, or 15th of each month).\n\nReady to get connected?`;
    }

    // Package inquiries
    if (msg.includes('package') || msg.includes('plan') || msg.includes('price') || msg.includes('cost')) {
      return `Great! We offer **8 high-speed packages** ranging from 20 Mbps to 80 Mbps:\n\n📊 **Popular Packages:**\n• 20 Mbps - ৳600/month\n• 30 Mbps - ৳800/month\n• 40 Mbps - ৳1000/month ⭐ Most Popular\n• 50 Mbps - ৳1200/month\n• 60 Mbps - ৳1500/month\n• 70 Mbps - ৳2000/month\n• 80 Mbps - ৳2500/month\n\n✨ All packages include:\n• Unlimited data usage\n• 99.9% uptime guarantee\n• 24/7 customer support\n• Enhanced BDIX speeds (50-100 Mbps)\n• Free router installation\n\n💰 **One-Time Connection Charge:** ৳1000\n\nWould you like to request a connection?`;
    }

    // New connection
    if (msg.includes('connection') || msg.includes('subscribe') || msg.includes('new') || msg.includes('install')) {
      return `Excellent! Getting a new connection is easy! 🎉\n\n**Quick Steps:**\n1️⃣ Choose your package\n2️⃣ Fill the connection form\n3️⃣ Our team calls within 24 hours\n4️⃣ Site survey & installation\n5️⃣ Start enjoying high-speed internet!\n\n💰 **One-Time Connection Charge:** ৳1000\n(Optical Fiber Installation Fee)\n\n📝 You can submit a connection request on our website or call us at **09639-100200**\n\nWould you like me to share the connection form link?`;
    }

    // Billing date
    if (msg.includes('billing') && (msg.includes('date') || msg.includes('when'))) {
      return `You can choose your billing date when you sign up! 📅\n\n**Available Dates:**\n• 4th of each month (Early month)\n• 7th of each month (First week)\n• 10th of each month (Mid-month)\n• 15th of each month (Mid-month)\n\n⚠️ **Important:** Payment must be received by your billing date to avoid service interruption. Your Radius account will expire if payment is not received on time.\n\n💡 **Pro Tip:** Set a reminder or choose a date that aligns with your salary/payment schedule!\n\nNeed to change your billing date?`;
    }

    // Bill payment
    if (msg.includes('bill') || msg.includes('pay') || msg.includes('payment') || msg.includes('bkash') || msg.includes('nagad')) {
      return `We accept payments through multiple methods! 💳\n\n**Payment Methods:**\n\n**bKash Merchant:**\n📱 Number: 01915-451763\n💳 Or scan the QR code on our Bill Pay page\n\n**Nagad Personal:**\n📱 Number: 01721-373777\n\n⚠️ **IMPORTANT:** Always include your **Username or Customer ID** in the reference field!\n\n⚡ Activation time: 10-15 minutes after payment\n📞 Need help? WhatsApp: 01915-451763\n\nAfter payment, send us your transaction ID via WhatsApp for faster activation!`;
    }

    // Speed guarantee questions
    if (msg.includes('guarantee') || msg.includes('reliable') || msg.includes('stable')) {
      return `We guarantee **99.9% uptime** and consistent speeds! 📊\n\n✅ **Speed Guarantee:** You get exactly what you pay for (e.g., 40 Mbps = 40 Mbps actual speed)\n✅ **BDIX Enhanced:** Up to 100 Mbps on local content\n✅ **24/7 Stability:** Fiber optic technology ensures minimal downtime\n✅ **Low Latency:** Perfect for gaming and video calls\n\n⚙️ **Performance:**\n• Regular network monitoring\n• Proactive maintenance\n• Instant issue resolution\n\n🛠️ If you experience any issues:\n📞 Call: 09639-100200\n💬 WhatsApp: 01915-451763\n\nOur technical team responds within 15 minutes!`;
    }

    // Technical support
    if (msg.includes('support') || msg.includes('problem') || msg.includes('issue') || msg.includes('not working') || msg.includes('slow') || msg.includes('down') || msg.includes('disconnected') || msg.includes('router') || msg.includes('wifi') || msg.includes('internet not working')) {
      return `I'm here to help troubleshoot! 🛠️\n\n**Quick Troubleshooting Steps:**\n\n1️⃣ **Restart Your Router**\n• Unplug for 30 seconds\n• Plug back in and wait 2 minutes\n\n2️⃣ **Check Connections**\n• Verify all cables are secure\n• Try connecting via ethernet cable\n\n3️⃣ **Check Your Device**\n• Try another device\n• Check if Wi-Fi is enabled\n\n**Still having issues?**\n📞 **24/7 Support:**\n• Phone: 09639-100200\n• WhatsApp: 01915-451763\n\n⏱️ Average response time: 15 minutes\n🎯 Average resolution time: Within 2 hours\n\nWhat specific issue are you experiencing?`;
    }

    // Contact information
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('address') || msg.includes('call')) {
      return `Here's how you can reach us! 📞\n\n**Phone Numbers:**\n☎️ 09639-100200\n📱 01915-451763\n📱 01721-373777\n\n**Email:**\n📧 seabirdisp@gmail.com\n\n**WhatsApp:**\n💬 01915-451763\n\n**Office Address:**\n📍 House-1/2, Avenue-1, Block-Cha\nSection-2, Mirpur, Dhaka 1216\n\n**Office Hours:**\n🕐 24/7 Support Available\n\nHow else can I assist you?`;
    }

    // Wi-Fi password change
    if (msg.includes('wifi') && (msg.includes('password') || msg.includes('change') || msg.includes('reset') || msg.includes('name'))) {
      return `To change your Wi-Fi name or password: 🔧\n\n**Steps:**\n1. Open your browser and go to:\n   • 192.168.0.1\n   • 192.168.1.1\n\n2. Login with default credentials:\n   • Username: admin\n   • Password: admin\n   (Or check the router label)\n\n3. Navigate to: **Wi-Fi Settings**\n4. Change SSID (network name)\n5. Change password\n6. Save changes\n\n**Need help?**\n📞 We can do this remotely for you!\nCall: 09639-100200\n\n💡 **Tip:** Write down your new password in a safe place!`;
    }

    // Upgrade/downgrade package
    if (msg.includes('upgrade') || msg.includes('downgrade') || msg.includes('change package')) {
      return `Yes! You can upgrade or downgrade anytime! 🔄\n\n**No Contract = Complete Flexibility!**\n\n✅ **Upgrade:** Instant activation, pro-rated billing\n✅ **Downgrade:** Changes apply next billing cycle\n⏱️ Processing time: 24-48 hours\n💰 Only pay the difference\n\n**To change your package:**\n📞 Call: 09639-100200\n💬 WhatsApp: 01915-451763\n📧 Email: seabirdisp@gmail.com\n\n**Available packages:**\n20, 25, 30, 40, 50, 60, 70, 80 Mbps\n\nWhich package would you like to switch to?`;
    }

    // Contract/commitment questions
    if (msg.includes('contract') || msg.includes('commitment') || msg.includes('lock-in') || msg.includes('cancel anytime')) {
      return `**No contract, no lock-in!** 🎉\n\nYou have complete freedom!\n\n✅ Cancel anytime with 7 days notice\n✅ No penalties or fees\n✅ Upgrade/downgrade freely\n✅ Switch packages anytime\n✅ 100% flexible service\n\n**Only Commitment:**\n• Monthly payment (advance)\n• Pay before billing date\n\n💰 **One-time fee:** ৳1000 installation (that's it!)\n\n❌ **No:**\n• Annual contracts\n• Early termination fees\n• Equipment lease charges\n\n📞 Need to cancel? Call: 09639-100200\n\nComplete freedom to use as long as you need!`;
    }

    // Location/coverage questions
    if (msg.includes('location') || msg.includes('area') || msg.includes('coverage') || msg.includes('available')) {
      return `We're based in **Mirpur, Dhaka**! 📍\n\n**Service Area:**\n✅ Mirpur (Primary)\n✅ All blocks and sections\n✅ Residential and commercial\n\n**Office Address:**\nHouse-1/2, Avenue-1\nBlock-Cha, Section-2\nMirpur, Dhaka 1216\n\n📞 **Want to check if we cover your area?**\nCall: 09639-100200\nOr submit a connection request and we'll verify during site survey!\n\n🌐 We use fiber optic technology for reliable service across Mirpur.`;
    }

    // Speed/Performance
    if (msg.includes('speed') || msg.includes('fast') || msg.includes('mbps') || msg.includes('bandwidth')) {
      return `Our fiber optic network delivers **guaranteed speeds**! ⚡\n\n**Real Speed = Advertised Speed**\n✅ What you see is what you get!\n✅ No speed throttling\n✅ Consistent 24/7 speeds\n\n**Speed Breakdown:**\n📊 **Regular Speed:** Exactly as advertised (20-80 Mbps)\n🚀 **BDIX Speed:** 50-100 Mbps on local content\n⚡ **YouTube/FB:** Enhanced streaming\n🎮 **Gaming:** Low latency optimized\n\n**Perfect For:**\n• Gaming (stable connection)\n• 4K/HD video streaming\n• Remote work\n• Online classes\n• Video conferencing\n• Large file downloads\n\nWhich speed tier interests you?`;
    }

    // Greeting responses
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return `Hello${userName ? ' ' + userName : ''}! 👋 How can I help you today?\n\nFeel free to ask about packages, billing, technical support, or anything else!`;
    }

    // Thank you
    if (msg.includes('thank') || msg.includes('thanks')) {
      return `You're very welcome${userName ? ' ' + userName : ''}! 😊\n\nIs there anything else I can help you with today?`;
    }

    // Static IP questions
    if (msg.includes('static ip') || msg.includes('dedicated ip') || msg.includes('fixed ip')) {
      return `Yes! We offer **Static IP addresses**! 🔒\n\n**Perfect for:**\n✅ Remote access (security cameras)\n✅ CCTV systems\n✅ Web servers\n✅ VPN setups\n✅ Gaming servers\n✅ Business applications\n\n**Benefits:**\n• Consistent, fixed IP address\n• Always accessible from anywhere\n• Professional applications\n• Enhanced security\n\n**Additional monthly charges apply.**\n\n📞 To request: Call 09639-100200\n💬 WhatsApp: 01915-451763\n\nOur team will configure it for you within 24 hours!`;
    }

    // Data usage/unlimited questions
    if (msg.includes('unlimited') || msg.includes('data') || msg.includes('usage') || msg.includes('limit')) {
      return `Yes! **Unlimited data** on all packages! 🚀\n\n✅ **No data caps**\n✅ **No throttling**\n✅ **No overage charges**\n✅ Use as much as you want 24/7\n\n**Stream, download, game as much as you like!**\n\n📊 All our packages include:\n• Unlimited internet usage\n• Consistent speed guarantee\n• Enhanced BDIX for local content\n• 24/7 unlimited access\n\n💡 Whether you're streaming 4K videos, downloading large files, or gaming online - there's no limit!\n\nWhich package suits your needs?`;
    }

    // Default response
    return `I understand you're asking about "${userMessage}". ${userName ? userName + ', ' : ''}let me help you with that!\n\n**I can assist with:**\n• 📦 Internet packages & pricing (20-80 Mbps)\n• 🔌 New connection requests\n• 💳 Bill payment methods (bKash/Nagad)\n• 🛠️ Technical support & troubleshooting\n• 📞 Contact information\n• ⚙️ Package upgrades/downgrades\n• 🔒 Static IP addresses\n• 📅 Billing date changes\n\n**For immediate assistance:**\n📞 Call: 09639-100200\n💬 WhatsApp: 01915-451763\n📧 Email: seabirdisp@gmail.com\n\nWhat would you like to know more about?`;
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
