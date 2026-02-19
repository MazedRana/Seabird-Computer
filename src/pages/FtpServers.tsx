import { useState } from "react";
import { ExternalLink, Copy, Server, Play, Film, Tv, HardDrive, Globe, AlertTriangle, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const iccFtpServers = [
  { name: "ICC FTP Server", url: "http://10.16.100.244/", type: "icc" },
];

const liveTvServers = [
  { name: "Live TV 1", url: "http://103.144.89.251/", type: "live" },
  { name: "Live TV 2", url: "https://kbtvpro.totalh.net/", type: "live" },
  { name: "Live TV 3", url: "https://fanzone-omega.vercel.app/", type: "live" },
  { name: "Live TV 4", url: "https://tv.asimxtech.online/", type: "live" },
  
];

const mediaAndMovieServers = [
  // FTP Servers
  { name: "Now HD Time", url: "https://nowhdtime.com.bd/", type: "movie", tag: "External — Unverified" },
  { name: "ABI Station", url: "http://103.134.58.242/", type: "movie", tag: "External — Unverified" },

  // Movies
  { name: "IM-Video TV", url: "https://im-videotv.com/", type: "movie", tag: "External — Unverified" },
  { name: "Movie Box", url: "https://moviebox.ph/", type: "movie", tag: "External — Unverified" },
  { name: "FMovies", url: "https://fmoviess.ca/", type: "movie", tag: "External — Unverified" },
  { name: "Movi PK", url: "https://www.movi.pk/", type: "movie", tag: "External — Unverified" },
  { name: "Free Funz Site", url: "https://freefunz.site/", type: "movie", tag: "External — Unverified" },
  { name: "Online Movies Hindi", url: "https://111.90.159.132/", type: "movie", tag: "External — Unverified" },
  { name: "Mp 4 Moviez", url: "https://www.mp4moviez.fail/", type: "movie", tag: "External — Unverified" },
  { name: "Southfreak", url: "https://southfreak.art/", type: "movie", tag: "External — Unverified" },
];

const FtpServers = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);
  const [disclaimerVisible, setDisclaimerVisible] = useState(true);

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      toast({ title: "Copied", description: `${label} copied to clipboard` });
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      toast({ title: "Error", description: "Failed to copy", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <header className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HardDrive className="w-8 h-8 text-primary" />
              <Tv className="w-8 h-8 text-amber-500" />
              <Film className="w-8 h-8 text-rose-500" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-amber-500 to-rose-500 bg-clip-text text-transparent">Media & Server Hub</h1>
            <p className="text-lg text-muted-foreground">Access FTP files, live streaming channels, and movie libraries for Seabird customers</p>
          </header>

          {/* Global disclaimer (visible to all users) */}
          {disclaimerVisible && (
            <div className="max-w-3xl mx-auto">
              <div className="rounded-md border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 mt-0.5 text-yellow-700 flex-shrink-0" />
                <div className="flex-1">
                  <strong>Disclaimer:</strong> Some external movie and media sites listed on this page are unverified and may host copyrighted
                  or unlicensed content. Seabird provides these links for convenience only — use at your own risk. ICC FTP server is official.
                </div>
                <button
                  onClick={() => setDisclaimerVisible(false)}
                  className="text-yellow-700 hover:text-yellow-900 transition-colors flex-shrink-0"
                  aria-label="Close disclaimer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ICC FTP Servers Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Seabird ICC FTP</h2>
              <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">Official</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {iccFtpServers.map((s) => (
                <div
                  key={s.url}
                  className="group relative p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{s.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">⚡ Fast & Reliable</p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <HardDrive className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open
                      </a>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copy(s.url, s.name)}
                        className="px-4"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other FTP Servers Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Server className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold">Other FTP and Movie Sites</h2>
              <div className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold">Public</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mediaAndMovieServers.map((s) => (
                <div
                  key={s.url}
                  className="group relative p-6 rounded-xl border border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-foreground">{s.name}</h3>
                          {s.type === 'movie' && <span className="text-lg">🎬</span>}
                          {s.type === 'ftp' && <span className="text-lg">🎬</span>}
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                        {s.type === 'movie' && <Film className="w-5 h-5 text-secondary" />}
                        {s.type === 'ftp' && <Film className="w-5 h-5 text-secondary" />}
                        {!s.type || (s.type !== 'movie' && s.type !== 'ftp') && <Globe className="w-5 h-5 text-secondary" />}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/90 text-white font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open
                      </a>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copy(s.url, s.name)}
                        className="px-4"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Live TV Servers Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Tv className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-3xl font-bold">Live TV Channels</h2>
              <div className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 text-xs font-semibold">Streaming</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {liveTvServers.map((s) => (
                <div
                  key={s.url}
                  className="group relative p-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{s.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">📺 Live Broadcasting</p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                        <Tv className="w-5 h-5 text-amber-500" />
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        Watch
                      </a>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copy(s.url, s.name)}
                        className="px-4"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Movie Servers Section - REMOVED, merged with Media & Movie Files above */}

          {/* End sections */}
        </div>
      </main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default FtpServers;
