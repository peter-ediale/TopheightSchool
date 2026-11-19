import { AnimatePresence, motion } from 'motion/react';
import { useState, type FormEvent } from 'react';

const classes = [
  'Pre-Nursery', 'Nursery 1', 'Nursery 2',
  'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
  'JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3',
];

/**
 * Admission enquiry form. For now it opens WhatsApp with the message pre-written,
 * so nothing is stored anywhere. A server-side version (Cloudflare Function → Google Sheet + email) comes later.
 */
export default function AdmissionForm({ whatsapp }: { whatsapp: string }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const parent = String(f.get('parent') || '').trim();
    const phone = String(f.get('phone') || '').trim();
    const cls = String(f.get('class') || '');
    if (!parent || !phone || !cls) { setError('Please fill in your name, phone number and the class.'); return; }
    setError('');
    const lines = [
      'Hello Topheight Schools, I would like to make an admission enquiry.',
      `Parent/guardian: ${parent}`,
      `Phone: ${phone}`,
      `Class applying for: ${cls}`,
      f.get('session') ? `Starting: ${f.get('session')}` : '',
      f.get('message') ? `Message: ${f.get('message')}` : '',
    ].filter(Boolean);
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    setSent(true);
  }

  const field = 'mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3.5 text-ink outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15';

  return (
    <div className="relative rounded-3xl bg-white p-6 sm:p-10 border border-navy-900/10 shadow-xl shadow-navy-900/5">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div key="done" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="py-10 text-center">
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-house-green text-3xl text-white">✓</div>
            <h3 className="display mt-6 text-3xl uppercase text-navy-900">Almost done</h3>
            <p className="mx-auto mt-3 max-w-sm text-ink/70">WhatsApp has opened with your enquiry written out. Just press <strong>send</strong> and our admissions team will reply.</p>
            <button onClick={() => setSent(false)} className="mt-6 font-semibold text-sky-600 underline">Send another enquiry</button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-5 sm:grid-cols-2" noValidate>
            <label className="block text-sm font-semibold text-navy-900">Parent / guardian name *
              <input name="parent" autoComplete="name" className={field} required />
            </label>
            <label className="block text-sm font-semibold text-navy-900">Phone number *
              <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="080..." className={field} required />
            </label>
            <label className="block text-sm font-semibold text-navy-900">Class applying for *
              <select name="class" className={field} required defaultValue="">
                <option value="" disabled>Select a class</option>
                {classes.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label className="block text-sm font-semibold text-navy-900">When would your child start?
              <select name="session" className={field} defaultValue="">
                <option value="">Not sure yet</option>
                <option>This term</option>
                <option>Next term</option>
                <option>Next academic session (September)</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-navy-900 sm:col-span-2">Anything else we should know?
              <textarea name="message" rows={4} className={field} />
            </label>
            {error && <p className="sm:col-span-2 rounded-xl bg-house-red/10 px-4 py-3 text-sm font-medium text-house-red" role="alert">{error}</p>}
            <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-ink/60">Your enquiry is sent through WhatsApp. We don't store it on this website.</p>
              <button className="rounded-full bg-navy-900 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-700">Send enquiry</button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
