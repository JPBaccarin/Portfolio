"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RiWhatsappLine, RiMailLine, RiLinkedinLine } from "@remixicon/react";
import { useLanguage } from "@/context/language-context";

interface ContactDialogProps {
  trigger: React.ReactNode;
}

export function ContactDialog({ trigger }: ContactDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-border/10">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold uppercase tracking-widest font-jetbrains text-primary">
            {t.footer.contactDialog.title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-8">
          <a
            href="https://wa.me/5519995078743"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-md border border-border/10 hover:bg-primary/5 hover:border-primary/20 transition-all group"
          >
            <div className="flex items-center gap-4">
              <RiWhatsappLine className="w-6 h-6 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest">{t.footer.contactDialog.whatsapp}</span>
            </div>
            <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              Launch_
            </span>
          </a>

          <a
            href="mailto:joaopedrobaccarin123@gmail.com"
            className="flex items-center justify-between p-4 rounded-md border border-border/10 hover:bg-primary/5 hover:border-primary/20 transition-all group"
          >
            <div className="flex items-center gap-4">
              <RiMailLine className="w-6 h-6 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest">{t.footer.contactDialog.email}</span>
            </div>
            <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              Mail_To
            </span>
          </a>

          <a
            href="https://linkedin.com/in/joão-pedro-baccarin-sardinha-424806283"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-md border border-border/10 hover:bg-primary/5 hover:border-primary/20 transition-all group"
          >
            <div className="flex items-center gap-4">
              <RiLinkedinLine className="w-6 h-6 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest">{t.footer.contactDialog.linkedin}</span>
            </div>
            <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              Profile_
            </span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
