import { Copy, Check } from '@phosphor-icons/react';
import { useCopyToClipboard } from 'usehooks-ts';
import './Copy.styles.css';

export const CopyLink = ({ shortedUrl }: { shortedUrl: string }) => {
    const [value, copy] = useCopyToClipboard();

    const CopyToClipboard = () => {
        copy(shortedUrl);
    };

    return (
        <section onClick={CopyToClipboard}>
            {shortedUrl && (
                <div className="shorted-container">
                    <span>{shortedUrl}</span>
                    <div className={'icon'}>
                        {value ? <Check size={26} className="check" /> : <Copy size={26} />}
                    </div>
                </div>
            )}
        </section>
    );
};
